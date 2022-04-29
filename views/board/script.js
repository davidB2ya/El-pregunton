let board = document.getElementById('board');

async function showPlayers() {
    const baseUrl = "http://localhost:3001"
    const response = await fetch(`${baseUrl}/api/players/all-players`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();
    console.log(data)
    console.log(data.message.length)
    console.log(data.status)

    if (data.status === 200) {
        for (let i = 0; i < data.message.length; i++) {
            addPlayer()
            function addPlayer() {
                const playerEl = document.createElement('div')
                playerEl.classList.add('project')
    
                const playerInnerHTML = `
                    <div class="flex items-center justify-between gap-6 h-full border p-4 rounded-lg mx-20 mt-4">
                        <h3 class="name">${data.message[i].nickname}</h3>
                        <span class="">${data.message[i].historyScore}</span>
                        <span class="">${data.message[i].attempts}</span>
                    </div>
                    `
                playerEl.innerHTML = playerInnerHTML
    
                board.appendChild(playerEl)
            }
        }
    }
};

showPlayers()
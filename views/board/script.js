let board = document.getElementById('board');

async function showPlayers() {
    const baseUrl = "http://localhost:3001"
    // const baseUrl = "https://preguntonback.herokuapp.com"
    const response = await fetch(`${baseUrl}/api/players/all-players`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if (data.status === 200) {
        for (let i = 0; i < data.message.length; i++) {
            addPlayer()
            function addPlayer() {
                const playerEl = document.createElement('div')
                playerEl.classList.add('project')
    
                const playerInnerHTML = `
                    <div class="flex items-center justify-between h-full border p-4 rounded-lg mx-20 mt-4">
                        <h3 class="w-24">${data.message[i].nickname}</h3>
                        <span class="w-24">${data.message[i].historyScore}</span>
                        <span class="w-24">${data.message[i].attempts}</span>
                    </div>
                    `
                playerEl.innerHTML = playerInnerHTML
    
                board.appendChild(playerEl)
            }
        }
    }
};

showPlayers()
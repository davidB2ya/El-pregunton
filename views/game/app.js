import { main } from "./game.js"

let play = document.getElementById('play')
let quizcontainer = document.getElementById('quiz')
let nickname = document.getElementById('nickname')
let user = document.getElementById('user')


let round = 1
const rounds = document.getElementById("round");
rounds.innerHTML = `Ronda ${round}`

async function validateNickname(nickname) {
    const baseUrl = "http://localhost:3001"
    // const baseUrl = "https://preguntonback.herokuapp.com"
    const response = await fetch(`${baseUrl}/api/players/new-player`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nickname,

        }),
    });

    const data = await response.json();

    if (data.message === 'Player has been create!') {
        localStorage.setItem('Player', `${nickname}`);
        return true;
    }
    if (data.message === 'This nickname already exists.') {
        localStorage.setItem('Player', `${nickname}`);
        return true;
    }
};

play.addEventListener('click', () => {
    if (validateNickname(nickname.value)) {
        quizcontainer.style.display = "block"
        user.style.display = "none"
        
        main()
    }

})
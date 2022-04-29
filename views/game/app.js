import { main } from "./game.js"
import { Quiz } from "../../models/Quiz.js";
import { questions } from "../../data/questions.js";

let play = document.getElementById('play')
let quizcontainer = document.getElementById('quiz')
let nickname = document.getElementById('nickname')
let user = document.getElementById('user')
let continueGame = document.getElementById('continue')
let modal = document.getElementById('modal')
let accepts = document.getElementById('accept')


let round = 0
const rounds = document.getElementById("round");
rounds.innerHTML = `Ronda ${round}`

async function validateNickname(nickname) {
    const baseUrl = "http://localhost:3001"
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
        return true;
    }
    if (data.message === 'This nickname already exists.') {
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

continueGame.addEventListener('click', () => {
    quizcontainer.style.display = "block"
    modal.style.display = "none"

})

accepts.addEventListener('click', () => {
    round++
    const quiz = new Quiz(questions);
    quiz.nextRound()
    main()
})

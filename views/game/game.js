//@ts-check
import { Quiz } from "../../models/Quiz.js";
import { UI } from "../../models/UI.js";
import { questions } from "../../data/questions.js";


// Renderring the page
const renderPage = (quiz, ui) => {
    if (quiz.isEnded()) {
        ui.showScores(quiz.score);
    } else {
        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);
        ui.showChoices(quiz.getQuestionIndex().choices, (currenChoice) => {
            quiz.guess(currenChoice)
            renderPage(quiz, ui);
            // if(quiz.guess(currenChoice) === true) {
            //     renderPage(quiz, ui);
            // }else {
            //     quiz.isEnded()
            //     // quiz.showYoulost(0)
            // }
        });
    }

};

export const main = () => {
    const quiz = new Quiz(questions);
    const ui = new UI();

    renderPage(quiz, ui);
}




//@ts-check
import { Question } from "./Question.js";
import { UI } from "./UI.js";
import { saveProgress } from "../data/request.js";

const ui = new UI();

let quizcontainer = document.getElementById('quiz')
let gameOver = document.getElementById('gameOver')

export class Quiz {
  score = 0;
  questionIndex = 0;

  /**
   *
   * @param {Question[]} questions
   */
  constructor(questions) {
    this.questions = questions;
  }

  /**
   *
   * @returns {Question} the question found
   */
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  isEnded() {
    if (this.questions.length === this.questionIndex) {
      const player = localStorage.getItem('Player')
      saveProgress(player, this.score)
      return true
    }

  }

  guess(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score = this.score + 5
      this.questionIndex++;
      return true
    }
    else {
      quizcontainer.style.display = "none"
      gameOver.style.display = "block"
      const player = localStorage.getItem('Player')
      saveProgress(player, 0)
      return false
    }
  }
}

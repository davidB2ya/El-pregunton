//@ts-check
import { Question } from "./Question.js";
import { UI } from "./UI.js";

const ui = new UI();

// let modal = document.getElementById('modal')
// let quizcontainer = document.getElementById('quiz')

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

  nextRound(){
    this.questionIndex = 0
  }

  isEnded() {
    if (this.questions.length === this.questionIndex) {
      return true;
    }
    // return this.questions.length === this.questionIndex;
  }
  guess(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score = this.score + 5
    }
    this.questionIndex++;
  }
  // guess(answer) {
  //   if (this.getQuestionIndex().correctAnswer(answer)) {
  //     this.score++;
  //     quizcontainer.style.display = "none"
  //     modal.style.display = "block"
  //   }
  //   else {
  //     quizcontainer.style.display = "none"
  //     ui.showScores(this.score)
  //   }
  //   this.questionIndex++;
  // }
}

export class UI {
  constructor() {}

  /**
   *
   * @param {sting} text
   */
  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerHTML = text
    // const rounds = document.getElementById("round");
    // rounds.innerHTML = `Ronda ${round}`
    ;
  }

  /**
   *
   * @param {string[]} choices
   */
  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.addEventListener("click", () => callback(choices[i]));
      button.className = "button";
      button.id = "response";
      button.innerText = choices[i];

      choicesContainer.append(button);
    }
  }

  showScores(score) {
    const gameOverHTML = `
      <h1>Puntaje</h1>
      <h2 id="score">Tu puntaje: ${score}</h2>
      <button id="accept">Aceptar</button>
      `;

    const element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
  }

  showProgress(currentIndex, total) {
    var element = document.getElementById("progress");
    element.innerHTML = `Pregunta ${currentIndex} / ${total}`;
  }
}

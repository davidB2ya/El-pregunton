export class UI {
  constructor() {}

  /**
   *
   * @param {sting} text
   */
  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerHTML = text
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
    <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto">
                <div class="w-full h-full text-center">
                    <div class="flex h-full flex-col justify-between">
                        <p class="text-gray-800 dark:text-gray-200 text-xl font-bold mt-4">
                          Terminó la ronda
                        </p>
                        <p class="text-gray-600 dark:text-gray-400 text-xs py-2 px-6">
                          Puntaje obtenido : ${score}
                        </p>
                        <div class="flex items-center justify-center w-full mt-8">
                            <a href="./view-game.html">
                                <button id="continue" type="button"
                                    class="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Apectar
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
      `;

    const element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
  }

  showProgress(currentIndex, total) {
    var element = document.getElementById("progress");
    element.innerHTML = `Pregunta ${currentIndex} / ${total}`;
  }
}

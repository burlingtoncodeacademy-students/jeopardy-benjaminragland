let timerCount = 300;
let speed = 1000;
playerOneScore = 0;
playerTwoScore = 0;
let questionCount = 0;
let playerTurn = "Player One";
let clicked = Array.from(document.getElementsByClassName("dollarValue"));
let disabledGuess = document.getElementById("roundOneGuess");
let disabledPass = document.getElementById("roundOnePass");
let playerOne = document.getElementById("playerOne");
let playerTwo = document.getElementById("playerTwo");
let answerInput = document.getElementById("answerInput");
let playerGuess = document.getElementById("roundOneGuess");
let playerPass = document.getElementById("roundOnePass");

function disableButtons() {
  disabledGuess.disabled = true;
  disabledPass.disabled = true;
}

function enableButtons() {
  disabledGuess.disabled = false;
  disabledPass.disabled = false;
}

// styles question text when tile is clicked
function styler(fill) {
  fill.style.color = "ghostwhite";
  fill.style.fontSize = "15px";
  fill.style.fontFamily = "arial";
  fill.style.textAlign = "center";
}

//starts jeopardy game round 1
Jeopardy();
function Jeopardy() {
  //buttons are disabled until player chooses a tile
  disableButtons();

  playerOne.textContent = `Player One Score: ${playerOneScore}`;
  playerTwo.textContent = `Player Two Score: ${playerTwoScore}`;
  //five minute round timer begins
  roundTimer(timerCount);

  function roundTimer(count) {
    interval = setInterval(fiveMinCount, speed);

    function fiveMinCount() {
      count--;
      if (count === 0) {
        clearInterval(interval);
        alert("Time is up for round 1");
      }
    }
  }

  clicked.forEach((element) => {
    //gets the id of the tile that was clicked
    element.addEventListener("click", function (evt) {
      let clickedItem = this.id;
      let fill = document.getElementById(clickedItem);

      //looks for matching id in array of question/answer objects & adds the question text to tile
      let findItem = (arr) =>
        arr.find((item) => Object.values(item).includes(clickedItem));
      let thisItem = findItem(roundOneCategoryOne);
      styler(fill);
      fill.textContent = thisItem.question;
      enableButtons();
    });
  });

  playerGuess.addEventListener("click", () => {
    let currentAnswer = answerInput.value;
    console.log(currentAnswer);
  });
}

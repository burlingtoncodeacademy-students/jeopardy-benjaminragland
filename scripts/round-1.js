let timerCount = 300;
let speed = 1000;
playerOneScore = 0;
playerTwoScore = 0;
let questionCount = 0;
let playerTurn = "Player One";
let clickedItem;
let questionFill;
let thisItem;
let playerAnswer;
let currentAnswer;
let gridContainer = document.getElementById("grid-container");
let clicked = Array.from(document.getElementsByClassName("dollarValue"));
let disabledGuess = document.getElementById("roundOneGuess");
let disabledPass = document.getElementById("roundOnePass");
let playerOne = document.getElementById("playerOne");
let playerTwo = document.getElementById("playerTwo");
let answerInput = document.getElementById("answerInput");
let playerGuess = document.getElementById("roundOneGuess");
let playerPass = document.getElementById("roundOnePass");

//functions to disable and enable buttons
function disableButtons() {
  disabledGuess.disabled = true;
  disabledPass.disabled = true;
}

function enableButtons() {
  disabledGuess.disabled = false;
  disabledPass.disabled = false;
}

//functions to disable and enable clicks after tile is chosen
function disableClicks() {
  gridContainer.style.pointerEvents = "none";
}

function enableClicks() {
  gridContainer.style.pointerEvents = "auto";
}

//looks for matching id in array of question/answer objects
let findItem = (arr) =>
  arr.find((item) => Object.values(item).includes(clickedItem));

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

  //loops through array for matching id of tile clicked / assigns to variable
  getObj();
  function getObj() {
    clicked.forEach((element) => {
      element.addEventListener("click", function (evt) {
        clickedItem = this.id;
        questionFill = document.getElementById(clickedItem);

        thisItem = findItem(roundOneCategoryOne);
        styler(questionFill);
        questionFill.textContent = thisItem.question;
        enableButtons();
        disableClicks();
      });
    });
  }

  //assigns player's answer to variable. checks that against correct answer.
  playerGuess.addEventListener("click", () => {
    questionCount++;
    playerAnswer = answerInput.value.toLowerCase();
    currentAnswer = thisItem.answer.toLowerCase();
    if (currentAnswer.includes(playerAnswer)) {
      console.log(thisItem.amount);
      answerInput.value = "";
      enableClicks();
    }
  });
}

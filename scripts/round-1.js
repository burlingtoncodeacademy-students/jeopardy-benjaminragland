//timer variable declarations
let timerCount = 300;
let secondCount = 10;
let speed = 1000;
let countDiv = document.getElementById("timer");
let guessTimerDiv = document.getElementById("guess-timer");
let minutes = timerCount / 60;
let seconds = (timerCount % 60) + "0";
let timerExpired;

//gameplay variable declarations
playerOneScore = 0;
playerTwoScore = 0;
let questionCount = 0;
let playerTurn = "Player One";
let guessPassed;
let incorrectAnswers;
let passCount = 0;
let clickedItem;
let questionFill;
let thisItem;
let playerAnswer;
let currentAnswer;
let timedOut = 0;

//document method declarations
let gridContainer = document.getElementById("grid-container");
let clicked = Array.from(document.getElementsByClassName("dollarValue"));
let disabledGuess = document.getElementById("roundOneGuess");
let disabledPass = document.getElementById("roundOnePass");
let turn = document.getElementById("player-turn");
let playerOne = document.getElementById("playerOne");
let playerTwo = document.getElementById("playerTwo");
let answerInput = document.getElementById("answerInput");
let playerGuess = document.getElementById("roundOneGuess");
let playerPass = document.getElementById("roundOnePass");

//functions to disable and enable pass and guess buttons
function disableButtons() {
  disabledGuess.disabled = true;
  disabledPass.disabled = true;
}

function enableButtons() {
  disabledGuess.disabled = false;
  disabledPass.disabled = false;
}

//functions for disabling and enabling pass button only
function disablePassBtn() {
  disabledPass.disabled = true;
}

function enablePassBtn() {
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

  turn.textContent = `Turn: ${playerTurn}`;
  playerOne.textContent = `Player One Score: ${playerOneScore}`;
  playerTwo.textContent = `Player Two Score: ${playerTwoScore}`;

  //five minute round timer begins
  roundTimer(timerCount);

  function roundTimer(count) {
    interval = setInterval(fiveMinCount, speed);

    function fiveMinCount() {
      countDiv.textContent = `Round: ${minutes.toString()}: ${seconds.toString()}`;
      count--;
      minutes = Math.floor(count / 60);
      seconds = count % 60;

      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (count < 0) {
        clearInterval(interval);
        alert("Time is up for round 1");
      }
    }
  }

  //function for 5 second guess timer
  function guessTimer(count) {
    tick = setInterval(fiveSecondCount, speed);

    function fiveSecondCount() {
      guessTimerDiv.textContent = count;
      count--;

      //logic for determining whether to pass turn if guessTimer runs out
      if (count < 0) {
        timedOut++;
        clearInterval(tick);
        guessTimerDiv.textContent = "";

        //prevents other player from getting second chance if timer runs out and they previously passed
        if (playerTurn === "Player One" && guessPassed === true) {
          playerOneScore -= thisItem.amount;
          playerOne.textContent = `Player One Score: ${playerOneScore}`;
          playerTurn = "Player Two";
          guessTimerDiv.textContent = "";
          questionFill.textContent = "";
          turn.textContent = `Turn: ${playerTurn}`;
          enableClicks();
          disableButtons();
        } else if (playerTurn === "Player Two" && guessPassed === true) {
          playerTwoScore -= thisItem.amount;
          playerTwo.textContent = `Player Two Score: ${playerTwoScore}`;
          playerTurn = "Player One";
          guessTimerDiv.textContent = "";
          questionFill.textContent = "";
          turn.textContent = `Turn: ${playerTurn}`;
          enableClicks();
          disableButtons();
        }

        //gives other player a chance to answer if timer runs out and nobody has passed
        if (playerTurn === "Player One" && guessPassed === false) {
          disablePassBtn();
          playerOneScore -= thisItem.amount;
          playerOne.textContent = `Player One Score: ${playerOneScore}`;
          playerTurn = "Player Two";
          turn.textContent = `Turn: ${playerTurn}`;
          answerInput.value = "";
          clearInterval(tick);
          guessTimer(secondCount);
        } else if (playerTurn === "Player Two" && guessPassed === false) {
          disablePassBtn();
          playerTwoScore -= thisItem.amount;
          playerTwo.textContent = `Player Two Score: ${playerTwoScore}`;
          playerTurn = "Player One";
          turn.textContent = `Turn: ${playerTurn}`;
          answerInput.value = "";
          clearInterval(tick);
          guessTimer(secondCount);
        }

        //if both players time out player reverts to last one to answer correctly
        if (timedOut === 2) {
          clearInterval(tick);
          guessTimerDiv.textContent = "";
          questionFill.textContent = "";
          answerInput.value = "";
          enableClicks();
          disableButtons();
          timedOut = 0;
        }
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

        thisItem = findItem(roundOneCategories);
        styler(questionFill);
        questionFill.textContent = thisItem.question;
        enableButtons();
        disableClicks();
        guessTimer(secondCount);
        guessPassed = false;
        timerExpired = false;
        incorrectAnswers = 0;
        timedOut = 0;
        console.log(thisItem);
      });
    });
  }

  //switch players if current player pushes pass button
  playerPass.addEventListener("click", () => {
    if (playerTurn === "Player One") {
      passCount++;
      playerTurn = "Player Two";
      turn.textContent = `Turn: ${playerTurn}`;
      clearInterval(tick);
      guessPassed = true;
      guessTimer(secondCount);
    } else if (playerTurn === "Player Two") {
      passCount++;
      playerTurn = "Player One";
      turn.textContent = `Turn: ${playerTurn}`;
      clearInterval(tick);
      guessPassed = true;
      guessTimer(secondCount);
    }
    if (passCount === 2) {
      clearInterval(tick);
      guessTimerDiv.textContent = "";
      questionFill.textContent = "";
      enableClicks();
      disableButtons();
      passCount = 0;
    }
  });

  //assigns player's answer to variable. checks that against correct answer.
  playerGuess.addEventListener("click", () => {
    enableButtons();

    playerAnswer = answerInput.value.toLowerCase();
    currentAnswer = thisItem.answer.toLowerCase();

    //checks to see if player's answer is correct
    if (currentAnswer === playerAnswer) {
      passCount = 0;
      clearInterval(tick);
      guessTimerDiv.textContent = "";
      //clears question and answer and enables clicks for next turn
      answerInput.value = "";
      questionFill.textContent = "";

      if (playerTurn === "Player One" && timedOut === 1) {
        playerOneScore += thisItem.amount;
        playerOne.textContent = `Player One Score: ${playerOneScore}`;
        disableButtons();
        enableClicks();
      } else if (playerTurn === "Player Two" && timedOut === 1) {
        playerTwoScore += thisItem.amount;
        playerTwo.textContent = `Player Two Score: ${playerTwoScore}`;
        disableButtons();
        enableClicks();
      }
      //updates score for current player if answer is correct
      if (playerTurn === "Player One") {
        playerOneScore += thisItem.amount;
        playerOne.textContent = `Player One Score: ${playerOneScore}`;
        disableButtons();
        enableClicks();
      } else if ((playerTurn = "Player Two")) {
        playerTwoScore += thisItem.amount;
        playerTwo.textContent = `Player Two Score: ${playerTwoScore}`;
        disableButtons();
        enableClicks();
      }
    }

    //updates score for current player if answer is incorrect
    if (currentAnswer !== playerAnswer) {
      clearInterval(tick);
      guessTimerDiv.textContent = "";
      //clears question and answer and enables clicks for next turn
      answerInput.value = "";

      //updates score for current player if answer is incorrect
      if (playerTurn === "Player One" && passCount === 1) {
        playerOneScore -= thisItem.amount;
        playerOne.textContent = `Player One Score: ${playerOneScore}`;
        playerTurn = "Player Two";
        turn.textContent = `Turn: ${playerTurn}`;
        questionFill.textContent = "";
        disableButtons();
        enableClicks();
      } else if (playerTurn === "Player Two" && passCount === 1) {
        playerTwoScore -= thisItem.amount;
        playerTwo.textContent = `Player Two Score: ${playerTwoScore}`;
        playerTurn = "Player One";
        turn.textContent = `Turn: ${playerTurn}`;
        questionFill.textContent = "";
        disableButtons();
        enableClicks();
      } else if (playerTurn === "Player One") {
        incorrectAnswers++;
        playerOneScore -= thisItem.amount;
        playerOne.textContent = `Player One Score: ${playerOneScore}`;
        playerTurn = "Player Two";
        turn.textContent = `Turn: ${playerTurn}`;
        disablePassBtn();
      } else if (playerTurn === "Player Two") {
        incorrectAnswers++;
        playerTwoScore -= thisItem.amount;
        playerTwo.textContent = `Player Two Score: ${playerTwoScore}`;
        playerTurn = "Player One";
        turn.textContent = `Turn: ${playerTurn}`;
        disablePassBtn();
      }

      //ends player attempts for current question if both player are incorrect
      if (incorrectAnswers === 2) {
        questionFill.textContent = "";
        answerInput.textContent = "";
        disableButtons();
        enableClicks();
      }
    }
    questionCount++;

    //ends round if all tiles have been selected *** need to add functionality to go to round 2 ***
    if (questionCount === 60) {
      alert("round over!");
    }
  });
}

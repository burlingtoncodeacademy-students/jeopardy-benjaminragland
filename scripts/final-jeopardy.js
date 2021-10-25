//retrieves player scores from round two stores them to variables
let playerOneScore = +sessionStorage.getItem("playerOneScore");
let playerTwoScore = +sessionStorage.getItem("playerTwoScore");

let playerOneWager;

//document method declarations
let playerOne = document.getElementById("playerOne");
let playerTwo = document.getElementById("playerTwo");
let finalQuestion = document.getElementById("finalQuestionDiv");

let playerOneWagerInput = document.getElementById("playerOneWager");
let playerOneAnswerInput = document.getElementById("playerOneAnswer");
let playerOneWagerSubmit = document.getElementById("playerOneWagerSubmit");
let playerOneAnswerSubmit = document.getElementById("playerOneAnswerSubmit");

let playerTwoWagerInput = document.getElementById("playerTwoWager");
let playerTwoAnswerInput = document.getElementById("playerTwoAnswer");
let playerTwoWagerSubmit = document.getElementById("playerTwoWagerSubmit");
let playerTwoAnswerSubmit = document.getElementById("playerTwoAnswerSubmit");

let finalJeopardyQuestion = {
  id: "finalJeopardy",
  category: "Medical Technology",
  question: "EKG stands for this medical procedure.",
  answer: "what is electrocardiogram",
};

// ***need to implement function
// function wagerCheck(wager, score) {
//   if (isNaN(wager)) {
//     alert("Please only enter a valid integer!");
//     playerOneWagerInput.value = "";
//     playerTwoWagerInput.value = "";
//   } else if (wager > score) {
//     alert("You cannot wager more than your total score!");
//     playerOneWagerInput.value = "";
//     playerTwoWagerInput.value = "";
//   } else {
//     playerOneWagerInput.value = "";
//     playerTwoWagerInput.value = "";
//   }
// }

//gameplay for final Jeopardy begins
finalJeopardy();
function finalJeopardy() {
  //disables final answer guess input until wager is made
  playerOneAnswerInput.disabled = true;
  playerTwoAnswerInput.disabled = true;
  playerTwoWagerSubmit.disabled = true;

  finalQuestion.textContent =
    "Make your wager based on your knowledge of the above category";
  playerOne.textContent = `Player One Score: ${playerOneScore}`;
  playerTwo.textContent = `Player Two Score: ${playerTwoScore}`;

  //assigns playerOne wager to variable. enables buttons for playerTwo to wager
  playerOneWagerSubmit.addEventListener("click", (evt) => {
    evt.preventDefault();
    playerOneWager = +playerOneWagerInput.value;
    // wagerCheck(playerOneWager,playerOneScore);
    console.log(playerOneWager);
    playerOneWagerInput.disabled = true;
    playerOneWagerSubmit.disabled = true;
    playerTwoWagerSubmit.disabled = false;
  });

  //assigns playerTwo wager to variable. enables buttons for playerOne to guess answer. reveals final question
  playerTwoWagerSubmit.addEventListener("click", (evt) => {
    evt.preventDefault();
    playerTwoWager = +playerTwoWagerInput.value;
    console.log(playerTwoWager);
    // wagerCheck(playerTwoWager,playerTwoScore);
    playerTwoWagerSubmit.disabled = true;
    finalQuestion.textContent = finalJeopardyQuestion.question;
    playerTwoWagerInput.disabled = true;
    playerOneAnswerInput.disabled = false;
    playerTwoAnswerInput.disabled = false;
    playerTwoAnswerSubmit.disabled = true;
  });

  //assigns playerOne answer to variable. enables buttons for player two to answer
  playerOneAnswerSubmit.addEventListener("click", (evt) => {
    evt.preventDefault();
    playerOneAnswer = playerOneAnswerInput.value.toLowerCase();
    playerOneAnswerSubmit.disabled = true;
    playerOneAnswerInput.disabled = true;
    playerTwoAnswerSubmit.disabled = false;
  });

  //assigns playerTwo answer to variable. reveals final answer. calls finalScores function
  playerTwoAnswerSubmit.addEventListener("click", (evt) => {
    evt.preventDefault();
    playerTwoAnswer = playerTwoAnswerInput.value.toLowerCase();
    playerTwoAnswerSubmit.disabled = true;
    finalQuestion.textContent = finalJeopardyQuestion.answer;
    finalScores();
  });

  function finalScores() {
    //checks playerOne answer and adjusts score
    if (playerOneAnswer === finalJeopardyQuestion.answer) {
      playerOneScore += playerOneWager;
      playerOne.textContent = `Player One Score: ${playerOneScore}`;
    } else {
      playerOneScore -= playerOneWager;
      playerOne.textContent = `Player One Score: ${playerOneScore}`;
    }

    //checks playerTwo answer and adjusts score
    if (playerTwoAnswer === finalJeopardyQuestion.answer) {
      playerTwoScore += playerTwoWager;
      playerTwo.textContent = `Player Two Score: ${playerTwoScore}`;
    } else {
      playerTwoScore -= playerTwoWager;
      playerTwo.textContent = `Player Two Score: ${playerTwoScore}`;
    }

    // checks to see who winner is and ends game with winner announcement
    if (playerOneScore > playerTwoScore) {
      finalQuestion.textContent = "Player One Wins!!! Thank you for playing!";
    } else if (playerOneScore === playerTwoScore) {
      finalQuestion.textContent =
        "You had a tie! Crazy luck! You're both winners!";
    } else {
      finalQuestion.textContent = "Player Two Wins!!! Thank you for playing!";
    }
  }
}

//retrieves player scores from round two stores them to variables
let playerOneScore = +sessionStorage.getItem("playerOneScore");
let playerTwoScore = +sessionStorage.getItem("playerTwoScore");

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

let finalJeopardyQuestion = [
  {
    id: "finalJeopardy",
    category: "Medical Technology",
    question: "EKG stands for this medical procedure.",
    answer: "What is electrocardiogram",
  },
];

//gameplay for final Jeopardy begins
finalJeopardy();
function finalJeopardy() {
  //disables final answer guess input until wager is made
  playerOneAnswer.disabled = true;
  playerTwoAnswer.disabled = true;

  finalQuestion.textContent =
    "Make your wager based on your knowledge of the above category";
  playerOne.textContent = `Player One Score: ${playerOneScore}`;
  playerTwo.textContent = `Player Two Score: ${playerTwoScore}`;

  playerOneWagerSubmit.addEventListener("click", (evt) => {
    playerOneAnswer = playerOneWagerInput.value;
    console.log(playerOneAnswer);
    evt.preventDefault();
  });
}

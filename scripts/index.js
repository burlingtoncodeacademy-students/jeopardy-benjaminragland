let startGame = document.getElementById("game-start");
playerCount = "Two Player Game";

startGame.addEventListener("click", (evt) => {
  document.location = "round-1.html#" + playerCount;
  evt.preventDefault();
});

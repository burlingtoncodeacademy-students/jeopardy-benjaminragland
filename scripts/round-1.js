let timerCount = 300;
let speed = 1000;
let questionCount = 0;
let styleString;
let clicked = Array.from(document.getElementsByClassName("dollarValue"));

function styler(fill) {
  fill.style.color = "ghostwhite";
  fill.style.fontSize = "15px";
  fill.style.fontFamily = "arial";
}
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
  element.addEventListener("click", function (evt) {
    let clickedItem = this.id;
    let fill = document.getElementById(clickedItem);

    let findItem = (arr) =>
      arr.find((item) => Object.values(item).includes(clickedItem));
    let thisItem = findItem(roundOneCategoryOne);
    styler(fill);
    fill.textContent = thisItem.question;
  });
});

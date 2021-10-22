let timerCount = 300;
let speed = 1000;

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

//Work-experience counter elements
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

//Work experience counter

const startDay = "12 Sep 2022";

function counter() {
  const startDate = new Date(startDay);
  const currentDate = new Date();

  const totalSeconds = new Date(currentDate - startDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.round(totalSeconds % 60);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0 ${time}` : time;
}

export { counter, formatTime };

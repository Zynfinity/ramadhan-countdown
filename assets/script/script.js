function countdownRamadhan() {
  let endDate = new Date("March 1, 2025 00:00:00");
  let nowDate = new Date();
  let timeRemaining = endDate.getTime() - nowDate.getTime();
  let daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hoursRemaining = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutesRemaining = Math.floor(
    (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
  );
  let secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.querySelector(".day span:first-of-type").textContent = daysRemaining;
  document.querySelector(".hours span:first-of-type").textContent =
    hoursRemaining;
  document.querySelector(".minutes span:first-of-type").textContent =
    minutesRemaining;
  document.querySelector(".seconds span:first-of-type").textContent =
    secondsRemaining;

  if (timeRemaining <= 0) {
    clearInterval(intervalId);
    document.querySelector(".countdown-container").innerHTML =
      "Ramadhan is here!";
  }
}
let intervalId = setInterval(countdownRamadhan, 1000);
function setFullHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setFullHeight);
setFullHeight();
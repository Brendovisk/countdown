import Coundown from "./modules/countdown.js";

const tempoParaONatal = new Coundown("24 December 2023 23:59:59 GMT-0300");
const countdown = document.querySelectorAll("[data-countdown]");

function showCountdownTime() {
  countdown.forEach((item) => {
    switch (item.getAttribute("data-countdown")) {
      case "days":
        item.innerText = tempoParaONatal.total.days;
        break;
      case "hours":
        item.innerText = tempoParaONatal.total.hours;
        break;
      case "minutes":
        item.innerText = tempoParaONatal.total.minutes;
        break;
      default:
        item.innerText = tempoParaONatal.total.seconds;
    }
  });
}

setInterval(() => {
  showCountdownTime();
}, 1000);

showCountdownTime();
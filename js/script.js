import Coundown from "./modules/countdown.js";

const tempoParaONatal = new Coundown("24 December 2023 23:59:59 GMT-0300");
const tempoParaOAnoNovo = new Coundown("31 December 2023 23:59:59 GMT-0300");

console.log(tempoParaONatal.total);
console.log(tempoParaOAnoNovo.total);

setInterval(() => {
  console.log(tempoParaONatal.total);
  console.log(tempoParaOAnoNovo.total);
}, 1000);

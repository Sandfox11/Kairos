console.log("console.js successfully loaded");

let CNSL = document.getElementById("ConINPT");
let History = document.getElementById("History");

CNSL.addEventListener('keydown', (keyEL) => {
  if (keyEL === "enter") {
    History.content = CNSL.value;
    CNSL.value = "";
  }
});

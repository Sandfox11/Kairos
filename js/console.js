console.log("console.js successfully loaded");

let CNSL = document.getElementById("ConINPT");
let History = document.getElementById("history");

CNSL.addEventListener('keydown', (e) => {
  if (e.key === "enter") {
    History.innerHTML = CNSL.value;
    CNSL.value = "";
  }
});

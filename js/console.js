console.log("console.js successfully loaded");

let CNSL = document.getElementById("ConINPT");
let History = document.getElementById("history");
let send = document.getElementById("sendBTN");

let SendText = function () {
  History.innerHTML = CNSL.value;
  CNSL.value = "";
};


send.addEventListener('click', SendText();)

CNSL.addEventListener('keydown', (e) => {
  if (e.key === "enter") {
    SendText();
  }
});

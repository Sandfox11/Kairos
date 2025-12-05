console.log("console.js successfully loaded");

const input = document.getElementById("field");
const history = document.getElementById("history");
let consoleBack = document.getElementById("console-BackBTN");
let historyArray = [];
let linecount = 0;

const commands = {
  echo(args) {  
    debug.log(args.join(" "));
  }
};

consoleBack.addEventListener('click', () => {
window.location.href = "../main/index.html";
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    historyArray.push(">" + input.value.trim() + "<br>");
    console.log(historyArray);
    input.value = "";
    if (linecount > 20) {
      historyArray.shift();
    }
    printLine();
    runCommand();
  }
});

function printLine(text) {
  history.innerHTML = historyArray.join("");
  linecount++;
}

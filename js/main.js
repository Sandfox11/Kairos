console.log("main.js successfully loaded");

let AboutBTN = document.getElementById("AboutBTN");
let UpdatesBTN = document.getElementById("UpdatesBTN");

AboutBTN.addEventListener('click', () => {
  window.location.href = "../about/index.html";
});

UpdatesBTN.addEventListener('click', () => {
  window.location.href = "../Updates/index.html";
});

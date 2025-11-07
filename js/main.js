console.log("main.js successfully loaded");

let AboutBTN = document.getElementById("about");
let AboutBack = document.getElementByID("about-BackBTN");

AboutBTN.addEventListener('click', () => {
  window.location.href = "../about/index.html";
});

AboutBack.addEventListener('click', () => {
  window.location.href = "../main/index.html";
});

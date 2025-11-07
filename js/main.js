console.log("main.js successfully loaded");

let AboutBTN = document.getElementById("about");

AboutBTN.addEventListener('click', () => {
  window.location.href = "../about/index.html";
});

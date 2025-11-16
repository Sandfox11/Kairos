console.log("main.js successfully loaded");

let AboutBTN = document.getElementById("AboutBTN");
let UpdatesBTN = document.getElementById("UpdatesBTN");
let LeadsBTN = document.getElementById("LeadsBTN");
let ToolsBTN = document.getElementById("ToolsBTN");
let SettingsBTN = document.getElementById("SettingsBTN");

AboutBTN.addEventListener('click', () => {
  window.location.href = "../about/index.html";
});

UpdatesBTN.addEventListener('click', () => {
  window.location.href = "../Updates/index.html";
});

LeadsBTN.addEventListener('click', () => {
  window.location.href = "../leads/index.html";
});

ToolsBTN.addEventListener('click', () => {
  window.location.href = "../tools/index.html";
});

SettingsBTN.addEventListener('click', () => {
  window.location.href = "../settings/index.html";
});

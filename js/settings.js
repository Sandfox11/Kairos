console.log("Settings.js successfully loaded");

let EVol = document.getElementById("EVol");
let MVol = document.getElementById("MVol");
let Brightness = document.getElementById("Bright");
let Amb = new Audio("../../audio/Vinal.mp3");
let Tck = new Audio("../../audio/Tick.mp3");
let Mus = new Audio("../../audio/Music.mp3");

function saveSettings() {
  let Settings = {
    EVol:EVol.value,
    MVol:MVol.value,
    Brightness:Brightness.value
  }

  localStorage.setItem("Settings", JSON.stringify(Settings));

  Amb.volume = JSON.parse(localStorage.getItem("Settings")).EVol / 110;
  Tck.volume = JSON.parse(localStorage.getItem("Settings")).EVol / 1000;
  Mus.volume = JSON.parse(localStorage.getItem("Settings")).MVol / 100;

}


document.getElementById("EVol").addEventListener("input", saveSettings);
document.getElementById("MVol").addEventListener("input", saveSettings);
document.getElementById("Bright").addEventListener("input", saveSettings);

saveSettings();

//audioManager stuff specificly for the settings page

Amb.loop = true;
Amb.autoplay = true;
Tck.loop = true;
Tck.autoplay = true;
Mus.loop = true;
Mus.autoplay = true;

if (localStorage.getItem("Settings") !== null) {
  Amb.volume = JSON.parse(localStorage.getItem("Settings")).EVol / 100;
  Tck.volume = JSON.parse(localStorage.getItem("Settings")).EVol / 1000;
  Mus.volume = JSON.parse(localStorage.getItem("Settings")).MVol / 100;
};

window.addEventListener("beforeunload", () => {
    localStorage.setItem("AmbTime", Amb.currentTime);
    localStorage.setItem("TckTime", Tck.currentTime);
    localStorage.setItem("MusTime", Mus.currentTime);

});

Amb.addEventListener("loadedmetadata", () => {
    if (localStorage.getItem("AmbTime") !== null) { Amb.currentTime = parseFloat(localStorage.getItem("AmbTime"));}
});

Mus.addEventListener("loadedmetadata", () => {
    if (localStorage.getItem("MusTime") !== null) { Mus.currentTime = parseFloat(localStorage.getItem("MusTime"));}
});

Tck.addEventListener("loadedmetadata", () => {
    if (localStorage.getItem("TckTime") !== null) { Tck.currentTime = parseFloat(localStorage.getItem("TckTime"));}
});


window.addEventListener("click", () => {
    Amb.play();
    Mus.play();
    Tck.play();
});

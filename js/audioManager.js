console.log("audioManager.js successfully loaded");

let Amb = new Audio("../../audio/Vinal.mp3");
let Tck = new Audio("../../audio/Tick.mp3");
let Mus = new Audio("../../audio/Music.mp3");

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
} else {
  Amb.volume = 0.1;
  Tck.volume = 0.005;
  Mus.volume = 0;
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
    if (localStorage.getItem("TckTime") !== null) { Tck.currentTime = parseFloat(localStorage.getItem("MusTime"));}
});


window.addEventListener("click", () => {
    Amb.play();
    Mus.play();
    Tck.play();
});

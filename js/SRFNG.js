console.log("console.js successfully loaded");

//Setup stuff
  let canvas = document.getElementById("Canvas");
  let ctx = canvas.getContext("2d");
  let fullscreenBTN = document.getElementById("fullscreenBTN");
  let box = document.getElementById("gameScreen");
  let keys = {};

  document.addEventListener("keydown", (e) => keys[e.key] = true);
  document.addEventListener("keyup", (e) => keys[e.key] = false);

  fullscreenBTN.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    box.requestFullscreen();   // enter fullscreen
    fullscreenBTN.blur();
  } else {
    document.exitFullscreen(); // exit fullscreen
    fullscreenBTN.blur();
  }
});
  document.addEventListener('fullscreenchange', (e) => {
    if (document.fullscreenElement) {
      console.log('Document entered fullscreen mode.');
      fullscreenBTN.style.display = "none";
      scene = CScene;
    } else {
      console.log('Document exited fullscreen mode.');
      fullscreenBTN.style.display = "flex";
      CScene = scene;
      scene = 0;
    }
});

  function resizeCanvas() {
    const w = gameScreen.clientWidth;
    const h = gameScreen.clientHeight;

    canvas.width = w;   // internal pixels
    canvas.height = h;

    canvas.style.width = w + "px";   // CSS size
    canvas.style.height = h + "px";

}

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

function CheckCLS(HBX) {
    if ((PX + PSize)  >= HBX.x1 && (PY + PSize) >= HBX.y1 && PX <= HBX.x2 && PY <= HBX.y2) {
      return true;
    } else return false;
}

function JSSetup() {
  window.SpeedX = canvas.width / 175;
  window.SpeedY = canvas.height / 175;
  window.PX = 100;
  window.PY = 100;
  window.PSize = canvas.height * 0.075;
  window.BXSize = canvas.width * 0.075;
  window.BYSize = canvas.height * 0.075;
  ctx.fillStyle = "rgb(200 0 0)";
  window.scene = 0;
  window.CScene = 1;
}

function draw() {
  window.BXSize = canvas.width * 0.2;
  window.BYSize = canvas.height * 0.1;
  window.SpeedX = canvas.width / 175;
  window.SpeedY = canvas.height / 175;
  PSize = canvas.height * 0.075;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  startHBX = {
    x1:(canvas.width - BXSize)/2,
    y1:(canvas.height - BYSize)/2,
    x2:((canvas.width - BXSize)/2) + BXSize,
    y2:((canvas.height - BYSize)/2) + BYSize
  }

  if (scene === 0) {
    ctx.fillStyle = "rgb(230 230 230)";
    ctx.font = (canvas.width / 40) + "px Consolas";
    ctx.fillText("please fullscreen to continue", ((canvas.width-300)/2), ((canvas.height-0)/2));

  } else if (scene === 1){

    if (keys["w"]) PY -= SpeedY;
    if (keys["s"]) PY += SpeedY;
    if (keys["a"]) PX -= SpeedX;
    if (keys["d"]) PX += SpeedX;

    //Text, UI, and Player display
    {
    ctx.fillStyle = "rgb(230 230 230)";
    ctx.fillRect((canvas.width - BXSize)/2, (canvas.height - BYSize)/2, BXSize, BYSize);

    ctx.fillStyle = "rgb(0 0 10)";
    ctx.font = (canvas.width / 30) + "px Consolas";
    ctx.fillText("Begin", ((canvas.width*1.12) - BXSize)/2, ((canvas.height*1.13) - BYSize)/2);

    ctx.fillStyle = "rgb(230 230 230)";
    ctx.font = (canvas.width / 50) + "px Consolas";
    ctx.fillText("WASD to move", 0, canvas.height / 30);
    ctx.fillText("Spacebar to select", 0, canvas.height / 16 );
    ctx.fillText("defeat the cloak", 0, canvas.height / 10.5 );

    ctx.fillStyle = "rgb(230 0 0)";
    ctx.fillText("Dont Die :)", 0, canvas.height / 8 );

    ctx.fillStyle = "rgb(200 0 0)";
    PX = Math.max(0, Math.min(PX, canvas.width - (PSize + 20)));
    PY = Math.max(0, Math.min(PY, canvas.height - (PSize + 20)));
    ctx.fillRect(PX, PY, PSize, PSize);
    }

    if (keys[" "] && CheckCLS(startHBX)) {
      console.log("The Game Has Begun");
      scene = 2;
      CScene = 2;
    }
  } else if (scene === 2) {

  }
}
JSSetup();
setInterval(draw, 16);

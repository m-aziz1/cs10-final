//ASTEROID DODGE

//CANVAS SETUP
cnv = document.getElementById("game-canvas");
ctx = cnv.getContext("2d");
cnv.width = 1050;
cnv.height = 750;

//DOCUMENT VARIABLES
const statusImg = document.getElementById("status-img");
const pauseImg = document.getElementById("pause-screen");
const audioImg = document.getElementById("audio-img");
const modeImg = document.getElementById("mode-img");
const skyImg = document.getElementById("sky-bground");
const rocketImg = document.getElementById("rocket-ship");
const meteorideImg = document.getElementById("meteoride-img");
const starImg = document.getElementById("star-img");
const rainbowStarImg = document.getElementById("rainbow-star");
const fullHeartOne = document.getElementById("full-heart1");
const fullHeartTwo = document.getElementById("full-heart2");
const fullHeartThree = document.getElementById("full-heart3");
const emptyHeartImg = document.getElementById("empty-heart");
const gameOverImg = document.getElementById("game-over");
const gameWinImg = document.getElementById("game-win");
const winAmongusImg = document.getElementById("win-amongus");
const loseAmongusImg = document.getElementById("lose-amongus");
const collideAudio = document.getElementById("collision-sound");

//GLOBAL VARIABLES
var active = false;
var count = 3;
var seconds = 0;
var minutes = 0;
var musicOn = false;
var frameCount = 0;
var backgroundY = -1750;
var score = 0;
var finalScore = 50;
var scorePos = 990;
var collisions = 0;
var gameStart = false;
var gameEnd = false;
//Rocket variables
var rocketX = 490;
var rocketY = 500;
//Meteoroid Positions
var meteorideX = [oneX = 50, twoX = 250, 
threeX = 450, fourX = 650, fiveX = 850,];
var meteorideY = [oneY = 0, twoY = 100,
threeY = 0, fourY = 100, fiveY = 0];
//Star Positions
var starX = 510;
var starY = -500;
var rainbowX = 505;
var rainbowY = -4000;

//START TIMERS
function countSound() {
  document.getElementById("countdown-sound").play();
}

function startgame() {
  if (gameStart === false) {
    requestAnimationFrame(animate);
    active = true;
    gameStart = true;
    countSound();
    startCountInterval = setInterval(function countDown() {
      count--;
      if (count === 0) {
        clearInterval(startCountInterval);
        count = "";
        playMusic();
        setInterval(stopwatch, 1000);
      }
    }, 1000);
  }
}

function stopwatch() {
  seconds++;
  if (seconds <= 9) {
    seconds = "0" + seconds;
  } else if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
}

//MAIN ANIMATION LOOP
requestAnimationFrame(animate);

function animate() {
  if (active) {
    frameCount++;

    //Animate Background
    updateBackground();

    if (frameCount > 240) {
      //Animate meteoroids and Stars
      updateProjectiles();
    }

    //Draw Background & Player
    ctx.drawImage(skyImg, 0, backgroundY);
    ctx.drawImage(rocketImg, rocketX, rocketY, 60, 120);

    //Start Countdown Timer
    ctx.font = "200px Arial";
    ctx.strokeStyle = "pink";
    ctx.strokeText(count, 470, 400);

    //Draw Meteroids & Stars
    if (frameCount > 180) {
      ctx.drawImage(starImg, starX, starY, 35, 35);
      ctx.drawImage(rainbowStarImg, rainbowX, rainbowY, 50, 50);
      ctx.drawImage(meteorideImg, meteorideX[0], meteorideY[0], 175, 175);
      ctx.drawImage(meteorideImg, meteorideX[1], meteorideY[1], 150, 150);
      ctx.drawImage(meteorideImg, meteorideX[2], meteorideY[2], 200, 200);
      ctx.drawImage(meteorideImg, meteorideX[3], meteorideY[3], 150, 150);
      ctx.drawImage(meteorideImg, meteorideX[4], meteorideY[4], 175, 175);

      collisionDetection();
    }

    //Hearts
    ctx.drawImage(fullHeartOne, 940, 10, 30, 30);
    ctx.drawImage(fullHeartTwo, 975, 10, 30, 30);
    ctx.drawImage(fullHeartThree, 1010, 10, 30, 30);
    //Score
    ctx.font = "27px Arial";
    ctx.strokeStyle = "yellow";
    ctx.strokeText(score, scorePos, 70);
    ctx.drawImage(starImg, 1015, 50, 20, 20);
    //Time
    ctx.font = "32px Times New Roman";
    ctx.fillStyle = "plum";
    ctx.fillText(minutes + ":" + seconds, 15, 40);

    collisionEffects();

    requestAnimationFrame(animate);
  }
}

function updateBackground() {
  backgroundY < -20
    ? (backgroundY += 2.5)
    : (backgroundY = -1250, backgroundY--);
}

//OBSTACLES MOTION
function updateProjectiles() {
  meteorideY[0] += 10;
  meteorideY[1] += 8.5;
  meteorideY[2] += 8;
  meteorideY[3] += 8.5;
  meteorideY[4] += 10;
  starY += 10;
  rainbowY += 12;

  //Total spawn area width = 900 (accounting for meteoroid size)
  if (meteorideY[0] > 750) {
    meteorideY[0] = 0;
    meteorideX[0] = Math.random() * 450;
  } else if (meteorideY[1] > 750) {
    meteorideY[1] = 0;
    meteorideX[1] = Math.random() * 450;
  } else if (meteorideY[2] > 750) {
    meteorideY[2] = 0;
    meteorideX[2] = Math.random() * 450 + 225;
  } else if (meteorideY[3] > 750) {
    meteorideY[3] = 0;
    meteorideX[3] = Math.random() * 450 + 450;
  } else if (meteorideY[4] > 750) {
    meteorideY[4] = 0;
    meteorideX[4] = Math.random() * 450 + 450;
  } else if (starY > 750) {
    starY = -500;
    randNum = Math.random();
    if (randNum <= 0.2) {
      starX = Math.random() * 210;
    } else if (randNum <= 0.4) {
      starX = Math.random() * 420;
    } else if (randNum <= 0.6) {
      starX = Math.random() * 630;
    } else if (randNum <= 0.8) {
      starX = Math.random() * 840;
    } else {
      starX = Math.random() * 1000;
    }
  } else if (rainbowY > 750) {
    rainbowY = -4000;
    randNum = Math.random();
    if (randNum <= 0.2) {
      rainbowX = Math.random() * 210;
    } else if (randNum <= 0.4) {
      rainbowX = Math.random() * 420;
    } else if (randNum <= 0.6) {
      rainbowX = Math.random() * 630;
    } else if (randNum <= 0.8) {
      rainbowX = Math.random() * 840;
    } else {
      rainbowX = Math.random() * 1000;
    }
  }
}

//COLLISION DETECTION
function collisionDetection() {
  if (
    rocketX >= meteorideX[0] - 10 &&
    rocketX <= meteorideX[0] + 110 &&
    rocketY >= meteorideY[0] - 40 &&
    rocketY <= meteorideY[0] + 135
  ) {
    collisions++;
    meteorideY[0] = 750;
    collideAudio.play();
  } else if (
    rocketX >= meteorideX[1] - 10 &&
    rocketX <= meteorideX[1] + 90 &&
    rocketY >= meteorideY[1] - 40 &&
    rocketY <= meteorideY[1] + 115
  ) {
    collisions++;
    meteorideY[1] = 750;
    collideAudio.play();
  } else if (
    rocketX >= meteorideX[2] - 5 &&
    rocketX <= meteorideX[2] + 125 &&
    rocketY >= meteorideY[2] - 40 &&
    rocketY <= meteorideY[2] + 155
  ) {
    collisions++;
    meteorideY[2] = 750;
    collideAudio.play();
  } else if (
    rocketX >= meteorideX[3] - 10 &&
    rocketX <= meteorideX[3] + 90 &&
    rocketY >= meteorideY[3] - 40 &&
    rocketY <= meteorideY[3] + 115
  ) {
    collisions++;
    meteorideY[3] = 750;
    collideAudio.play();
  } else if (
    rocketX >= meteorideX[4] - 10 &&
    rocketX <= meteorideX[4] + 110 &&
    rocketY >= meteorideY[4] - 40 &&
    rocketY <= meteorideY[4] + 135
  ) {
    collisions++;
    meteorideY[4] = 750;
    collideAudio.play();
  } else if (
    rocketX > starX - 35 &&
    rocketX < starX + 15 &&
    rocketY > starY - 100 &&
    rocketY < starY + 25
  ) {
    score++;
    starY = 750;
  } else if (
    rocketX > rainbowX - 40 &&
    rocketX < rainbowX + 25 &&
    rocketY > rainbowY - 100 &&
    rocketY < rainbowY + 40
  ) {
    score += 3;
    rainbowY = 750;
  }
}

function collisionEffects() {
  if (collisions === 1) {
    fullHeartOne.src = "../images/rocket/empty-container.png";
  } else if (collisions === 2) {
    fullHeartTwo.src = "../images/rocket/empty-container.png";
  } else if (collisions >= 3) {
    active = false;
    gameEnd = true;
    musicOff();
    document.getElementById("lose-sound").play();
    //Display End Image
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx.drawImage(emptyHeartImg, 1010, 10, 30, 30);
    ctx.drawImage(gameOverImg, 225, 110);
    ctx.drawImage(loseAmongusImg, 460, 450, 125, 125);
  }

  if (score >= finalScore) {
    active = false;
    gameEnd = true;
    musicOff();
    document.getElementById("win-sound").play();
    //Display End Image
    ctx.fillStyle = "rgba(222, 184, 135, 0.2)";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx.drawImage(gameWinImg, 265, 140);
    ctx.drawImage(winAmongusImg, 470, 450, 110, 160);
  } else if (score >= 100) {
    scorePos = 960;
  } else if (score >= 10) {
    scorePos = 975;
  }
}

//DOCUMENT EVENTS
//Button Listeners in html
document.addEventListener("mousemove", mousemoveHandler);

//MOUSE CONTROLS
function mousemoveHandler(event) {
  //Update Variables
  let cnvRect = cnv.getBoundingClientRect(); //size of canvas
  rocketX = event.x - cnvRect.left;
  rocketY = event.y - cnvRect.top;

  if (rocketX < 0) {
    rocketX = 0;
  } else if (rocketX > 990) {
    rocketX = 990;
  }
  
  if (rocketY < 150) {
    rocketY = 150;
  } else if (rocketY > 630) {
    rocketY = 630;
  }
}

function restartGame() {
  location.reload();
}

function updateStatus() {
  if (count === "") {
    if (active === true) {
      active = false;
      musicOff();
      statusImg.src = "../images/rocket/pause-button.png";
      ctx.drawImage(pauseImg, 425, 275, 200, 200);
    } else {
      if (gameEnd !== true) {
        requestAnimationFrame(animate);
        active = true;
        if (musicOn === false) {
          playMusic();
          musicOn = true;
        }
        statusImg.src = "../images/rocket/play-button.png";
      }
    }
  }
}

function selectMode() {
  finalScore === 50
    ? (finalScore = Infinity, modeImg.src = "../images/rocket/endless-mode.png")
    : (finalScore = 50, modeImg.src = "../images/rocket/50stars-mode.png");
    console.log(finalScore);
}

function playMusic() {
  let audio = document.getElementById("music");
  musicOn === false
    ? (audio.play(), musicOn = true, audioImg.src = "../images/rocket/audio-on.png")
    : (audio.pause(), musicOn = false, audioImg.src = "../images/rocket/audio-mute.png");
}

function musicOff() {
  if (musicOn) {
    playMusic();
    musicOn = false;
  }
}

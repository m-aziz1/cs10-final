// HOME PAGE BUTTONS

//DOCUMENT VARIABLES
var aboutImg = document.getElementById("about-img");
var gamesImg = document.getElementById("games-img");
var quizImg = document.getElementById("quiz-img");
var extraImg = document.getElementById("extra-img");

//About Button
function aboutHover() {
  aboutImg.src = "../images/home/about-hover.png";
}

function aboutNormal() {
  aboutImg.src = "../images/home/moon-about.png";
}

//Games Button
function gamesHover() {
  gamesImg.src = "../images/home/games-hover.png";
}

function gamesNormal() {
  gamesImg.src = "../images/home/rocket-games.png";
}

//Quiz Button
function quizHover() {
  quizImg.src = "../images/home/quiz-hover.png";
}

function quizNormal() {
  quizImg.src = "../images/home/sun-quiz.png";
}

//Extra Button
function extraHover() {
  extraImg.src = "../images/home/extra-hover.png";
}

function extraNormal() {
  extraImg.src = "../images/home/asteroid-extra.png";
}
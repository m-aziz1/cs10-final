//QUIZ ANSWER CHECK

//DOCUMENT VARIABLES
const submitBtnEl = document.getElementById("submit-btn");
const answersBox = document.getElementById("answer-key");
const qtnOneEl = document.getElementById("qtn-1");
const qtnTwoEl = document.getElementById("qtn-2");
const qtnThreeEl = document.getElementById("qtn-3");
const qtnFourEl = document.getElementById("qtn-4");
const qtnFiveEl = document.getElementById("qtn-5");
const qtnSixEl = document.getElementById("qtn-6");
const scoreEl = document.getElementById("score");

//GLOBAL VARIABLES
var score = 0;

//EVENT LISTENERS
submitBtnEl.addEventListener("click", checkAnswers);

//EVENT FUNCTIONS
//Buttons
function qFourTrue() {
  qtnFourEl.value = "true";
}

function qFourFalse() {
  qtnFourEl.value = "false";
}

function qSixTrue() {
  qtnSixEl.value = "true";
}

function qSixFalse() {
  qtnSixEl.value = "false";
}

function showAnswers() {
  if (answersBox.style.display === "none" || answersBox.style.display === "") {
    answersBox.style.display = "inline-block";
  } else {
    answersBox.style.display = "none";
  }
}

function fillanswers() {
  qtnOneEl.value = "Romans";
  qtnTwoEl.value = "Jupiter";
  qtnThreeEl.value = "Gravity";
  qtnFourEl.value = "False";
  qtnFiveEl.value = "Eorthe";
  qtnSixEl.value = "True";
}

function checkAnswers() {
  //Question Variables
  const qOne = qtnOneEl.value.toLowerCase();
  const qTwo = qtnTwoEl.value.toLowerCase();
  const qThree = qtnThreeEl.value.toLowerCase();
  const qFour = qtnFourEl.value.toLowerCase();
  const qFive = qtnFiveEl.value.toLowerCase();
  const qSix = qtnSixEl.value.toLowerCase();
  score = 0;

  //Check possible answers
  if (qOne === "romans" || qOne === "roman empire") {
    qtnOneEl.classList.add("correct");
    document.getElementById("q1-span").innerHTML =
      "<span style='color: green'>&nbspCorrect</span>";
    score++;
  } else {
    qtnOneEl.classList.add("incorrect");
    document.getElementById("q1-span").innerHTML =
      "<span style = 'color: red'>&nbspXIncorrect</span>";
  }

  if (qTwo === "jupiter") {
    qtnTwoEl.classList.add("correct");
    document.getElementById("q2-span").innerHTML =
      "<span style = 'color: green'>&nbspCorrect</span>";
    score++;
  } else {
    qtnTwoEl.classList.add("incorrect");
    document.getElementById("q2-span").innerHTML =
      "<span style = 'color: red'>&nbspIncorrect</span>";
  }

  if (qThree === "gravity") {
    qtnThreeEl.classList.add("correct");
    document.getElementById("q3-span").innerHTML =
      "<span style = 'color: green'>&nbspCorrect</span>";
    score++;
  } else {
    qtnThreeEl.classList.add("incorrect");
    document.getElementById("q3-span").innerHTML =
      "<span style = 'color: red'>&nbspIncorrect</span>";
  }

  if (qFour === "false") {
    qtnFourEl.classList.add("correct");
    document.getElementById("q4-span").innerHTML =
      "<span style = 'color: green'>&nbspCorrect</span>";
    score++;
  } else {
    qtnFourEl.classList.add("incorrect");
    document.getElementById("q4-span").innerHTML =
      "<span style = 'color: red'>&nbspIncorrect</span>";
  }

  if (qFive === "eorthe" || qFive === "erde") {
    qtnFiveEl.classList.add("correct");
    document.getElementById("q5-span").innerHTML =
      "<span style = 'color: green'>&nbspCorrect</span>";
    score++;
  } else {
    qtnFiveEl.classList.add("incorrect");
    document.getElementById("q5-span").innerHTML =
      "<span style = 'color: red'>&nbspIncorrect</span>";
  }

  if (qSix === "true") {
    qtnSixEl.classList.add("correct");
    document.getElementById("q6-span").innerHTML =
      "<span style = 'color: green'>&nbspCorrect</span>";
    score++;
  } else {
    qtnSixEl.classList.add("incorrect");
    document.getElementById("q6-span").innerHTML =
      "<span style = 'color: red'>&nbspIncorrect</span>";
  }

  //Call Score Function
  assignScore();

  //Reset Quiz
  submitBtnEl.addEventListener("click", resetQuiz);
}

function assignScore() {
  if (score <= 3) {
    scoreEl.innerHTML =
      "You'll do better next time!&nbsp" +
      score +
      "/6&nbsp" +
      ((score / 6) * 100).toFixed(1) +
      "%";
  } else if (score <= 5) {
    scoreEl.innerHTML =
      "Try again, your're almost there!&nbsp" +
      score +
      "/6&nbsp" +
      ((score / 6) * 100).toFixed(1) +
      "%";
  } else {
    scoreEl.innerHTML =
      "<span style = 'color: green'>Great job, you got them all right!&nbsp</span>" +
      score +
      "/6&nbsp" +
      ((score / 6) * 100).toFixed(1) +
      "%";
    document.getElementById("quiz-img").src = "../images/medal.jpg";
  }
}

function resetQuiz() {
  location.reload();
}

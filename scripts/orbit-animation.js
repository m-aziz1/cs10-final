// ORBIT ANIMATION SPEED

//DOCUMENT VARIABLES
var fasterBtn = document.getElementById("faster-btn");
var slowerBtn = document.getElementById("slower-btn");
var mercuryOrbit = document.getElementById("mercury-orbit");
var venusOrbit = document.getElementById("venus-orbit");
var earthOrbit = document.getElementById("earth-orbit");
var marsOrbit = document.getElementById("mars-orbit");

//ANIMATION DURATION VALUES
var mercuryDuration = parseInt(
  window.getComputedStyle(mercuryOrbit).getPropertyValue("animation-duration")
);
var venusDuration = parseInt(
  window.getComputedStyle(venusOrbit).getPropertyValue("animation-duration")
);
var earthDuration = parseInt(
  window.getComputedStyle(earthOrbit).getPropertyValue("animation-duration")
);
var marsDuration = parseInt(
  window.getComputedStyle(marsOrbit).getPropertyValue("animation-duration")
);

//Speed Increase
function speedUp() {
  if (mercuryDuration > 1) {
    mercuryDuration--;
    mercuryOrbit.style.animationDuration = mercuryDuration + "s";
  }
  if (venusDuration > 2) {
    venusDuration--;
    venusOrbit.style.animationDuration = venusDuration + "s";
  }
  if (earthDuration > 3) {
    earthDuration--;
    earthOrbit.style.animationDuration = earthDuration + "s";
  }
  if (marsDuration > 4) {
    marsDuration--;
    marsOrbit.style.animationDuration = marsDuration + "s";
  }
  if (
    mercuryDuration === 1 &&
    venusDuration === 2 &&
    earthDuration === 3 &&
    marsDuration === 4 &&
    fasterBtn.style.color !== "white"
  ) {
    fasterBtn.style.backgroundColor = "maroon";
    fasterBtn.style.color = "white";
    setTimeout(function () {
      fasterBtn.style.backgroundColor = "burlywood";
      fasterBtn.style.color = "midnightblue";
    }, 1000);
  }
}

//Speed Decrease
function speedDown() {
  if (mercuryDuration < 21) {
    mercuryDuration++;
    mercuryOrbit.style.animationDuration = mercuryDuration + "s";
  }
  if (venusDuration < 23) {
    venusDuration++;
    venusOrbit.style.animationDuration = venusDuration + "s";
  }
  if (earthDuration < 25) {
    earthDuration++;
    earthOrbit.style.animationDuration = earthDuration + "s";
  }
  if (marsDuration < 27) {
    marsDuration++;
    marsOrbit.style.animationDuration = marsDuration + "s";
  }
  if (
    mercuryDuration === 21 &&
    venusDuration === 23 &&
    earthDuration === 25 &&
    marsDuration === 27 &&
    slowerBtn.style.color !== "white"
  ) {
    slowerBtn.style.backgroundColor = "maroon";
    slowerBtn.style.color = "white";
    setTimeout(function () {
      slowerBtn.style.backgroundColor = "burlywood";
      slowerBtn.style.color = "midnightblue";
    }, 1000);
  }
}
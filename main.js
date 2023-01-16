// EVENT LISTENERS
document.getElementById("gNameBTN").addEventListener("click", gBtnClicked);
document.getElementById("bNameBTN").addEventListener("click", bBtnClicked);
document.getElementById("nameBTN").addEventListener("click", btnClicked);
document.getElementById("lNameBTN").addEventListener("click", lBtnClicked);

// VARIABLES
let outputEl = document.getElementById("output1");
let outputEl1 = document.getElementById("output2");
let outputEl2 = document.getElementById("output3");
let outputEl3 = document.getElementById("output4");

// IF STATEMENTS
function gBtnClicked() {
  let randName = Math.random();
  if (randName <= 0.12) {
    outputEl.innerHTML = "Verida";
  } else if (randName <= 0.22) {
    outputEl.innerHTML = "Elda";
  } else if (randName <= 0.33) {
    outputEl.innerHTML = "Adira";
  } else if (randName <= 0.43) {
    outputEl.innerHTML = "Arabella";
  } else if (randName <= 0.55) {
    outputEl.innerHTML = "Eloise";
  } else if (randName <= 0.68) {
    outputEl.innerHTML = "Nyota";
  } else if (randName <= 0.79) {
    outputEl.innerHTML = "Mazarine";
  } else if (randName <= 0.89) {
    outputEl.innerHTML = "Esmeria";
  } else {
    outputEl.innerHTML = "Khloris";
  }
}

function bBtnClicked() {
  let randBName = Math.random();
  if (randBName <= 0.12) {
    outputEl1.innerHTML = "Pierce";
  } else if (randBName <= 0.34) {
    outputEl1.innerHTML = "Nikolas";
  } else if (randBName <= 0.44) {
    outputEl1.innerHTML = "Elias";
  } else if (randBName <= 0.55) {
    outputEl1.innerHTML = "Ricky";
  } else if (randBName <= 0.66) {
    outputEl1.innerHTML = "August";
  } else if (randBName <= 0.76) {
    outputEl1.innerHTML = "Aldin";
  } else if (randBName <= 0.82) {
    outputEl1.innerHTML = "Julian";
  } else if (randBName <= 0.9) {
    outputEl1.innerHTML = "Archer";
  } else {
    outputEl1.innerHTML = "Fallon";
  }
}

function btnClicked() {}

function lBtnClicked() {
  let randLName = Math.random();
  if (randLName <= 0.18) {
    outputEl3.innerHTML = "Ashwood";
  } else if (randLName <= 0.29) {
    outputEl3.innerHTML = "Netherdane";
  } else if (randLName <= 0.4) {
    outputEl3.innerHTML = "Ashford";
  } else if (randName <= 0.55) {
    outputEl3.innerHTML = "Morrow";
  } else if (randName <= 0.65) {
    outputEl3.innerHTML = "Warner";
  } else if (randName <= 0.78) {
    outputEl3.innerHTML = "Whitlock";
  } else if (randName <= 0.89) {
    outputEl3.innerHTML = "Huxley";
  } else {
    outputEl3.innerHTML = "Spade";
  }
}

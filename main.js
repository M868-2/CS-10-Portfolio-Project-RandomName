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
    if (randName <= 0.15 ) {
        outputEl.innerHTML = Verida;
    } else if (randName <= 0.23) {
        outputEl.innerHTML = Elda;
    } else if (randName <= 0.33) {
        outputEl.innerHTML = Adira;
    } else if (randName <= 0.40) {
        outputEl.innerHTML = Arabella;
    } else if (randName <= 0.55) {
        outputEl.innerHTML = Eloise;
    } else if (randName <= 0.68) {
        outputEl.innerHTML = Nyota;
    } else if (randName <= 0.79) {
        outputEl.innerHTML = Mazarine;
    } else if (randName <= 0.89) {
        outputEl.innerHTML = Esmeria;
    } else {
        outputEl.innerHTML = Khloris;
    }
}

function bBtnClicked() {

}

function btnClicked() {

}

function lBtnClicked() {
    let randLName = Math.random();
    if (randLName <= 0.18) {
        outputEl3.innerHTML = Ashwood;
    } else if (randLName <= 0.29) {
        outputEl3.innerHTML = Netherdane;
    } else if (randLName <= 0.40){
        outputEl3.innerHTML = Ashford;
    }
}
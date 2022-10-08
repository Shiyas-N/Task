let number = 0;
const numdisplay = document.querySelector("#display");

const incrsButton = document.querySelector("#increase");
const clrButton = document.querySelector("#clear");
const decrsButton = document.querySelector("#decrease");

incrsButton.addEventListener("click",increment);
clrButton.addEventListener("click",clrdisp);
decrsButton.addEventListener("click",decrement);

function increment () {
    numdisplay.innerHTML = ++number
}
function decrement () {
    numdisplay.innerHTML = --number
}
function clrdisp () {
    number=0;
    numdisplay.innerHTML = 0;
}
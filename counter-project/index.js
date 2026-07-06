

const decreaseBtn = document.getElementById("decrease-button");
const resetBtn = document.getElementById("reset-button");
const increaseBtn = document.getElementById("increase-button");
const countDisplay = document.getElementById("count-display");

let count = countDisplay.textContent;

decreaseBtn.onclick = function () {
    count--;
    countDisplay.textContent = count;
}

resetBtn.onclick = function () {
    count = 0;
    countDisplay.textContent = 0;
}

increaseBtn.onclick = function () {
    count++;
    countDisplay.textContent = count;
}
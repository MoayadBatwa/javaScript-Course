let count;

document.getElementById("decrease-button").onclick = function () {
    count = document.getElementById("count-display").textContent;
    count = Number(count);
    count--;
    document.getElementById("count-display").textContent = count;
}

document.getElementById("reset-button").onclick = function () {
    document.getElementById("count-display").textContent = 0;
}

document.getElementById("increase-button").onclick = function () {
    count = document.getElementById("count-display").textContent;
    count = Number(count);
    count++;
    document.getElementById("count-display").textContent = count;
}
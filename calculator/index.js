const display = document.getElementById("display");

function appendToDisplay(input) {
    if (display.textContent != 'Error') {
        display.textContent += input.textContent;
    }
}

function clearDisplay() {
    display.textContent = "";
}

function calculateDisplay() {
    try {
        display.textContent = eval(display.textContent).toFixed(2);
    } catch (error) {
        display.textContent = 'Error';
    }
}
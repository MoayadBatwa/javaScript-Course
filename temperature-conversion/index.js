let degree;


const input = document.getElementById("input");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
const CTF = document.getElementById("celsiusToFahrenheit");
const FTC = document.getElementById("fahrenheitToCelsius");



function convertCelsiusToFahrenheit(celsiusDegree) {
    return celsiusDegree * (9 / 5) + 32;
}

function convertFahrenheitToCelsius(fahrenheitDegree) {
    return (fahrenheitDegree - 32) * (5 / 9);
}

submitBtn.onclick = function () {
    degree = input.value;
    result.textContent = CTF.checked ? `${convertCelsiusToFahrenheit(degree).toFixed(1)} °F` : FTC.checked ? `${convertFahrenheitToCelsius(degree).toFixed(1)} °C` : 'Select a Unit!';

}
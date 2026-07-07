
const minNum = 1;
const maxNum = 2;

const generatedNumber = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

window.alert("Welcome to Guess the Number Game!");

window.alert(`Try to guess the number between ${minNum} to ${maxNum}`);

let attempts = 0;
let userGuessedNumber = prompt("Enter your guessed number:");

while (true) {
    userGuessedNumber = Number(userGuessedNumber);

    if (isNaN(userGuessedNumber)) {
        userGuessedNumber = prompt("Please Enter a Number!");
    }
    else if (userGuessedNumber < minNum || userGuessedNumber > maxNum) {
        userGuessedNumber = prompt("Please Enter a Valid Number!");
    }
    else {
        attempts++;

        if (userGuessedNumber < generatedNumber) {
            userGuessedNumber = prompt(`${userGuessedNumber} is smaller than the Generated Number`)
        }
        else if (userGuessedNumber > generatedNumber) {
            userGuessedNumber = prompt(`${userGuessedNumber} is grater than the Generated Number`)
        }
        else {
            window.alert(`Congratulation! You Guessed the ${generatedNumber} Number Right on ${attempts} attempts!`)
            break;
        }
    }
}


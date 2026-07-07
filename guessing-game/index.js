

let generatedNumber = Math.floor(Math.random() * 100 + 1);

console.log(`generated: ${generatedNumber}`)

window.alert("Welcome to Guess the Number Game!");

window.alert("Try to guess the number between 1 to 100");

userGuessedNumber = prompt("Enter your guessed number:");

console.log(`user: ${userGuessedNumber}`)

while (userGuessedNumber != generatedNumber) {
    if (userGuessedNumber < generatedNumber){
        userGuessedNumber = prompt(`${userGuessedNumber} is smaller than the Generated Number`)
    }
    if (userGuessedNumber > generatedNumber){
        userGuessedNumber = prompt(`${userGuessedNumber} is grater than the Generated Number`)
    }
}

window.alert(`Congratulation! You Guessed the Number Right\nIt's ${generatedNumber}`)




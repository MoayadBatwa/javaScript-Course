const choices = ['rock', 'paper', 'scissors'];

const playerChoiceDisplay = document.getElementById('playerChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const resultDisplay = document.getElementById('result');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {

    computerChoice = choices[(Math.floor(Math.random() * 3))];
    console.log(computerChoice);

    playerChoiceDisplay.textContent = `Player: ${playerChoice}`;
    computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;

    result = '';

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!"
    } else {

        switch (playerChoice) {
            case "rock":
                result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOST!"
                break;

            case "paper":
                result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOST!"
                break;

            case "scissors":
                result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOST!"
                break;

        }

    }

    resultDisplay.classList.remove('tie', 'win', 'lose')

    switch (result) {
        case "IT'S A TIE!":
            resultDisplay.classList.add("tie");
            break;

        case "YOU WIN!":
            resultDisplay.classList.add("win");
            playerScoreDisplay.textContent = `${++playerScore}`
            break;

        case "YOU LOST!":
            resultDisplay.classList.add("lose");
            computerScoreDisplay.textContent = `${++computerScore}`
            break;
    }

    resultDisplay.textContent = result;


}


document.getElementById("rock").addEventListener("click", event => {
    playGame("rock");
})

document.getElementById("paper").addEventListener("click", event => {
    playGame("paper");
})

document.getElementById("scissors").addEventListener("click", event => {
    playGame("scissors");
})
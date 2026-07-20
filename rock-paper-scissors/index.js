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


    result = '';

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!"
        resultDisplay.textContent = result;
        resultDisplay.classList.add('tie')
    } else {

        switch (playerChoice) {
            case "rock":
                switch (computerChoice) {
                    case "paper":
                        result = 'YOU LOST!'
                        resultDisplay.textContent = result
                        resultDisplay.classList.add('lose')
                    break;

                    case "scissors":
                        result = 'YOU WIN!'
                        resultDisplay.textContent = result
                        resultDisplay.classList.add('win')
                    break;
                }
            break;

            case "paper":

            break;

            case "scissors":

            break;

        }

    }

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
const numDice = document.getElementById("numDice");
const rolling = document.getElementById('rolling');
const result = document.getElementById("result-container");
const images = document.getElementById("images");
const dices = document.getElementById("dices");

let ice = rolling.onclick = function() {
    result.innerHTML = '';

    if (Math.floor(numDice.value) > 0) {
        let dices = [];

    for (let dice = 1; dice <= numDice.value; dice++) {
        let roll = Math.floor(Math.random() * 6) + 1;

        dices.push(roll);

        const img = document.createElement('img');
        img.src = `images/${roll}.png`;
        result.appendChild(img);
        
    }

    const dice = document.createElement('p');
    dice.textContent = `Dice: ${[...dices].join(' - ')}`;
    result.prepend(dice);

    } else {
        result.innerHTML = 'Enter a Valid Number!'
    }

    
}


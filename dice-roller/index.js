const numDice = document.getElementById("numDice");
const rolling = document.getElementById('rolling');
const result = document.getElementById("image-result-container");
const dice = document.getElementById("dices-result");

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

    dice.textContent = `Dice: ${[...dices].join(' - ')}`;

    } else {
        result.innerHTML = 'Enter a Valid Number!'
    }

    
}


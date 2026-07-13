const numDice = document.getElementById("numDice");
const rolling = document.getElementById('rolling');
const result = document.getElementById("result-container");
const images = document.getElementById("images");
const dices = document.getElementById("dices");

let ice = rolling.onclick = function() {

    let dices = [];

    for (let dice = 0; dice < numDice.value; dice++) {
        let roll = Math.floor(Math.random() * 6) + 1;

        dices.push(roll);
        
    }

    result.innerHTML = `Dice: ${[...dices].join(' - ')}<br>`;

    for (const dice of dices) {
        const img = document.createElement('img');
        img.src = `images/${dice}.png`;
        result.appendChild(img);
    }
}


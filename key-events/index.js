const myBox = document.getElementById('myBox');

let x = 0;
let y = 0;
let moveSpace = 10;


// ------

const myImg = document.getElementById('myImg');


document.addEventListener('keydown', event => {
    myBox.style.backgroundColor = 'tomato';
    myBox.textContent = '🤕';
    myImg.style.visibility = 'visible';
    // myImg.style.display = 'block';
    myImg.style.opacity = '1';
});

document.addEventListener('keyup', event => {
    myBox.style.backgroundColor = 'greenYellow';
    myBox.textContent = '😁';
     myImg.style.visibility = 'hidden'
    //  myImg.style.display = 'none';
    myImg.style.opacity = '0';
});

document.addEventListener('keydown', event => {
    if (event.key.startsWith('Arrow')) {
        event.preventDefault();
        switch (event.key) {
            case "ArrowUp":
                x -= moveSpace;
                break;
            case "ArrowDown":
                x += moveSpace;
                break;
            case "ArrowLeft":
                y -= moveSpace;
                break;
            case "ArrowRight":
                y += moveSpace;
                break;
            default:
                return;
        }

        myBox.style.top = `${x}px`;
        myBox.style.left = `${y}px`;
    }

});
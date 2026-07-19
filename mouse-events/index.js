const myBlock = document.getElementById('my-block');
const myButton = document.getElementById('my-button');

myButton.addEventListener('click',(event) => {
    myBlock.style.backgroundColor = 'orange';
    myBlock.textContent = 'OUCH 🤕';
})

myButton.addEventListener('mouseover',(event) => {
    myBlock.style.backgroundColor = 'yellow';
    myBlock.textContent = 'Hold on 😦';
})

myButton.addEventListener('mouseout',(event) => {
    myBlock.style.backgroundColor = 'greenYellow';
    myBlock.textContent = 'Click Me 😁';
})
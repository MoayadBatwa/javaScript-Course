const passwordLength = document.getElementById('password-length');
const smallLetters = document.getElementById('small-letters');
const capitalLetters = document.getElementById('capital-letters');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const button = document.getElementById('generate-password-button');
const password = document.getElementById('generated-password');

function generatePassword() {
    small = 'abcdefghijklmnopqrstuvwxyz';
    capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    num = '0123456789';
    sym = '!@#$%^&*-_=+<>/?';

    let includedChars = ''
    let generatedPassword = '';

    if (smallLetters.checked)
        includedChars += small;
    if (capitalLetters.checked)
        includedChars += capital;
    if (numbers.checked)
        includedChars += num;
    if (symbols.checked)
        includedChars += sym;

    if (passwordLength.value < 1) {
        return 'Password Length must be at least (1) character';
    } else if (includedChars.length == 0) {
        return 'You must check at least (1) checkbox';
    } else {
        for (let index = 0; index < passwordLength.value; index++) {
            generatedPassword += includedChars[Math.floor(Math.random() * includedChars.length)];
        }
    }

    return generatedPassword;
}


button.onclick = function () {
    password.textContent = generatePassword();
}

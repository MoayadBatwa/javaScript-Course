// Create Header Section
const header = document.createElement('header');
const logo = document.createElement('div');
const menu = document.createElement('ul');

// Append Text Content to its Elements
const logoText = document.createTextNode('MoayadBatwa');
logo.appendChild(logoText);

const menuList = ['Home', 'About', 'Service', 'Contact']
for (let index = 0; index < menuList.length; index++) {
    const element = document.createElement('li');

    const elementText = document.createTextNode(`${menuList[index]}`);
    element.appendChild(elementText);

    // with its class for list-elements
    element.className = 'menuElement';

    menu.appendChild(element);
}

// Set Styles and Classes
header.classList.add("header");

logo.classList.add('logo');

menu.classList.add("menu");


// Append Elements to Header
document.body.appendChild(header);
header.appendChild(logo);
header.appendChild(menu);


// Apply hover on menu elements
const menuElements = document.querySelectorAll('.menu li');

menuElements.forEach(element => {    
    element.addEventListener('mouseover', () => {
            element.classList.toggle('menuHover');
    })

    element.addEventListener('mouseout', () => {
        element.classList.toggle('menuHover');
    })
});

/* // Advanced Better Way
// const menuElements = document.querySelector('.menu');
// menuElements.addEventListener('mouseover', (event) => {
//     event.target.classList.add('menuHover');
// });

// menuElements.addEventListener('mouseout', (event) => {
//     event.target.classList.remove('menuHover');
// });
*/



/// ============================================


const footer = document.createElement('footer');

const footerText = document.createTextNode('Copyright 2026');
footer.appendChild(footerText)

footer.setAttribute('class', 'footer');

footer.style.setProperty('background-color','rgb(44, 174, 131');
footer.style.setProperty('text-align', 'center');
footer.style.setProperty('color','white');
footer.style.setProperty('font-size','1.4rem');
footer.style.setProperty('padding','16px 0px');


document.body.appendChild(footer);
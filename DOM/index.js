// console.log(document);
console.dir(document);

const docStyle = document.body.style;

document.body.style.background = 'linear-gradient(to right,blue, red, yellow)';
docStyle.color = 'white';
docStyle.textAlign = "center";

/*   DOM Element Selectors   */
// 1.** document.getElementById(); // Element or null
// 2. document.getElementsByClassName(); // HTML Collection
// 3. document.getElementsByTagName(); // HTML Collection
// 4. document.querySelector(); // first match element or null
// 5.** document.querySelectorAll(); // NodeList - all matches


/*   DOM Navigation   */
// 1. .firstElementChild
// 2. .lastElementChild
// 3. .nextElementSibling
// 4. .previousElementSibling
// 5. .parentElement
// 6. .children


// ========= Element Selectors =========


const fruits = document.getElementById('fruits-list');
// console.log(fruits);


// ----------------------------------


let li = document.createElement('li');
li.textContent = 'strawberry';
li.id = 'add';
li.className = 'fruit';

fruits.prepend(li);

// console.log(li);

// document.lastElementChild.append(li);

// ----------------------------------


const title = document.getElementsByClassName("title");


Array.from(title).forEach(element => {
    element.style.color = 'black';
});
title[0].style.fontSize = '2rem';

// ----------------------------------

const liElements = document.getElementsByTagName('li');
// console.dir(liElements);

Array.from(liElements).forEach(element => {
    element.style.backgroundColor = "black";
    element.style.fontSize = '1.5rem';
});


// ----------------------------------


const firstList = document.querySelector('.title');
// console.dir(firstList);
firstList.style.textDecoration = 'underline';


// ----------------------------------


const allLists = document.querySelectorAll('.title');
// console.dir(allLists);

allLists.forEach(element => {
    element.style.backgroundColor = 'yellow';
});



// ========= DOM Navigation =========

const fruitList = document.getElementById('fruits-list');
fruitList.firstElementChild.style.backgroundColor = 'red';

// ---

const lists = document.querySelectorAll('ul');
console.dir(lists);
lists.forEach(element => {
    element.lastElementChild.style.background = 'linear-gradient(tomato, orange)'
})


// ------------------------


const fruitElement = document.getElementById('tomato');
fruitElement.previousElementSibling.style.background = 'linear-gradient(to right, cyan, brown)';

// ---

const aFruitList = document.getElementById("vegetables-list");
const nextNextElement = aFruitList.nextElementSibling.nextElementSibling;

console.dir(nextNextElement);
nextNextElement.style.color = 'yellow';


// ------------------------


const child = document.getElementById('tomato');
const itsParent = child.parentElement
itsParent.style.backgroundColor = 'pink';

const parents = document.getElementById('desserts-list');
const itsChildren = parents.children;
console.log(itsChildren);

Array.from(itsChildren).forEach(child => {
    const childTextLength = child.textContent.length
    child.textContent += ` ${childTextLength}`;
    child.style.textDecoration = 'underline'
})

itsChildren[0].style.background = 'linear-gradient(purple, green)';
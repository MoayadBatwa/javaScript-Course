console.log(document);

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
// 1. 
// 2. 
// 3. 
// 4. 
// 5. 



const fruits = document.getElementById('fruit-list');
console.log(fruits);


// ----------------------------------


let li = document.createElement('li');
li.textContent = 'strawberry';
li.id = 'add';
li.className = 'fruit';

fruits.prepend(li);

console.log(li);

// document.lastElementChild.append(li);

// ----------------------------------


const title = document.getElementsByClassName("title");


Array.from(title).forEach(element => {
    element.style.color = 'black';
});
title[0].style.fontSize = '2rem';

// ----------------------------------

const liElements = document.getElementsByTagName('li');
console.dir(liElements);

Array.from(liElements).forEach(element => {
    element.style.backgroundColor = "black";
    element.style.fontSize = '1.5rem';
});


// ----------------------------------


const firstList = document.querySelector('.title');
console.dir(firstList);
firstList.style.textDecoration = 'underline';


// ----------------------------------


const allLists = document.querySelectorAll('.title');
console.dir(allLists);

allLists.forEach(element => {
    element.style.backgroundColor = 'yellow';
});




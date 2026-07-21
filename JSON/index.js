// JSON => {key,value} OR [value1, value2, value3]

// JSON.stringify() = convert a JS object to a JSON string
// JSON.parse() = convert a JSON string to a JS object


const names = [
    "Moayad",
    "Mohammed",
    "Ahmed",
    "Omar"
];

const namesToJSON = JSON.stringify(names)

console.log(`JS to JSON = ${namesToJSON}`);


const person = '{"name": "Moayad","age": 23,"hobbies": ["football","table tennis","walking"]}'

const JSONToObject = JSON.parse(person)

console.log(`JSON to JS = ${JSONToObject}`)


// -----------------------------

fetch('people.json').then(response => response.json()).then(value => {
    console.log(value);
})

fetch('people.json').then(response => response.json()).then(values => {
    values.forEach(value => {
        console.log(value);
        console.log(value.name);
        console.log(value.hobbies[2]);
    });
}).catch(error => console.error(error))
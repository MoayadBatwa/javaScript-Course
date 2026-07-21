// Repeat main Div 100 times
for (let index = 0; index < 100; index++) {

    // Create Elements
    const mainDiv = document.createElement('div')
    const headline = document.createElement('h2');
    const paragraph = document.createElement('p');

    // append main Div to body
    document.body.appendChild(mainDiv);

    // Create Text Element
    const headlineText = document.createTextNode(`Product Title ${index}`);
    const paragraphText = document.createTextNode(`Product Description ${index}`);

    // Append Text to its Elements
    headline.appendChild(headlineText);
    paragraph.appendChild(paragraphText);

    // Append Elements to main Div
    mainDiv.appendChild(headline);
    mainDiv.appendChild(paragraph);

    // Set class to main Div
    mainDiv.className = 'main';
}
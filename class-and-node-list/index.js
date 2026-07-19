let myButton = document.querySelectorAll(".myButton");

console.log(myButton);

/*
NodeList: static collection, not automatically reflect to changes -- created by .querySelectorAll() -- similar to array .forEach() can be used, but not (.map() |.filter{} | .reduce() )


classList:
1- .add()
2- .remove()
3- .toggle(remove if present, add if not)
4- .replace(old class, new class)
5- .contains()
*/

myButton.forEach(button => {
    button.classList.add('enabled');

    button.addEventListener('click', event => {

        if (button.classList.contains("disabled") && button.textContent.includes("🤨🤨🤨")) {
            button.textContent = button.textContent.slice(0,8);
            button.classList.replace('disabled', 'enabled')
        }
        else if (button.classList.contains("disabled")) {
            button.textContent += '🤨'
        }
        else {
            button.classList.replace('enabled', 'disabled');
        }

    });

    button.addEventListener('mouseover', event => {
        button.classList.toggle('hover');
    })

    button.addEventListener('mouseout', event => {
        button.classList.toggle('hover');
    })

});
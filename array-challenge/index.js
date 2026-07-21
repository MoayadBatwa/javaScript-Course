/*

    --- Array Features ---

    # use length with array:
    - array.length
    - add in last -> array[array.length] = element
    - array.length = # -> remove elements > #

    # Add & Remove from array:
    - .unshift('', ...) -> Add element in First
    - .push('', ...) -> Add element in Last
    - .shift() -> Remove First element 
    - .pop() -> Remove Last element 

    # Searching Array:
    - .indexOf(search element, [start index])
    - .lastIndexOf(search element, [start index])
    - .include(value to find, [start index])

    # Sorting Array:
    - .sort([function])
    - .reverse()

    # Slicing Array:
    - .slice([start], [end]) -> new array
    - .splice([start],[remove count -> 0 for not remove], [item(s) to add ...])

    # Joining Array
    - .concat(array1, array2, [...]) -> new array
    - .join([string between elements])

  Arrays Challenges
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

my1 = my.slice(zero,counter).reverse();
my1.unshift(my[counter]);

console.log(my1);


console.log(my1); // ["Osama", "Elham", "Mazero", "Ahmed"]

console.log(my1.slice(my1.indexOf('Elham'), counter)); // ["Elham", "Mazero"]

console.log(my1[my1.indexOf('Elham')].slice(0,my1.indexOf('Mazero')) + my1[my1.indexOf('Mazero')].slice(my.indexOf('Elham'))); // "Elzero"

console.log(my[counter - my.indexOf('Elham')][counter + my1.indexOf('Elham')] + zero); // "r0"
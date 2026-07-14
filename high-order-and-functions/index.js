array = [1,2,3,4,5,6,7,8,9];

console.log(array);

// ------------------ forEach

console.log("=========forEach=========");

array.forEach(print);

function print(element) {
    console.log(element);
}

// ------------------ map func out

console.log("=========map func out=========");

ar1 = array.map(double);
console.log(ar1);

function double(element) {
    return element * 2;
}


// ------------------ map func in

console.log("=========map func in=========");

ar2 = array.map(function (element) {
    return element * 3;
});
console.log(ar2);


// ------------------ map func arrow

console.log("=========map func arrow=========");

ar3 = array.map((element) => Math.pow(element,2));
console.log(ar3);


// ------------------ filter

console.log("=========filter=========");

filterAr = array.filter((element) => element % 2 == 0);
console.log(filterAr);


// ------------------ reduce

console.log("=========reduce=========");

reduceAr = array.reduce((previous, current) => previous + current);
console.log(reduceAr);



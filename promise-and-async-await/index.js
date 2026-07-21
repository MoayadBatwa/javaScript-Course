
function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const walkDog = true;

            if (walkDog) {
                resolve('You Walk the Dog 🐕');
            } else {
                reject("You DID'T Walk the Dog!");
            }
            
        }, 2500);
    })
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const cleanKitchen = true;

            if (cleanKitchen) {
                resolve('You Clean the Kitchen 🧹');
            } else {
                reject("You DID'T Clean the Kitchen!");
            }

        }, 2000);
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const takeTrash = false;

            if (takeTrash) {
                resolve('You Take Out the Trash ♻️');
            } else {
                reject("You DID'T Take Out the Trash!");
            }

        }, 500);
    })
}

walkDog().then(dog => {
    console.log(dog);
    return cleanKitchen();
}).then(clean => {
    console.log(clean);
    return takeOutTrash();
}).then(trash => {
    console.log(trash);
    console.log("All Chores Are Completed");
}).catch(error => console.error(error));


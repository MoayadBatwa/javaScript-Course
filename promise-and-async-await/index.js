// async/await make function to wait and return a Promise(resolve,reject)


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

            const takeTrash = true;

            if (takeTrash) {
                resolve('You Take Out the Trash ♻️');
            } else {
                reject("You DID'T Take Out the Trash!");
            }

        }, 500);
    })
}

async function doChores() {

    try {

        const walkedDog = await walkDog();
        console.log(walkedDog);

        const cleanedKitchen = await cleanKitchen();
        console.log(cleanedKitchen);

        const tookOutTrash = await takeOutTrash();
        console.log(tookOutTrash);

        console.log("All Chores Are Completed");

    } catch (error) {
        console.error(error)
    }

}

doChores();
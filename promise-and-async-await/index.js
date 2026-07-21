


function walkDog(callback) {
    setTimeout(() => {
        console.log('You Walk the Dog 🐕');
        callback();

    }, 2500);
}

function cleanKitchen(callback) {
    setTimeout(() => {
        console.log('You Clean the Kitchen 🧹');
        callback();

    }, 2000);
}

function takeOutTrash(callback) {
    setTimeout(() => {
        console.log('You Takeout the Trash ♻️');
        callback();

    }, 500);
}

walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => {
            console.log('You Completed All Chores');
        })
    })
});

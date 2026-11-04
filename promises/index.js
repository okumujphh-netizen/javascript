// first promise

const teaPromise = new Promise((resolve, reject) => {
    const teaIsReady = true;

    if (teaIsReady) {
        resolve("Your tea is ready!");
    } else {
        reject("The tea could not be prepared.");
    }
});

console.log(teaPromise);
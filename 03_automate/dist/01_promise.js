// in a similar way to Arrays, the Promise has an internal type
const go = (isWorking) => {
    // we can return a (JavaScript) Promise (which MUST have a call-back)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWorking) {
                resolve('everything worked out fine');
            }
            else {
                reject(new Error('something went wrong')); // NB the reject data type is not being checked agains what we said
            }
        }, 500); // here is the end of the setTimeout
    });
};
// exercise the code
// NB Promises can be async, so we might need to wait.......
go(true) // Promises are 'thenable'
    .then((val) => { console.log(val); })
    .catch((err) => { console.log(err); });

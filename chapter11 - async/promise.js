"use strict"

// let fifteen = Promise.resolve(15);
// fifteen.then(value => console.log(`Got ${value}`));

new Promise((_, reject) => reject(new Error("Fail")))
    .then(value => console.log("Handler 1"))
    .catch(reason => {
        console.log("Caught failure " + reason);
        return nothing;
    })
    .then(value => console.log("Handler 2", value));
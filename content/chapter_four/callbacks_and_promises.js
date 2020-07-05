// Callbacks functions (old)
function doSomething(callback) {
    setTimeout(function () {
        callback("First data");
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function () {
        callback("Second data");
    }, 1000);
}

function doAll() {
    try {
        doSomething(function (data) {
            var processedData = data.split('');
            try {
                doOtherThing(function (data2) {
                    var processedData2 = data2.split('');
                    try {
                        setTimeout(function () {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch {
                        // handle error
                    }
                });
            } catch {
                // handle error 
            }
        });
    } catch (err) {
        // handle error
    }
}

doAll();

// Promises Functions (new)
const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("First data");
        }, 1000);
    });

const doOtherThingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("Second data");
        }, 1000);
    });

Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err => {
    console.log(err)
});

// Pending
// Fullfilled
// Rejected

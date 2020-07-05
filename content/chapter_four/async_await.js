// Async - Await (Awaiting to do something in a organized way);

const asyncTimer = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12345);
        }, 1000);
    });

const simpleFunc = async () => {
    const data = await asyncTimer();
    return data;
};

simpleFunc().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

console.log(asyncTimer());
// class Math {
//     sum(a, b) {
//         return a + b;
//     }
// }

// With Callback/Async

class Math {
    sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b);
        }, 5); //Max timeout == 2000ms
    }
    multiply(a, b) {
        return a * b;
    }
    printSum(request, response, a, b) {
        response.load("index", a + b);
    }
}

module.exports = Math;
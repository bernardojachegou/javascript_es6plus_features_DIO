// =================== USING REST OPERATOR ===================
// Before ES6+
// Creating a function without a limited numbers of arguments;
function sum() {
    let value = 0;

    for (let i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;
}
console.log(sum(2, 1, 5, 5, 5));

// After ES6+
// Using rest operator ...
function sum1(...args) {
    // arr.reduce = Subtract the numbers in the array, starting from the beginning;
    return args.reduce((counter, value) => counter + value, 0)
}
console.log(sum1(2, 1, 5, 5, 5));

// arr.reduce = Subtract the numbers in the array, starting from the beginning;
const multiple = (...args) => args.reduce((counter, value) => counter * value, 1);
console.log(multiple(1, 5, 5, 5));

// Getting the rest of the arguments;
const book = (cap1, cap2, ...rest) => {
    console.log(cap1, cap2, rest);
}
book("The way", "The moment", "The battle", "The Final");

// =================== USING SPREAD OPERATOR ===================
// Using spread operator ... (strings, arrays, literal objects and iterable objects);
const str = "Digital Innovation One";
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}
logArgs(...str); // Spliting the string into an array;
logArgs(...arr); // Separating the arr elements into a isolated element;

// Using concat to construct a combined array;
const arr2 = [5, 6, 7].concat(arr);
console.log(arr2);

// Unsing spread to construct a combined array;
const arr3 = [...arr, ...arr2];
console.log(arr3);






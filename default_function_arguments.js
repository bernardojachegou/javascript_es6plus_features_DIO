// =================== DEFAULT FUNCTION ARGUMENTS ===================
// Oldest type to get a default value;
function multiple(a, b) {
    b = b || 2;
    return a * b;
}
console.log(multiple(5)); //Getting b = 2;
console.log(multiple(5, 0)); //Not getting b = 2; (False statement);

// Old type to get a default value;
function multiple2(a, b) {
    b = typeof b === 'undefined' ? 1 : b;
    return a * b;
}
console.log(multiple2(5, 0)); //Getting b = 0; (True statement);

// Newest and most correct type to get a default value; 
function multipleDefault(a, b = 1) {
    return a * b;
}
console.log(multipleDefault(10));

// Lazy evaluation;
function randomNumber() {
    return Math.random() * 10;
}

function multiple3(a, b = randomNumber()) {
    return a * b;
}
console.log(multiple3(5, 2)); //Not calling randomNumber();
console.log(multiple3(5)); //Calling randomNumber as a default value;
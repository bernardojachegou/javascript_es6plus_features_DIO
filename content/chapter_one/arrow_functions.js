// =================== COMMON FUNCTION ===================
// Common Function;
function oldestSum(a, b) {
    return a + b;
}

// Anonymous Function;
var oldSum = function (a, b) {
    return a + b;
}

// =================== ARROW FUNCTION ===================
// Arrow Function (basic mode);
var sum = (a, b) => {
    return a + b
};

// or (without the word "Return and key brackets");
var sum1 = (a, b) => a + b;

// or (just one param);
var sum2 = a => a + a;
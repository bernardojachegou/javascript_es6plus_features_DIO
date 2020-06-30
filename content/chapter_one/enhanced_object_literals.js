// =================== ENHANCED OBJECT LITERALS ===================
const prop1 = "Digital Innovation One";
const prop2 = "Development School";

const obj = {
    prop1: prop1, // Without short hand;
    prop2, // With short hand;
    method1 // Function as a property;
}
console.log(obj);

function method1() {
    console.log("calling method");
}
obj.method1();

const propName = "Michel";

var objTest = {
    [propName + " Bernardo"]: "Full name"
}
console.log(objTest);
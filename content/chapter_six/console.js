// Console functions

console.log("Black text");
console.warn("Yellow text with alert");
console.error("Red error text");

// console.trace(); // Informations about the source;

console.group("My Group");
console.log("Group info 1");
console.log("Group info 2");
console.groupEnd("My Group");


console.time("log time");
setTimeout(() => {
   console.timeEnd("log time"); 
}, 1500);

console.table(["Michel Bernardo", "Rafael Fernando"]);

console.assert(1 === 2, "Ops");
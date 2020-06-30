// =================== SYMBOLS ===================
const uniqueId = Symbol('Hello');
const obj = {
    [uniqueId]: "Hello again!"
}

// Symbols: Well-known properties;
Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

// Symbol.iterator: method used to scroll something;
const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// Iterator using a loop

while (true) {
    let { value, done } = it.next();
    if (done) {
        break;
    }
    console.log(value);
}

// Using symbol to interact an object;
const obj1 = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}

const it2 = obj1[Symbol.iterator]();
console.log(it2.next());

// =================== GENERATORS ===================

function hello() {
    console.log("Hello");
    console.log("From");
    console.log("Functions");
}

hello();


// Array without destructuring assignments;
const arr = ['Apple', 'Banana', 'Grape', ['Orange']];

const selectedFruit = arr[0];
const selectedFruit1 = arr[1];
const selectedFruit2 = arr[2];
const selectedFruit3 = arr[3][0];

console.log(selectedFruit);
console.log(selectedFruit3);

// Object without destructuring assignments;
const obj = {
    name: 'Michel',
    props: {
        age: 26,
        favoriteColors: ['black', 'yellow', 'white']
    }
}
const name = obj.name;
const age = obj.props.age;
const favoriteColor = obj.props.favoriteColors[0];

console.log(name);
console.log(age);
console.log(favoriteColor);

// =================== DESTRUCTURING ASSIGNMENTS ===================
// Array with destructuring assignments;
const [apple, banana, grape, [orange]] = ['Apple', 'Banana', 'Grape', ['Orange']];

console.log(apple);
console.log(orange);

// Object with destructuring assignments;
const obj1 = {
    name1: 'Robert',
    props1: {
        age1: 27,
        favoriteColors: ['black', 'yellow', 'white']
    }
}

const { name1 } = obj1;
const {
    props1: {
        age1: age1,
        favoriteColors: [favoriteColor1, favoriteColor2]
    }
} = obj1;

console.log(name1); // Without levels;
console.log(age1); // With 1 level;
console.log(favoriteColor1); // With 2 levels;


const arr1 = [1,2,3,4,5,6]
const arr2 = ["a", "b", "c", "d"]

let combine = (obj1, obj2) => {
    return [...obj1, ...obj2]
}

console.log(combine(arr1, arr2));



const car = {
    make1: 'Toyota',
    model1: 'Camry'
}
const plane = {
    make: 'Boeing',
    model: '747'
}

let combine2 = (obj1, obj2) => {
    return {...obj1, ...obj2}
}
 console.log(combine2(car, plane));

 // Challenge 3: Array Rest
// Create a function that accepts a variable number of arguments and uses the rest operator to gather them into an array.

let numbers = (...nums) => {
    return [...nums];
}
console.log(numbers(1,2));

// Challenge 5: Array Destructuring
// Extract individual elements from an array using array destructuring.

const arr = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = arr;
console.log(a, b, c, d, e);

// Challenge 6: Object Destructuring
// Extract specific properties from an object using object destructuring.

const person = {
    name: 'John',
    age: 30,
}

    const { name, age } = person;
    console.log(name, age);

// Challenge 7: Destructuring with Default Values
// Use destructuring to assign default values to variables when extracting from an array or object.

const boat  = {
    type: "yatch",
    size: 150,
    floats: true,
}

const { type = "yatch", size, floats, color = 'white' } = boat;
console.log(type, size, floats, color);

// Challenge 8: Destructuring Function Parameters
// Create a function that accepts an object as a parameter and uses destructuring to extract specific properties.

const bike = {
    type1: "mountain",
    size1: 20,
    color1: "red"
}

const extractor = (obj) => {
    const { type1, size1, color1 } = obj;
    return (`${type1} ${size1} ${color1}`);
}

console.log(extractor(bike));
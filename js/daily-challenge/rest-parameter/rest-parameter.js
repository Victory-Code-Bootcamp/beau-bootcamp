// Create a folder, branch, and JS file called rest-parameter.
// Write a function named multiplyFirstByRest that takes a variable number of arguments.
// The function should multiply the first number by each of the remaining numbers and return an array of the results.

function multiplyFirstByRest(...args) {
    if (args.length < 2) {
      return [];
    }
    const first = args[0];
    const rest = args.slice(1);
    return rest.map(num => first * num);
  }

    console.log(multiplyFirstByRest(2,3,4,5))

//     Write a function named removeSpecifiedValues that takes an array and a list of values, and removes all occurrences of those values from the array.
// The function should return a new array with all occurrences of the specified values removed.

function removeSpecifiedValues(array, ...values) {
    return array.filter(item => !values.includes(item));
}

console.log(removeSpecifiedValues([1, 2, 3, 4, 5], 2, 3))
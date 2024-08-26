// const findIntersection1 = (arr1, arr2) => {
//     const intersection = []
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 intersection.push(arr1[i]);
//              }
//         }
//     }
//     return intersection;
// }

// console.log(findIntersection1([1, 2, 3, 4], [3, 4, 5, 6]))

// The findIntersection1 function uses two nested loops to iterate over each element in array1 and array2. For each element in array1, it checks if the element is present in array2 by iterating over each element in array2. If a match is found, the element is added to the intersection array and the inner loop is broken using the break statement.


function findIntersection2(array1, array2) {
    return array1.filter(element => array2.includes(element));
}

console.log(findIntersection2([1, 2, 3, 4], [3, 4, 5, 6]))

// The findIntersection2 function uses the filter method to create a new array that contains only the elements that are present in both array1 and array2. The includes method is used to check if an element is present in array2.

module.export = findIntersection2
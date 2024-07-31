

// for (i <= n, i++) {
//     if (i % 3 === 0 && i % 5 === 0) {console.log("FizzBuzz");}
//     else if
//          (i % 3 === 0) {console.log("Fizz");}
//     else if
//          (i % 5 === 0) {console.log("Buzz");}
//     else { // handles numbers not divisible by 3 or 5
//           console.log(i);
// }

// let nums = [1,2,3,4,5,6,7,8,9,10]
 
// let addEven = () => {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 === 0) {
//             sum += nums[i];
//             }
//         }
//         return sum;
//     }

//     console.log(addEven())


const words = [ "the", "at", "he", "she", "are", "two"]
const wordLengths = words.map(word => word.toUpperCase());
console.log(wordLengths);

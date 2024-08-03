// You have an array that tracks whether books are checked in (true) or checked out (false): [true, false, true, false, true].
// Write a function that returns how many books are still checked in.

const books = [true, false, true, false, true, false, true, false, true, false];
//reduce uses a callback function, first paramater, and a initial value. If the initial value is true add 1 if false add 0
let checkedInBooks = books.reduce((count, bool) => bool ? count + 1 : count, 0)

console.log(`There are ${checkedInBooks} books checked in`)
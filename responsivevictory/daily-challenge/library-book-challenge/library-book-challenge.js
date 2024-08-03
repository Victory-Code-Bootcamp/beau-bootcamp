// You have an array that tracks whether books are checked in (true) or checked out (false): [true, false, true, false, true].
// Write a function that returns how many books are still checked in.

const books = [true, false, true, false, true, false, true, false, true, false];

let checkedInBooks = books.reduce((count, bool) => bool ? count + 1 : count, 0)
console.log(`There are ${checkedInBooks} books checked in`)
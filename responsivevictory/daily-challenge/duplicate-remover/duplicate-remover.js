const removeDuplicates = (arr) => {
    return [...new Set(arr)];
}
 
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 'a', 'b', 'a']))
console.log(removeDuplicates([1, 1, 1, 1, 1, 1, 1]))

// This function takes an array as an input, converts it into a set (which automatically removes duplicates), and then converts it back into an array. The spread operator (`...`) is used to convert the set back into an array. The function returns the array with duplicates removed.



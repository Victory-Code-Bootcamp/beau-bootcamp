const flattenArray = (arr) => {
    return arr.flat(3)
}

console.log(flattenArray([[1, [2, [3, 4], 5], 6, [7]]]))

const findIntersection2 = require('./find-intersectionality')

test('compares two arrays and returns an array of similar indexs', () => {
    const array1 = [1, 2, 3, 4]
    const array2 = [3, 4, 5, 6]
    expect(findIntersection2(array1, array2)).toBe([3, 4])
})
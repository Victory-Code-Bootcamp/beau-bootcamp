const {findIntersection2} = require('./find-intersectionality')

test('compares two arrays and returns an array of similar values', () => {
    const array1 = [1, 2, 3, 4]
    const array2 = [3, 4, 5, 6]
    const expected = [3, 4]
    expect(findIntersection2(array1, array2)).toEqual(expected)
})
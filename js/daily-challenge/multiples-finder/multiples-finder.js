// Write a function named findMultiples that takes two parameters: integer and limit.
// The function should return an array of multiples of integer that are less than or equal to limit.
// If limit is a multiple of integer, it should be included in the result.

function findMultiples1(integer, limit) {
    return Array.from({ length: Math.floor(limit / integer) + 1 }, (_, i) => (i + 1) * integer).filter(num => num <= limit);
  }

  console.log(findMultiples1(2,6))
  console.log(findMultiples1(3,10))

//   Array.from() is used to create an array of multiples of integer.
//   The first argument to Array.from() is an object with a length property set to the number of multiples we want to generate, which is calculated as Math.floor(limit / integer) + 1. This ensures that we generate enough multiples to cover the range up to limit.
//   The second argument to Array.from() is a callback function that generates each multiple. The callback takes two arguments, _ (which we ignore) and i, which is the index of the current multiple. We use i to calculate the current multiple as (i + 1) * integer.
//   The resulting array of multiples is then filtered using the filter() method to remove any multiples that are greater than limit.
//   The final filtered array is returned by the findMultiples() function.


  function findMultiples2(integer, limit) {
    const multiples = [];
    for (let i = integer; i <= limit; i += integer) {
      multiples.push(i);
    }
    return multiples;
  }

  console.log(findMultiples2(2,6))
  console.log(findMultiples2(3,10))

  
//   We create an empty array multiples that will store the multiples of integer.
//   We use a for loop to iterate from integer to limit, incrementing by integer each time. This ensures that we generate all the multiples of integer in the range.
//   Inside the loop, we push each multiple to the multiples array using push().
//   Finally, we return the completed multiples array.

function findMultiples3(integer, limit) {
    const multiples = []
    for (let i = integer; i <= limit; i++) {
      if (i % integer === 0) {
        multiples.push(i);
      }
    }
    return multiples;
  }

  console.log(findMultiples3(2,6))
  console.log(findMultiples3(3,10))

  
//   We create an empty array multiples that will store the multiples of integer.
//   We use a for loop to iterate from integer to limit.
//   Inside the loop, we use the modulus operator (%) to check if the current number i is a multiple of integer. If i % integer === 0, then i is a multiple of integer.
//   If i is a multiple, we push it to the multiples array using push().
//   Finally, we return the completed multiples array.

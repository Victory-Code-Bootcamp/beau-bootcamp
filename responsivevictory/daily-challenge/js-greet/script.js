
let hour = () => new Date().getHours()
let greet = hour < 12 && hour === 7 ? 'Time for work' : hour < 12 ? "Good Morning" : hour > 12 && hour === 18? 'Dinner time!' : 'Good Afternoon'

console.log(greet)

// Write an arrow function calculateDiscount that takes the order amount and applies a 10% discount if the order is over $100, otherwise 5%, using a ternary operator

let calculateDiscount = (num) => {
    let discount = num - num *.1
    return num > 100 ? discount : num - num * .05
    }

    console.log(calculateDiscount(100))

// Write an arrow function toggle that takes a boolean value and returns its opposite using a ternary operator.
 let toggle = (bool) => bool ? false : true
 console.log(toggle(false))
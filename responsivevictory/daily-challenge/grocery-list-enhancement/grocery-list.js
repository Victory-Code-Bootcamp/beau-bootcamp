let numOfMilk = 3;
let numOfEggs = 2;
let numOfBread = 4;

const priceOfMilk = 3;
const priceOfEggs = 4;
const priceOfBread = 2;

let total = (item, price) => {
return item * price;
}
console.log(`Your total price for bread is \$${total(numOfBread, priceOfBread)}`);
console.log(`Your total price for eggs is \$${total(numOfEggs, priceOfEggs)}`);
console.log(`Your total price milk is \$${total(numOfMilk, priceOfMilk)}`);
console.log(`Your grand total is \$${total(numOfBread, priceOfBread)+total(numOfEggs, priceOfEggs)+total(numOfMilk, priceOfMilk)}`)
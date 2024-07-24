// global vs local
const num = 2;

function scope(){
    const num = 3;
    return num;
}

console.log(scope());
console.log(num)
// global vs local

// odd or even
function oddOrEven(num){
    if(num % 2 === 0){
        return "even"
        } else {
            return "odd"
        }
    }

    console.log(oddOrEven(4))
// odd or even

// calculate total
function calculateTotal(price, tax){
    return price + (price * tax);
    }

console.log(`Your total is $${calculateTotal(20, 0.08).toFixed(2)}`);

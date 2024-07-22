// Challenge 1
let largeNum = (num1, num2) => {
    if (num1 > num2) {
} else {
    return num2;
}
return num1;
}
// Challenge 2
let mod = (num1, num2) => {
    if (num1 % num2 === 0) {
        } else {
            return false;
            }
            return true;
}

// Challenge 3
const birthday = new Date('August 19, 1975 23:15:30');
switch (birthday.getDay()){
    case 1:
        console.log('Monday');
        break;
        case 2:
            console.log('Tuesday');
            break;
            case 3:
                console.log('Wednesday');
                break;
                case 4:
                    console.log('Thursday');
                    break;
                    case 5:
                        console.log('Friday');
                        break;
                        case 6:
                            console.log('Saturday');
                            break;
                            case 7:
                                console.log('Sunday');
                                break;
                                }
                                
// Challenge 4
// with help from blackbow.ai
function calculateSum(a, b) {
    
    // Use default value of 0 if either a or b is undefined or null
    a = a || 0;
    b = b || 0;
    
    // Check if either a or b is not a number
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Please provide valid numbers";
    }
    // Round a and b to the nearest integer if they are floating-point numbers
    a = Math.round(a);
    b = Math.round(b);
    
    // Calculate the sum
    let total = a + b;
    
    // Check if the sum is too large
    if (total > 100) {
        return "Sum is too large";
    }
    
    // Return the sum
    return total;
}




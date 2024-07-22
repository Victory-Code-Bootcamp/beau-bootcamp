// Challenge 1
// let fname = prompt('enter your name');

// alert(`Hello ${fname ? fname : 'World'}`);

// let fname;
// switch (fname = prompt('enter your name')){
//     case 0: 
//     fname = '';
//     break;
//     case 1:
//     fname = null;
//     break;
//     case 2:
//     fname = fname;
// }

// alert(`Hello ${fname ? fname : 'World'}!`)

// let fname  = prompt('enter your name');
// switch (fname){
//     case 0: 
//     fname = '';
//     break;
//     case 1:
//     fname = null;
//     break;
//     case 2:
//     fname = fname;
// }

// alert(`Hello ${fname ? fname : 'World'}!`)

// challenge 2

// let yourAge = prompt('enter your age')

// let hello = yourAge = yourAge <= 18 ?  true : false;

// alert(`Look at the console, it should say ${hello}`)

// console.log(hello)

// challenge 3

// let message = prompt('add a message')

// function getCode(s) {
//     if (s.length > 15) {
//         return "AA";
//     } else if (s.length >= 13 && s.length <= 15) {
//         return "AB";
//     } else if (s.length >= 10 && s.length <= 13) {
//         return "BB";
//     } else if (s.length >= 7 && s.length <= 10) {
//         return "BC";
//     } else if (s.length >= 5 && s.length <= 7) {
//         return "CC";
//     } else {
//         return "DD";
//     }
// }

// alert(`Look at the console, it should say ${getCode(`${message}`)}`)

// console.log(getCode(`${message}`))

// Challenge 4

let add = (num1, num2) => {
    return num1 + num2
}

let subtract = (num1, num2) => {
    return num1 - num2
}

let multiply = (num1, num2) => {
    return num1 * num2
}

let divide = (num1, num2) => {
    return num1 / num2
}
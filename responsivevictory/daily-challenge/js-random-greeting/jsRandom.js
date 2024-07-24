// function randomGreeting(name) {
//     const greeting1 = `Hello, ${name}!`;
//     const greeting2 = `Hi ${name}!`;
//     const greeting3 = `Hey ${name}!`;
//     const greeting4 = `Good day, ${name}!`;
  
//     const randomNum = Math.floor(Math.random() * 4) + 1;
  
//     switch (randomNum) {
//       case 1:
//         return greeting1;
//       case 2:
//         return greeting2;
//       case 3:
//         return greeting3;
//       case 4:
//         return greeting4;
//       default:
//         throw new Error("Invalid random number");
//     }
//   }
  
//   console.log(randomGreeting("Joe"));


// function minutesToSeconds(){
//     let minutes = prompt("Enter the number of minutes:")
//     let seconds = minutes * 60
//     return seconds  
//     }

//   console.log(minutesToSeconds())


function basicCalculator(){
    let num1 = parseInt(prompt("Enter the first number:"))
    let num2 = parseInt(prompt("Enter the second number:"))
    let operator = prompt("Enter the operator:")
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter a number.");
        return null;
      }

        switch(operator){
        case "+":
        result = num1 + num2
        break
        case "-":
        result = num1 - num2
        break
        case "*":
        result = num1 * num2
        break
        case "/":
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return null;
              }
        result = num1 / num2
        break
        default:
        alert("Invalid operator");
        return null;
            }
        return result;

    }

    console.log(basicCalculator())


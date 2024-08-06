// Challenge 1
// Create a new object called Donis Kia
// Donis Kia should store key value pairs of things the car could have
// One of the keys stored should be a playlist that contains a list of Donis favorite songs
const donisCar = {
    brand: "Kia",
    year: 2020,
    occupancy: 4,
    playlist: ["Song 1", "Song 2", "Song 3"],
    color: "Blue",
  };

// Challenge 2
// Create an object called "car" with properties "make", "model", "year", and "color". Use dot notation to access the value of the "year" property and console.log it.

const car = {
    make: "Toyota",
    model: "Camry",
    year: 2015,
    color: "Red",
}
console.log(car.year)

// Challenge 3
// Create a class called "Rectangle" with properties "length" and "width". Add a method to the class called "area" that calculates and returns the area of the rectangle (length x width). Create a new instance of the class and console.log its area.
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    area() {
        return this.length * this.width;
        }
    }
        
    const area1 = new Rectangle(4, 4);
    console.log(area1.area());


// Challenge 4
// Create a class called Employee with a constructor that takes in name and salary parameters. Add a getSalary() method that returns the employee's salary. Create a subclass called Manager that extends Employee and has an additional bonus property. Override the getSalary() method in Manager to return the employee's salary plus the bonus. Create an instance of Manager with name "John" and salary 5000, and bonus 1000, and call the getSalary() method.

class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, bonus) {
        super(name, salary);
        this.bonus = bonus;
    }
    getSalary() {
      return super.getSalary() + this.bonus;
    }
  }
  
  let manager = new Manager('John', 5000, 1000);
    console.log(manager.getSalary());
class Cars {
    constructor(make, model, color, year) {
      this.make = make;
      this.model = model;
      this.color = color;
      this.year = year;
    }
  }

  const car1 = new Cars('Toyota', 'Corrola', 'Blue', 1999);
  const car2 = new Cars('Ford', 'Escort', 'Blue', 1989);
  const car3 = new Cars('Chevy', 'Silverado', 'Red', 2019);
  const car4 = new Cars('Dodge', 'Hellcat', 'Black', 2022);
  
console.log(car1.make, car2.model, car3.year, car4.color)

document.getElementById("cars").innerHTML =
car1.make + " " + car2.make + " " + car3.make + " " + car4.make;
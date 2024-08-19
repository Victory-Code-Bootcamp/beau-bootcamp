const car = {
    make: "Tesla",
    model: "Model S",
    year: 2021,
    color: "Red",
};

const logObjectProperties = () => {
    for (const property in car) {
        console.log(`${property}: ${car[property]}`)}           
}

console.log(logObjectProperties(car))
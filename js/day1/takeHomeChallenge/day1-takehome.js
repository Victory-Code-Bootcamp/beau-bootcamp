const inquirer = require('inquirer');
const faker = require('@faker-js/faker');

// Function to generate random user data
function generateUserData(numUsers) {
  const users = [];

  for (let i = 0; i < numUsers; i++) {
    const user = {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
      address: `${faker.address.streetAddress()} ${faker.address.city()} ${faker.address.state()} ${faker.address.zipCode()}`,
      phoneNumber: faker.phone.phoneNumber(),
    };

    users.push(user);
  }

  return users;
}

// Command-line interface to prompt user for number of users to generate
inquirer.prompt([
  {
    type: 'number',
    name: 'numUsers',
    message: 'How many users would you like to generate?',
    default: 1,
  },
]).then((userInput) => {
  const numUsers = userInput.numUsers;
  const users = generateUserData(numUsers);
  console.log(users);
});


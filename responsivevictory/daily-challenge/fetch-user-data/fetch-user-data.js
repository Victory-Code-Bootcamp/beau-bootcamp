// Task 1: Create a function named fetchUserData using fetch and async/await to fetch data from https://jsonplaceholder.typicode.com/users and pass the data to a callback function.
// Parameters of fetchUserData: callback (a function to process the fetched data)
// Task 2: Create a function named extractAndLogUserData that takes user data as an argument, extracts the first three user names and emails, and logs them.
// Parameters of extractAndLogUserData: users (an array of user objects)
// Task 3: Pass extractAndLogUserData as an argument to fetchUserData and see the results

let fetchUserData = async (callback) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    callback(data);
}

let extractAndLogUserData = (users) => {
console.log(users[0].name, users[0].email)
console.log(users[1].name, users[1].email)
console.log(users[2].name, users[2].email)
}

fetchUserData(extractAndLogUserData)
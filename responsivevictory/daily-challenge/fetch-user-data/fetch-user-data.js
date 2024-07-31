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
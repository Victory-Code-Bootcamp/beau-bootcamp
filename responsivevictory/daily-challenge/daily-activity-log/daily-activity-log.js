// This was accomplished with the help of blackbox.ai


// Declare variables for daily activities and their durations in hours
let workHours = parseInt(prompt('Hours worked?'));
let exerciseHours = parseInt(prompt("Hours exercised?"));
let codingHours = parseInt(prompt("Hours coding?"));

console.log("Work hours:", workHours);
console.log("Exercise hours:", exerciseHours);
console.log("Coding hours:", codingHours);

// Calculate total hours spent on all activities
let totalHours = workHours + exerciseHours + codingHours;

console.log("Total hours spent on all activities:", totalHours);

// Create an object with activities as keys and their durations as values
let activities = {
  work: workHours,
  exercise: exerciseHours,
  coding: codingHours
};

// Use Object.keys() and reduce() to find the activity with the longest duration
let longestActivity = Object.keys(activities).reduce((a, b) => activities[a] > activities[b] ? a : b);

console.log(`The longest activity is ${longestActivity} with ${activities[longestActivity]} hours.`);
// Task 1: Write a function named calculateEndTime that calculates the end time of a movie given the start time and the movie duration in hours.
// Parameters of calculateEndTime: startTime (24-hour format as a string), duration (in hours)
// Task 2: Determine when a movie that starts at "19:00" and lasts for 2.5 hours will end, and log the result. Expected output The movie will end at 21:30
    function calculateEndTime(startTime, duration) {
        // Convert the start time from a string to a Date object
            let startDateTime = new Date();
            startDateTime.setHours(startTime.split(":")[0]);
            startDateTime.setMinutes(startTime.split(":")[1]);
            // Calculate the end time by adding the duration to the start time
            let endDateTime = new Date(startDateTime.getTime() + duration * 60 * 60 *
            1000);
            // Format the end time as a string in the format "HH:mm"
            let endHours = endDateTime.getHours().toString();
            let endMinutes = endDateTime.getMinutes().toString();
            // Return the end time as a string
            return `${endHours}:${endMinutes}`
            }
            
            console.log(calculateEndTime("19:00", 2.5));
          


            //or an alternative
            function calculateEndTime(startTime, duration) {

                //destructuring hours and minutes spliting the array into two parts and mapping over the string of numbers and using Number to make them numbers and not a string
                const [hours, minutes] = startTime.split(":").map(Number);

                // endTime stores the new Date which is a new Date hours and minutes and converts it to milliseconds and adds them to the hours and minutes
                const endTime = new Date(new Date().setHours(hours, minutes) + duration * 60 * 60 * 1000);

                //return a template literal and use .padStart to make in case there are less than 2 numbers that there will be two numbers
                return `${endTime.getHours()}:${endTime.getMinutes().toString().padStart(2, "0")}`;
              }
              
              console.log(calculateEndTime("17:00", 2.5));
// Getting errors in JS

class customError extends Error {
    constructor({ message, data }) {
        super(message);
        this.data = data;
    }
}

try {
    const name = "Michel Bernardo";
    const myError = new customError({
        message: "Something bad, Michel!", // Creating my custom message
        data: {
            type: "Server error" // Setting a type
        }
    });

    throw myError; // Calling if error 
} catch (err) { 
    // Using conditional to do something
   if (err.data.type === "Server error") { 
       console.log("We have something for you!");
   } else {

   }
} finally {
    console.log("Keep going...");
}





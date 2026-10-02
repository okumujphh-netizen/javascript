function greet(name) {
    console.log(`Hello ${name}`);
}

function processUser(callback) {

    console.log("Processing user...");

    // Call the function that was passed in
    callback("John");
}

// Pass greet into processUser
processUser(greet);

// callback with anonymous function
function processPatient(callback) {

    console.log("Processing patient...");



    callback();
}

processPatient(function() {

    console.log("Patient has been registered.");

});

// callback with arrow function
function processPatient(callback) {

    console.log("Processing patient...");

    callback();
}

processPatient(() => {

    console.log("Patient has been registered.");

});

//forEach()
const patients = [
    "Alice",
    "John",
    "Mary"
];

patients.forEach((patient) => {

    console.log(`Patient: ${patient}`);

});

//callback + condition
const visitors = [
    {
        name: "John",
        age: 23
    },
    {
        name: "Alice",
        age: 10
    }
];

visitors.forEach((visitor) => {

    if (visitor.age >= 18) {

        console.log(`${visitor.name} can enter the adult ride.`);

    } else {

        console.log(`${visitor.name} cannot enter the adult ride.`);

    }

});

// theme park example
function buyTicket(visitorName, callback) {

    console.log(`Ticket purchased for ${visitorName}.`);

    // Call the callback function
    callback(visitorName);
}

buyTicket("John", (name) => {

    console.log(`Welcome to Ridgeways Theme Park, ${name}!`);

});
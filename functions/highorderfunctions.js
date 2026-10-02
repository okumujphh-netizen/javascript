//HIGH ORDER FUNCTION
//Takes another function as an argument
function processCustomer(name, callback) {

    console.log(`Processing ${name}`);

    callback();
}

processCustomer("John", () => {
    console.log("Customer processed successfully.");// high order function
});

// A function that returns another function
function createGreeting() {

    return function(name) {//high order function

        return `Welcome ${name}!`;

    };

}

const greeting = createGreeting();

console.log(greeting("John"));


// example
// . Higher-order function that takes a function as an argument
function processShip(shipName, callback) {

    console.log(`Processing ${shipName}...`);

    // Calling the function that was passed in
    callback(shipName);
}

processShip("MV Ocean Star", (name) => {

    console.log(`${name} is ready for departure.`);

});
// Higher-order function that returns another function
function createShipStatus(status) {

    return function(shipName) {

        return `${shipName} status: ${status}`;

    };

}

const activeShip = createShipStatus("Active");

console.log(activeShip("MV Ocean Star"));
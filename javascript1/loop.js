//for loop
const products = [
    // Each item in this array is an object
    {
        name: "Milk",
        price: 200
    },
    {
        name: "Bread",
        price: 100
    },
    {
        name: "Rice",
        price: 2500
    },
    {
        name: "Sugar",
        price: 180
    }
];

// A for loop is useful when we want to go through
// every item in an array.

// let i = 0 → Start counting from index 0
// i < products.length → Continue while i is less than the number of products
// i++ → Increase i by 1 after every loop

for (let i = 0; i < products.length; i++) {

    // products[i] gets the current product
    // .name gets the name of that product
    console.log(`Product: ${products[i].name}`);

    // .price gets the price of the current product
    console.log(`Price: KSh ${products[i].price}`);

    // This creates a line between products
    console.log("--------------------");
}
//while loop
let patientsWaiting = 5;

// The while loop continues while
// there is at least one patient waiting.
while (patientsWaiting > 0) {

    // Display the number of patients currently waiting.
    console.log(`Patients waiting: ${patientsWaiting}`);

    // Serve one patient.
    console.log("Serving one patient...");

    // Reduce the number of waiting patients by 1.
    patientsWaiting--;

    console.log("--------------------");
}

// This runs after the while loop finishes.
console.log("There are no more patients waiting.");
// anonymous function

const greet = function() {
    console.log("Hello");
};

greet();

const calculateTotal = function() {
    console.log("Calculating...");
};

//anonymous function as callback


const products = ["Milk", "Bread", "Rice"];

products.forEach(function(product) {
    console.log(product);
});

// hospital function
const patients = [
    {
        name: "Alice",
        age: 35
    },
    {
        name: "John",
        age: 67
    },
    {
        name: "Mary",
        age: 72
    },
    {
        name: "Peter",
        age: 25
    }
];

patients.forEach(function(patient) {

    // Check whether the patient is 60 or older
    if (patient.age >= 60) {

        console.log(`${patient.name} is a senior patient.`);

    } else {

        console.log(`${patient.name} is a standard patient.`);

    }

});
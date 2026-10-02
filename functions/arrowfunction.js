// arrow function
const greetPatient = () => {
    console.log("Welcome to the hospital");
};

greetPatient();

// with a parameter
const meetPatient = (name) => {
    console.log(`Welcome ${name}`);
};

greetPatient("John");

// with two parameters
const calculateBill = (consultation, medicine) => {
    return consultation + medicine;
};

const bill = calculateBill(1000, 2000);

console.log(bill);

// with array + conditions + objects
const visitors = [
    {
        name: "John",
        age: 23
    },
    {
        name: "Alice",
        age: 10
    },
    {
        name: "Peter",
        age: 17
    }
];

// forEach goes through every visitor in the array.
// visitor represents the current object.
// The arrow function runs once for each visitor.

visitors.forEach((visitor) => {

    // Check the visitor's age.
    if (visitor.age >= 18) {

        console.log(`${visitor.name} can enter the adult ride.`);

    } else {

        console.log(`${visitor.name} cannot enter the adult ride.`);

    }

});
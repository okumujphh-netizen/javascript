// strings
const customerName = "John";
// combining strings
const firstName = "John";
const lastName = "Okumu";

const fullName = firstName + " " + lastName;//we combine strings using +

console.log(fullName);
//string concatenation
const customer = "John";
const product = "Bread";
const message = "Customer " + customer + " bought " + product;

console.log(message);//simply means joining two strings together

//temperal literals
// using backticks
const name = "John";
const good = "Bread";

console.log(`Customer ${name} bought ${good}`)

//string length
const custoName = "John Okumu";

console.log(customerName.length);

//changing uppercase and lowercase
const products = "milk";

console.log(product.toUpperCase());

//find text inside string
const productss = "milk";

console.log(product.toUpperCase());



// comparison operators
// (===) equal to
const patientGender = "Female";

if (patientGender === "Female") {
    console.log("Patient is female");
}

// (!==) not equal to
const bloodType = "A+";

if (bloodType !== "O+") {
    console.log("Patient does not have O+ blood type");
}

// (>)
const patientAge = 70;

if (patientAge > 65) {
    console.log("Patient qualifies for senior care");
}
// (<)
const patientAges = 12;

if (patientAges < 18) {
    console.log("Patient is a minor");
}
//(>=)
const patientAg = 65;

if (patientAg >= 60) {
    console.log("Senior patient");
}

// (<=)
const patientAgess = 65;

if (patientAgess >= 60) {
    console.log("Senior patient");
}
const patientName = "Alice";
const patientAgesss = 67;

if (patientAge >= 60) {
    console.log(patientName + " qualifies for the senior program.");
} else {
    console.log(patientName + " does not qualify.");
}

// arrays
const patients = [
    "Alice",
    "John",
    "Peter",
    "Mary"
];
console.log(patients.length);

// objects
const productsss = {
    name: "Milk",
    category: "Dairy",
    price: 200,
    quantity: 2
};
console.log(productsss.name);

// array of objects
const produc = [
    {
        name: "Milk",
        price: 200
    },
    {
        name: "Bread",
        price: 100
    },
    {
        name: "Sugar",
        price: 150
    }
];
console.log(produc[0].price);

// if statement
const total = 6000;

if (total >= 5000) {
    console.log("Customer gets a discount");
}
// if else statement
const totals = 3000;

if (totals >= 5000) {
    console.log("10% discount");
} else {
    console.log("No discount");
}
// else if statement
const age = 70;

if (age >= 65) {
    console.log("Senior patient");
} else if (age >= 18) {
    console.log("Adult patient");
} else {
    console.log("Child patient");
}
// && AND  operator
const totalss = 6000;
const isMember = true;

if (totalss >= 5000 && isMember === true) {
    console.log("Customer gets 15% discount");
}
// || OR operator
const agess = 70;
const hasInsurance = false;

if (agess >= 65 || hasInsurance === true) {
    console.log("Patient qualifies for the program");
}


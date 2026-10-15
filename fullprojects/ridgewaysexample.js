// Strings
// Variables
// Arrays
// Objects
// Functions
// Statements
// Comparison operators
// Logical operators
// Arithmetic
// Discount calculation
// Template literals

// We'll make it feel like a small real supermarket billing system.

// Ridgeways Supermarket
// Scenario

// A customer buys several products.

// Rules:

// Members get 5% off.
// Customers spending KSh 5,000 or more get 10% off.
// If they are members AND spend KSh 5,000 or more, they get 15% off.
// If the customer is under 18 OR doesn't have a membership, they don't qualify for the special 15% discount.
// We'll also check whether a requested product exists.








// fully functional code
const supermarket = "Ridgeways Supermarket";

const customer = {
    name: "John Okumu",
    age: 23,
    isMember: true
};

const products = [
    {
        name: "Milk",
        category: "Dairy",
        price: 200,
        quantity: 2
    },
    {
        name: "Bread",
        category: "Bakery",
        price: 100,
        quantity: 2
    },
    {
        name: "Rice",
        category: "Grains",
        price: 2500,
        quantity: 1
    },
    {
        name: "Cooking Oil",
        category: "Cooking",
        price: 1000,
        quantity: 1
    }
];


// Function to calculate the total price
function calculateTotal(products) {
    let total = 0;

    for (let i = 0; i < products.length; i++) {
        total += products[i].price * products[i].quantity;
    }

    return total;
}


// Function to calculate the discount
function calculateDiscount(total, customer) {
    let discountRate = 0;

    if (customer.isMember === true && total >= 5000) {
        discountRate = 0.15;
    } else if (customer.isMember === true) {
        discountRate = 0.05;
    } else if (total >= 5000) {
        discountRate = 0.10;
    }

    const discountAmount = total * discountRate;

    return discountAmount;
}


// Calculate total
const total = calculateTotal(products);


// Calculate discount
const discount = calculateDiscount(total, customer);


// Calculate final price
const finalPrice = total - discount;


// Display supermarket information
console.log(`Welcome to ${supermarket}`);

console.log(`Customer: ${customer.name}`);
console.log(`Age: ${customer.age}`);


// Check customer's age
if (customer.age >= 18) {
    console.log("Customer is an adult.");
} else {
    console.log("Customer is a minor.");
}


// Display products
console.log("----- PRODUCTS -----");

for (let i = 0; i < products.length; i++) {
    console.log(
        `${products[i].name} - KSh ${products[i].price} x ${products[i].quantity}`
    );
}


// Check if the customer is a member
if (customer.isMember === true) {
    console.log("Membership: Active");
} else {
    console.log("Membership: Not Active");
}


// Check whether the customer qualifies for the special discount
if (customer.isMember === true && total >= 5000) {
    console.log("Customer qualifies for the 15% member discount.");
} else if (customer.isMember === true || total >= 5000) {
    console.log("Customer qualifies for a standard discount.");
} else {
    console.log("Customer does not qualify for a discount.");
}


// Display bill
console.log("----- BILL -----");

console.log(`Subtotal: KSh ${total}`);
console.log(`Discount: KSh ${discount}`);
console.log(`Final Price: KSh ${finalPrice}`);

console.log("Thank you for shopping at Ridgeways Supermarket!");
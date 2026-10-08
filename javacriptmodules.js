
// cars.js

const cars = [
    {
        id: 1,
        brand: "Toyota",
        model: "Land Cruiser",
        year: 2026,
        price: 12500000,
        fuel: "Diesel",
        available: true
    },

    {
        id: 2,
        brand: "Mercedes-Benz",
        model: "C-Class",
        year: 2026,
        price: 8500000,
        fuel: "Petrol",
        available: true
    },

    {
        id: 3,
        brand: "BMW",
        model: "X5",
        year: 2026,
        price: 11000000,
        fuel: "Petrol",
        available: false
    },

    {
        id: 4,
        brand: "Tesla",
        model: "Model Y",
        year: 2026,
        price: 9000000,
        fuel: "Electric",
        available: true
    },

    {
        id: 5,
        brand: "Ford",
        model: "Ranger",
        year: 2026,
        price: 6500000,
        fuel: "Diesel",
        available: true
    }
];


// Return all cars
export function getCars() {
    return cars;
}


// Find a car by ID
export function getCarById(id) {
    return cars.find(car => car.id === id);
}


// Find cars by brand
export function getCarsByBrand(brand) {
    return cars.filter(car => car.brand === brand);
}


// Find available cars
export function getAvailableCars() {
    return cars.filter(car => car.available);
}


// Calculate the average price
export function getAveragePrice() {
    const total = cars.reduce((sum, car) => sum + car.price, 0);

    return total / cars.length;
}


// Default export
export default cars;

// customers.js

const customers = [
    {
        id: 1,
        name: "John Okumu",
        city: "Nairobi",
        budget: 15000000
    },

    {
        id: 2,
        name: "Brian Mwangi",
        city: "Mombasa",
        budget: 9000000
    },

    {
        id: 3,
        name: "Sarah Wanjiku",
        city: "Kisumu",
        budget: 7000000
    },

    {
        id: 4,
        name: "Daniel Otieno",
        city: "Nakuru",
        budget: 12000000
    }
];


export function getCustomers() {
    return customers;
}


export function getCustomerById(id) {
    return customers.find(customer => customer.id === id);
}


export function customersWithBudget(minimumBudget) {
    return customers.filter(
        customer => customer.budget >= minimumBudget
    );
}


export function addCustomer(name, city, budget) {

    const newCustomer = {
        id: customers.length + 1,
        name,
        city,
        budget
    };

    customers.push(newCustomer);

    return newCustomer;
}
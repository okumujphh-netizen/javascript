// ==========================================
// WATERPARK MANAGEMENT SYSTEM
// ==========================================


// ==========================================
// 1. ARRAY OF WATERPARK RIDES
// ==========================================

const rides = [
    {
        name: "Tsunami Slide",
        type: "Water Slide",
        heightRequirement: 140,
        price: 800,
        capacity: 2
    },
    {
        name: "Lazy River",
        type: "Relaxation",
        heightRequirement: 100,
        price: 500,
        capacity: 4
    },
    {
        name: "Wave Pool",
        type: "Pool",
        heightRequirement: 120,
        price: 600,
        capacity: 50
    },
    {
        name: "Kids Splash Zone",
        type: "Kids",
        heightRequirement: 90,
        price: 300,
        capacity: 30
    },
    {
        name: "Aqua Racer",
        type: "Water Slide",
        heightRequirement: 130,
        price: 700,
        capacity: 2
    }
];


// ==========================================
// 2. ARRAY LOOPING - FOR LOOP
// ==========================================

console.log("===== FOR LOOP =====");

for (let i = 0; i < rides.length; i++) {
    console.log(rides[i].name);
}


// ==========================================
// 3. ARRAY LOOPING - WHILE LOOP
// ==========================================

console.log("===== WHILE LOOP =====");

let i = 0;

while (i < rides.length) {
    console.log(rides[i].name);
    i++;
}


// ==========================================
// 4. ARRAY LOOPING - FOREACH
// ==========================================

console.log("===== FOREACH =====");

rides.forEach(ride => {
    console.log(`${ride.name} - KSh ${ride.price}`);
});


// ==========================================
// 5. MAP()
// Get only the names of the rides
// ==========================================

console.log("===== MAP =====");

const rideNames = rides.map(ride => {
    return ride.name;
});

console.log(rideNames);


// ==========================================
// 6. MAP()
// Increase every ride price by KSh 100
// WITHOUT changing the original array
// ==========================================

const updatedPrices = rides.map(ride => {
    return {
        ...ride,
        price: ride.price + 100
    };
});

console.log(updatedPrices);


// ==========================================
// 7. FILTER()
// Find rides costing less than KSh 700
// ==========================================

console.log("===== FILTER =====");

const affordableRides = rides.filter(ride => {
    return ride.price < 700;
});

console.log(affordableRides);


// ==========================================
// 8. FILTER()
// Find rides suitable for children
// ==========================================

const kidsRides = rides.filter(ride => {
    return ride.heightRequirement <= 100;
});

console.log(kidsRides);


// ==========================================
// 9. REDUCE()
// Calculate the total price of all rides
// ==========================================

console.log("===== REDUCE =====");

const totalRideValue = rides.reduce((total, ride) => {
    return total + ride.price;
}, 0);

console.log(`Total ride value: KSh ${totalRideValue}`);


// ==========================================
// 10. FIND()
// Find the Wave Pool
// ==========================================

console.log("===== FIND =====");

const wavePool = rides.find(ride => {
    return ride.name === "Wave Pool";
});

console.log(wavePool);


// ==========================================
// 11. FINDINDEX()
// Find the position of Aqua Racer
// ==========================================

console.log("===== FIND INDEX =====");

const aquaRacerIndex = rides.findIndex(ride => {
    return ride.name === "Aqua Racer";
});

console.log(`Aqua Racer is at index ${aquaRacerIndex}`);


// ==========================================
// 12. SOME()
// Check if at least one ride costs
// more than KSh 700
// ==========================================

console.log("===== SOME =====");

const expensiveRide = rides.some(ride => {
    return ride.price > 700;
});

console.log(expensiveRide);


// ==========================================
// 13. EVERY()
// Check if every ride costs
// less than KSh 1,000
// ==========================================

console.log("===== EVERY =====");

const allAffordable = rides.every(ride => {
    return ride.price < 1000;
});

console.log(allAffordable);


// ==========================================
// 14. OBJECT ITERATION - FOR...IN
// ==========================================

console.log("===== OBJECT ITERATION =====");

const waterpark = {
    name: "Aqua Paradise Waterpark",
    location: "Nairobi",
    openingTime: "9:00 AM",
    closingTime: "8:00 PM",
    rating: 4.7,
    open: true
};

for (let key in waterpark) {
    console.log(key, waterpark[key]);
}


// ==========================================
// 15. OBJECT.KEYS()
// Get all object keys
// ==========================================

console.log("===== OBJECT KEYS =====");

const waterparkKeys = Object.keys(waterpark);

console.log(waterparkKeys);


// ==========================================
// 16. OBJECT.VALUES()
// Get all object values
// ==========================================

console.log("===== OBJECT VALUES =====");

const waterparkValues = Object.values(waterpark);

console.log(waterparkValues);


// ==========================================
// 17. OBJECT.ENTRIES()
// Get keys AND values
// ==========================================

console.log("===== OBJECT ENTRIES =====");

const waterparkEntries = Object.entries(waterpark);

console.log(waterparkEntries);


// ==========================================
// 18. OBJECT.ENTRIES() + FOREACH
// ==========================================

console.log("===== WATERPARK INFORMATION =====");

Object.entries(waterpark).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});


// ==========================================
// 19. DESTRUCTIVE ARRAY OPERATION
// push()
// This changes the original array
// ==========================================

console.log("===== DESTRUCTIVE OPERATION =====");

rides.push({
    name: "Super Splash",
    type: "Water Slide",
    heightRequirement: 135,
    price: 900,
    capacity: 2
});

console.log(rides);


// ==========================================
// 20. NON-DESTRUCTIVE ARRAY OPERATION
// Using filter()
// The original array remains unchanged
// ==========================================

console.log("===== NON-DESTRUCTIVE OPERATION =====");

const waterSlides = rides.filter(ride => {
    return ride.type === "Water Slide";
});

console.log(waterSlides);

console.log("Original rides array:");
console.log(rides);


// ==========================================
// 21. NON-DESTRUCTIVE OPERATION
// Using spread operator
// ==========================================

const newRides = [
    ...rides,
    {
        name: "Extreme Drop",
        type: "Water Slide",
        heightRequirement: 150,
        price: 1000,
        capacity: 1
    }
];

console.log("Original rides:");
console.log(rides);

console.log("New rides:");
console.log(newRides);


// ==========================================
// 22. FUNCTION
// Check if a visitor can use a ride
// ==========================================

function canUseRide(visitorHeight, ride) {

    if (visitorHeight >= ride.heightRequirement) {
        return `${ride.name}: Visitor can use this ride.`;
    } else {
        return `${ride.name}: Visitor is too short for this ride.`;
    }
}


// Test the function

console.log("===== RIDE ELIGIBILITY =====");

console.log(
    canUseRide(145, rides[0])
);

console.log(
    canUseRide(110, rides[0])
);


// ==========================================
// 23. FUNCTION + ARRAY ITERATION
// Check a visitor against every ride
// ==========================================

function checkAllRides(visitorHeight) {

    rides.forEach(ride => {

        if (visitorHeight >= ride.heightRequirement) {
            console.log(
                `${ride.name}: Allowed`
            );
        } else {
            console.log(
                `${ride.name}: Not allowed`
            );
        }

    });
}

console.log("===== VISITOR RIDE CHECK =====");

checkAllRides(135);


// ==========================================
// 24. CUSTOMER OBJECT
// ==========================================

const visitor = {
    name: "John",
    age: 23,
    height: 175,
    ticketType: "VIP",
    swimmingLevel: "Advanced"
};


// ==========================================
// 25. ITERATE THROUGH CUSTOMER OBJECT
// ==========================================

console.log("===== VISITOR INFORMATION =====");

for (let key in visitor) {
    console.log(`${key}: ${visitor[key]}`);
}


// ==========================================
// 26. CHECK VISITOR
// ==========================================

function checkVisitor(visitor) {

    if (visitor.age >= 18 && visitor.height >= 140) {

        console.log(
            `${visitor.name} can access the adult rides.`
        );

    } else {

        console.log(
            `${visitor.name} should use the children's rides.`
        );

    }
}

checkVisitor(visitor);


// ==========================================
// 27. COUNT RIDES
// ==========================================

const rideCount = rides.length;

console.log(
    `The waterpark has ${rideCount} rides.`
);


// ==========================================
// 28. COUNT WATER SLIDES
// ==========================================

const waterSlideCount = rides.filter(ride => {
    return ride.type === "Water Slide";
}).length;

console.log(
    `The waterpark has ${waterSlideCount} water slides.`
);


// ==========================================
// 29. FIND THE MOST EXPENSIVE RIDE
// ==========================================

const mostExpensiveRide = rides.reduce((mostExpensive, ride) => {

    if (ride.price > mostExpensive.price) {
        return ride;
    }

    return mostExpensive;

});

console.log("===== MOST EXPENSIVE RIDE =====");

console.log(mostExpensiveRide);


// ==========================================
// 30. FINAL WATERPARK REPORT
// ==========================================

console.log("================================");
console.log("      WATERPARK REPORT");
console.log("================================");

console.log(`Park: ${waterpark.name}`);
console.log(`Location: ${waterpark.location}`);
console.log(`Rating: ${waterpark.rating}`);
console.log(`Opening: ${waterpark.openingTime}`);
console.log(`Closing: ${waterpark.closingTime}`);
console.log(`Total rides: ${rides.length}`);
console.log(`Water slides: ${waterSlideCount}`);
console.log(`Most expensive ride: ${mostExpensiveRide.name}`);
console.log(`Price: KSh ${mostExpensiveRide.price}`);
console.log("================================");
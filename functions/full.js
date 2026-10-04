// ==========================================
// SHIP FLEET MANAGEMENT SYSTEM
// ==========================================


// ==========================================
// 1. GLOBAL SCOPE
// ==========================================

// Array containing ship objects
const ships = [
    {
        name: "MV Ocean Star",
        type: "Container",
        capacity: 5000,
        status: "Active"
    },
    {
        name: "MV Atlantic",
        type: "Cargo",
        capacity: 3000,
        status: "Maintenance"
    },
    {
        name: "MV Pacific",
        type: "Container",
        capacity: 7000,
        status: "Active"
    },
    {
        name: "MV Horizon",
        type: "Cargo",
        capacity: 4500,
        status: "Active"
    }
];


// Global variable
let companyName = "Ocean Shipping Company";


// ==========================================
// 2. NORMAL FUNCTION
// ==========================================

// This function displays the company name
function displayCompany() {

    console.log(`Welcome to ${companyName}`);

}

displayCompany();


// ==========================================
// 3. FUNCTION WITH AN ARRAY LOOP
// ==========================================

// Using a traditional FOR loop
function displayShips() {

    for (let i = 0; i < ships.length; i++) {

        console.log(
            `${ships[i].name} - ${ships[i].status}`
        );

    }
}

displayShips();


// ==========================================
// 4. FUNCTION SCOPE
// ==========================================

function calculateAverageCapacity() {

    // Function-scoped variable
    let totalCapacity = 0;

    for (let i = 0; i < ships.length; i++) {

        totalCapacity += ships[i].capacity;

    }

    return totalCapacity / ships.length;
}

console.log(
    `Average capacity: ${calculateAverageCapacity()}`
);


// ==========================================
// 5. BLOCK SCOPE
// ==========================================

if (ships.length > 0) {

    // Block-scoped variable
    let message = "Ships are available.";

    console.log(message);

}


// ==========================================
// 6. ARRAY LOOPING WITH forEach()
// ==========================================

// forEach() takes a callback function
ships.forEach((ship) => {

    console.log(`Ship: ${ship.name}`);

});


// ==========================================
// 7. ARROW FUNCTION
// ==========================================

// Arrow function
const showShipType = (ship) => {

    console.log(`${ship.name} is a ${ship.type} ship.`);

};

showShipType(ships[0]);


// ==========================================
// 8. ANONYMOUS FUNCTION
// ==========================================

// This function has no name.
// It is being passed directly as a callback.

ships.forEach(function (ship) {

    console.log(`Checking ${ship.name}`);

});


// ==========================================
// 9. HIGHER-ORDER FUNCTION
// ==========================================

// forEach() is a higher-order function
// because it receives another function.

function processShip(ship, callback) {

    console.log(`Processing ${ship.name}`);

    callback(ship);

}


// Passing an arrow function as a callback
processShip(ships[0], (ship) => {

    console.log(`${ship.name} is ready.`);

});


// ==========================================
// 10. CALLBACK FUNCTION
// ==========================================

function inspectShip(ship, callback) {

    console.log(`Inspecting ${ship.name}`);

    callback(ship);

}


// This arrow function is the callback
inspectShip(ships[2], (ship) => {

    if (ship.status === "Active") {

        console.log(`${ship.name} passed inspection.`);

    } else {

        console.log(`${ship.name} needs maintenance.`);

    }

});


// ==========================================
// 11. MAP()
// ==========================================

// map() creates a NEW array
// It transforms every item.

const shipNames = ships.map((ship) => {

    return ship.name;

});

console.log(shipNames);


// ==========================================
// 12. FILTER()
// ==========================================

// filter() selects items that satisfy a condition.

const activeShips = ships.filter((ship) => {

    return ship.status === "Active";

});

console.log(activeShips);


// ==========================================
// 13. REDUCE()
// ==========================================

// reduce() combines the array into one value.

const totalCapacity = ships.reduce((total, ship) => {

    return total + ship.capacity;

}, 0);

console.log(`Total fleet capacity: ${totalCapacity}`);


// ==========================================
// 14. NESTED FUNCTION
// ==========================================

function shipReport(ship) {

    console.log(`Generating report for ${ship.name}`);

    // Inner function
    function checkCapacity() {

        if (ship.capacity >= 5000) {

            return "Large ship";

        } else {

            return "Small/medium ship";

        }

    }

    console.log(checkCapacity());
}

shipReport(ships[0]);


// ==========================================
// 15. NESTED ARROW FUNCTION
// ==========================================

function createShipChecker(minimumCapacity) {

    // Inner arrow function
    const checkShip = (ship) => {

        return ship.capacity >= minimumCapacity;

    };

    return checkShip;
}


// createShipChecker returns a function
const largeShipChecker = createShipChecker(5000);

console.log(
    largeShipChecker(ships[0])
);


// ==========================================
// 16. HIGHER-ORDER FUNCTION THAT RETURNS
//     ANOTHER FUNCTION
// ==========================================

function createStatusChecker(status) {

    return (ship) => {

        return ship.status === status;

    };

}

const activeChecker = createStatusChecker("Active");

console.log(
    activeChecker(ships[0])
);


// ==========================================
// 17. CALLBACK WITH setTimeout()
// ==========================================

// setTimeout() receives a callback function.

setTimeout(() => {

    console.log("Ship tracking update completed.");

}, 1000);


// ==========================================
// 18. COMPARISON OPERATORS
// ==========================================

for (const ship of ships) {

    if (ship.capacity >= 5000) {

        console.log(
            `${ship.name} is a large ship.`
        );

    }

}


// ==========================================
// 19. LOGICAL OPERATORS
// ==========================================

for (const ship of ships) {

    if (
        ship.status === "Active" &&
        ship.capacity >= 5000
    ) {

        console.log(
            `${ship.name} is an active large ship.`
        );

    }

}


// ==========================================
// 20. CONTINUE
// ==========================================

for (const ship of ships) {

    if (ship.status === "Maintenance") {

        continue;

    }

    console.log(
        `${ship.name} is currently operating.`
    );

}


// ==========================================
// 21. BREAK
// ==========================================

for (const ship of ships) {

    if (ship.capacity >= 7000) {

        console.log(
            `${ship.name} has the maximum capacity.`
        );

        break;

    }

}


// ==========================================
// 22. WHILE LOOP
// ==========================================

let index = 0;

while (index < ships.length) {

    console.log(
        `Checking ship: ${ships[index].name}`
    );

    index++;

}


// ==========================================
// 23. COMBINING filter() + map()
// ==========================================

// Find active ships
// Then get their names.

const activeShipNames = ships
    .filter((ship) => {

        return ship.status === "Active";

    })
    .map((ship) => {

        return ship.name;

    });

console.log(activeShipNames);


// ==========================================
// 24. COMBINING filter() + reduce()
// ==========================================

// Find active ships
// Then calculate their total capacity.

const activeCapacity = ships
    .filter((ship) => {

        return ship.status === "Active";

    })
    .reduce((total, ship) => {

        return total + ship.capacity;

    }, 0);

console.log(
    `Active fleet capacity: ${activeCapacity}`
);
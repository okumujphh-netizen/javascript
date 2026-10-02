const prices = [100, 200, 500, 1000];
//Do something with every price.
prices.forEach((price) => {
    console.log(price);
});
//Keep only items that satisfy a condition.
const newPrices = prices.map((price) => {
    return price * 2;
});

//Keep only items that satisfy a condition.
const expensivePrices = prices.filter((price) => {
    return price >= 500;
});

//example
const ships = [
    {
        name: "MV Ocean Star",
        type: "Container Ship",
        capacity: 5000,
        status: "Active"
    },
    {
        name: "MV Atlantic",
        type: "Cargo Ship",
        capacity: 3000,
        status: "Active"
    },
    {
        name: "MV Pacific",
        type: "Container Ship",
        capacity: 7000,
        status: "Maintenance"
    },
    {
        name: "MV Horizon",
        type: "Cargo Ship",
        capacity: 4500,
        status: "Active"
    }
];

ships.forEach((ship) => {

    console.log(`${ship.name} - ${ship.status}`);

});
const shipNames = ships.map((ship) => {

    return ship.name;

});

console.log(shipNames);

const activeShips = ships.filter((ship) => {

    return ship.status === "Active";

});

console.log(activeShips);
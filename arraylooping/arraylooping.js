// for loop
const products = ["Milk", "Bread", "Rice", "Sugar"];

for (let i = 0; i < products.length; i++) {

    console.log(products[i]);
// increase (i++) plus 1
}
// while loop
const goods = ["Milk", "Bread", "Rice", "Sugar"];

let i = 0;

while (i < goods.length) {

    console.log(products[i]);

    i++;
}
// forEach()
const prod = ["Milk", "Bread", "Rice", "Sugar"];

prod.forEach((product) => {

    console.log(product);

});
// break()
const product= ["Milk", "Bread", "Rice", "Sugar", "Juice"];

for (let i = 0; i < product.length; i++) {

    if (product[i] === "Rice") {
        break;// stop the the loop right now
    }

    console.log(product[i]);
}
// continue()
const produc = ["Milk", "Bread", "Rice", "Sugar", "Juice"];

for (let i = 0; i < produc.length; i++) {

    if (produc[i] === "Rice") {
        continue;
    }

    console.log(produc[i]);
}
//array iteration
// example
const menu = [
    { name: "Burger", price: 800, category: "Fast Food" },
    { name: "Pizza", price: 1200, category: "Italian" },
    { name: "Chicken", price: 1000, category: "Main Course" },
    { name: "Fries", price: 400, category: "Side" },
    { name: "Pasta", price: 900, category: "Italian" }
];
// forEach() display all foods
menu.forEach(item => {
    console.log(item.name);
});
// map() get all foods
const foodNames = menu.map(item => {
    return item.name;
});

console.log(foodNames);
// filter() food less than 1000
const affordableFoods = menu.filter(item => {
    return item.price < 1000;
});

console.log(affordableFoods);
//return() calculate the total value of the menu
const total = menu.reduce((sum, item) => {
    return sum + item.price;
}, 0);

console.log(total);
// find() find the pizza
const food = menu.find(item => {
    return item.name === "Pizza";
});

console.log(food);

// findIndex() find pizza position
const index = menu.findIndex(item => {
    return item.name === "Pizza";
});

console.log(index);
// some() does the restuarant have food over 1000
const expensiveFood = menu.some(item => {
    return item.price > 1000;
});

console.log(expensiveFood);
// every() are all food below 2000
const affordableMenu = menu.every(item => {
    return item.price < 2000;
});

console.log(affordableMenu);


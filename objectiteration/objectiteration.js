// object iteration
// for...in
for (let key in restaurant) {
    console.log(key, restaurant[key]);
}

// object.keys()
const keys = Object.keys(restaurant);

console.log(keys);

// object.values()
const values = Object.values(restaurant);

console.log(values);
// object.entries()
const entries = Object.entries(restaurant);

console.log(entries);

// destructive(mutating)operations
// oush()
const menu = ["Burger", "Pizza", "Pasta"];

menu.push("Chicken");

console.log(menu);
// pop()
const men = ["Burger", "Pizza", "Pasta"];

menu.pop();

console.log(men);
// splice
const menun = ["Burger", "Pizza", "Pasta", "Chicken"];

menu.splice(1, 1);

console.log(menun);
// none destructive(non mutating)operations
//filter()
const menuu = ["Burger", "Pizza", "Pasta", "Chicken"];

const italianFoods = menu.filter(food => {
    return food === "Pizza" || food === "Pasta";
});

console.log(italianFoods); 

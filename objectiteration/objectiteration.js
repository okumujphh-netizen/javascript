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


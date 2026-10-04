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

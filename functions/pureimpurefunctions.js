// pure functions
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // 8
console.log(add(5, 3)); // 8

// impure functions
let total = 0;

function addToTotal(price) {

    total = total + price;

}

//examples
// pure functions
function calculateAge(birthYear, currentYear) {

    return currentYear - birthYear;

}

console.log(calculateAge(2000, 2026)); // 26
// impure functions
let patientCount = 0;

function registerPatient() {

    patientCount++;

}
// Dynamic analysis examines software by executing it and observing what happens.
function calculateTotal(price, quantity) {
  return price - quantity;
}

console.log(calculateTotal(1000, 3));

// A dynamic test can expose this incorrect behavior by executing the function with test inputs and comparing the result with the expected answer.
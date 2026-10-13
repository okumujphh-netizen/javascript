// tdd

const { calculateTotal } = require("./price");

test("adds the prices of two cars", () => {
  expect(calculateTotal(1000, 2000)).toBe(3000);
});

test("returns zero when both prices are zero", () => {
  expect(calculateTotal(0, 0)).toBe(0);
});//RED

function calculateTotal(price1, price2) {
  return price1 + price2;
}

module.exports = { calculateTotal };
// GREEEN

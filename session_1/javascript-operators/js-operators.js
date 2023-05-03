// https://www.programiz.com/javascript/operators

// Assignment Operators

// Arithmetic Operators

// ternary operator

//exercises
// given const prices = [33, 45, 66, 7, 8]; calculate the total price , use a for loop;
function calcSumPrices(prices) {
  let totalPrice = 0;
  for (let i = 0; i < prices.length; i++) {
    totalPrice += prices[i];
  }
  return totalPrice;
}
console.log(calcSumPrices([33, 45, 66, 7, 8]));

// given const prices = [33, 45, 66, 7, 8]; given a discount of 10% return a new array with the new discounted prices (EX arr = [10] disc 10% new arr=[9])
const prices = [33, 45, 66, 7, 8];
let discountedPrices = [];
for (let i = 0; i < prices.length; i++) {
  let newPrice = Math.round(prices[i] - (10 / 100) * prices[i]);
  discountedPrices.push(newPrice);
}
console.log(discountedPrices);

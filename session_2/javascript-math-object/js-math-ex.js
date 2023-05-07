/*
Create a dynamic function that accept as arguments a numbers and return a random number between 0 and provided number .
Ex: return a number between 0 and 3
Check how many days is between two provided dates. create a dynamic function

*/

function randomNumber(n) {
  return Math.random(n).toFixed(2) * n;
}
console.log(randomNumber(3));

function betweenDays(startDate, finishDate) {
  return Math.max(startDate, finishDate) - Math.min(startDate, finishDate);
}

console.log(betweenDays(12, 20));

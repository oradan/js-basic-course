//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

//https://www.youtube.com/watch?v=93Nd8f9HU8Q


//Math.min()
//Math.max()
//Math.abs()
//Math.pow()
//Math.random()
//Math.floor()
//Math.round()

const pi = Math.PI;
console.log(pi.toFixed(5));

const min = Math.min(1,4,5,6,78,2,0.7)
console.log(min)

const max = Math.max(1,2,44,5,6,77.4)
console.log(max)

const abs1 = Math.abs(3)  // cand comparam numere negative
const abs2 = Math.abs(-3)

console.log(abs1 === abs2)

const pow = Math.pow(2,2)
console.log(pow)

const random = Math.random().toFixed(1)*20;
console.log(random)

const floor = Math.floor(3.978)
console.log(floor)

const round = Math.round(3.6)
console.log(round)
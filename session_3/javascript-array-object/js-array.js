// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
// https://www.youtube.com/watch?v=01jVgCK-HX4
// https://www.youtube.com/watch?v=wstwjQ1yqWQ

// creation 
const myArr = [1,2,3];
const myStrArr = ["str1","str2"];
const myObjArr = [{name:"Olga"},{name:"Olga"}];
console.log(myObjArr[0].name)
console.log(myArr[0])
console.log(myArr)
console.log(myArr.length)
console.log(myArr.push())




//const myArr = ['Phone', 'TV', 'Book', 'Song']
const categories = [
    { name: 'Gadgets', id: 'c1' },
    { name: 'Music', id: 'c2' },
    { name: 'Others', id: 'c3' },
]

// Array constructor
const arrCr = new Array(7,"test")
console.log(arrCr)
// Array manipulation


//Imutability
//save by references
const str = 'olga'
console.log(str)
const a = [1,2]; 
console.log(a)
const b = [1,2];
a[0] = 7;
console.log(b[0])


const items = [
    { name: 'Phone', price: 66, categorie: 'c6' },
    { name: 'TV', price: 456, categorie: 'c1' },
    { name: 'Book', price: 44, categorie: 'c3' },
    { name: 'Song', price: 456, categorie: 'c2' },
    { name: 'Computer', price: 12, categorie: 'c1' },
    { name: 'Computer', price: 10, categorie: 'c1' },
    { name: 'CD', price: 45, categorie: 'c1' },
    { name: 'Mouse', price: 90, categorie: 'c1' },
    { name: 'Album', price: 17, categorie: 'c2' },
    { name: 'Album' , categorie: 'c2' },
]

const myNames = ['Phone', 'TV', 'Book', 'Song'];
const newNames = myNames.map(i=>i+'test')

console.log(myNames)
console.log(newNames)


//Array.prototype.filter

const filteredArr = items.filter(item=> item.price > 90);
console.log(filteredArr)
console.log(items)

//Array.prototype.map()
let rate = 0;
const newArr = items.map(item=>{
    item.rating = rate;
    rate++
    return item;
})

const newStrArr = items.map(item=>item.name);
console.log(newArr)
console.log(newStrArr)


// change to uppercase each item name  map creates a new array
//Array.prototype.find()

const smallPrice = items.find(i=>i.price<40)
console.log(smallPrice)

//Array.prototype.forEach()  insted of for loop

items.forEach(i=>{
    i.test="test";
    console.log(i);
})

console.log(items)

//Array.prototype.some()

const isLessThan10 = items.some(i=>i.price<10)
console.log(isLessThan10)
//check if there is an expensive item
//Array.prototype.every()

const f = items.every(i=>i.price)
if(!f){
    const e = items.find(i=>!i.price).price=0;
}

console.log(items)

//check is all item have prices

// for self st
//Array.prototype.includes()
//Array.prototype.splice()


//Array.prototype.reduce()

const totalPrice = items.reduce((acc,curr)=>{
    console.log(acc, "acc");
    console.log(curr, "curr");
    return acc + curr.price;
},0)

console.log(totalPrice)

// Destructuring and spred operator use myArr const

const myNames_1 = ['Phone', 'TV', 'Book', 'Song'];
myNames_1[0]
console.log(...myNames_1);

const prices_ds = items.map(i=>i.price);
console.log(prices_ds);
Math.max(prices_ds);
console.log(Math.max(...prices_ds))

const [var1,...t] = myNames_1;

console.log(var1)
console.log(t)
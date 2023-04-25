// https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// https://www.youtube.com/watch?v=01jVgCK-HX4
// https://www.youtube.com/watch?v=wstwjQ1yqWQ
//Objects are key/value pairs
//1. Creating objects using object literal syntax

const a = {
    name: "Olga",
    age: 56,
    getName(){
        console.log(this.name)
    },
    getAge: function(){
        console.log(this.age)
    }
}

a.getName();
a.getAge();

//2. Creating objects using the ‘new’ keyword

const b = new Object();
b.age = 44;
console.log(b.age)

//a) Using the ‘new’ keyword with’ in-built Object constructor function

function Person(name, age) {
    this.name = name;
    this.age = age
}
Person.prototype.getNameAndAge = function(){
    console.log(`${this.name} is ${this.age} old`)
}
const person = new Person('Olga',40);
console.log(person)

person.getNameAndAge()

//b) Using ‘new’ with user defined constructor function

//3. Using Object.create() to create new objects

const user = Object.create(new Person('Maria',40));
user.test = "Test"
user.getNameAndAge()
console.log(user)

//4. Using Object.assign() to create new objects

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const foo = Object.assign({},target,source);
console.log(foo)
console.log(target)

//5. Using ES6 classes to create objects

const obj = {
    name:'Maria',
    description:'This is an object',
    score:99,
    address:{
        street:'Main strit',
        ap:44
    },
    position:'the main position',
    isHere: true
}
const n = 'name'
console.log(obj[n])


const {name, position, address:{street},...rest} = obj;

console.log(name)
console.log(position)
console.log(street)
console.log(rest)


//Object.entries()
console.log(obj)
Object.entries(obj).forEach(i=>{
    const [key,value] = i;
    console.log(`${key}:${value}`)
})
//Object.keys()

Object.keys(obj).forEach(i=>console.log(obj[i]))
//Object.values()
console.log('++++++++++')
console.log(Object.values(obj))








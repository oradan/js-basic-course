//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

// dynamic language
let a = "I am a string ";
a = true;
a = 4;
a = [1,2,"3"];

console.log(a)
//implicit type conversion

let b = 42 + '1'; 
console.log(`${b} is type of ${typeof b}`)

//JavaScript evaluates expressions from left to right

let c = 3 + 4 + '5';
let d = '5' + 3 + 4;

// save by pointers

var myObj_1 = {
    firstName: 'Olga',
    lastName: 'Radan'

}
var myArr = [1,2,3];
var myObj_2 = myObj_1;
console.log(myObj_2);
myObj_1.firstName = 'Maria';
console.log(myObj_1);
console.log(myObj_2.firstName);
 

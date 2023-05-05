// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

//Function declarations
myTestFn()
function myFunction() {
    console.log('Heyy');
}

myFunction();

//Function expressions

const mySecondFunction = function mySF() {
    return 3;
}

console.log(mySecondFunction());

//Anonymous functions

const myThirdFunction = function () {
    console.log("Heyy from third function")
}
myThirdFunction();

// single line arrow fn
const myArrowFunction = n => 4 + n;

console.log(myArrowFunction(5))

// multi  line arrow fn
const myArrowFunctions = (n,m) => {
    const rezult = 4 + n + m;
    return rezult;
};

console.log(myArrowFunctions(5,3))

//Function scope
function myFnScope() {
    var a = "test"
}

//Function parameters
//set default values to the parameters of function
const arr = ['My','Name','is']
function myParamFn(value = "Jon",arr = []) {
    arr.push(value);
    console.log(arr);
}

myParamFn('Olga',arr);
myParamFn();

//return from function

const newConst = () => 'NAN'
const test = function () {
    return [1,2,3]
}

//Function hoisting

function myTestFn() {
    console.log("Heyy fromtest function")
}

//setTimeout()
//setInterval()
//Nested functions and closures




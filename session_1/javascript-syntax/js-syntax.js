//https://en.wikipedia.org/wiki/JavaScript_syntax
// 1 => JS is case sensitive

//var test = 'test'
//console.log(Test)

// 2 => Use semicolon after each statement

//alert("this is a basyc js course") ; alert('End of the statement');

// 3 => Comments one-line and multiline 

// this is one line comment
/*console.log("This is a multy-line statement")
console.log("This is a multy-line statement")
console.log("This is a multy-line statement")
console.log("This is a multy-line statement")*/



// 4 => Js runs from top to bottom
console.log("this is the line 22")
// 5 => Js is not sensitive to whitespace or line break

var test_1 = "Test_1"; 

function foo() {
   console.log("heyyy")
}; 

console.log(test_1); foo()
/* 
   6 =>  Indentation
A complete JavaScript program can technically be written on a single line. 
However, this would quickly become very difficult to read and maintain. Instead, we use newlines and indentation.
*/

// 7 Reserved keywords  list https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Reserved_keywords_as_of_ECMAScript_2015

// 8 Variable declaration , js is a dynamic language it means do not need to specify the type of variable

var test = "";
let test_l= "";
const test_c = "";
test = "Test";
test = "test + test"
console.log(test);

// 9 Function declaration, functions need to be invoked 

function test_2(){
   console.log("My first function");
};


test_2();

const test_3 = ()=>{
   console.log("My first arrow function");
}

test_3();

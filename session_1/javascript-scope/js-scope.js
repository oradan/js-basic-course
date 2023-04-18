//https://dmitripavlutin.com/javascript-scope/
// Global scop
var test = "test";
let test_1 = "test_1"
console.log("test is not a variable")
// Block scope
if(true) {
    let foo_2 = "foo_2";
    const foo_3 = "foo_3";
    console.log(test);
    console.log(test_1);
}

// function scope
function test_fn() {
    var innerFunction = "inner Function";
    console.log(innerFunction);
}

test_fn();


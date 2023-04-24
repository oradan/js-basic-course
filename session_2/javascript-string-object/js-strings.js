// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// https://www.youtube.com/watch?v=uKKEdtNU5II
// https://contest-server.cs.uchicago.edu/ref/JavaScript/developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods.html
// https://programmingwithmosh.com/javascript/javascript-wrapper-objects/
//https://javascript.info/primitives-methods

const myStr = 'Thius is my first str';
const myStr_1 = "Thius is my second str";
const myStr_2 = `My strings are ${myStr} and ${myStr_1}`;
console.log(myStr_2);

console.log(typeof myStr_2);

const myStrObj = new String('This is my obj type str'); // not recommended
console.log(typeof myStrObj.valueOf());

console.log(myStr.length);
myStr.log = ()=>{console.log('heyyy')};

//.length property => validates the lenth of an input

const str = 'Life, the universe and everything. Answer:';
console.log(str.length)
//string is index based ex str[0]
console.log(str[0]);
//trim()  used in most cases for input sanitization ex "  last name"
const firstName = '    Olga   ';
const firstNameFormeted = firstName.trim();
console.log(firstName);
console.log(firstNameFormeted);
//toUpperCase()

const toUpperCase = "this is a random str";
console.log(toUpperCase.toUpperCase());
//toLowerCase()

console.log(toUpperCase.toUpperCase().toLowerCase().length)

//indexOf() includes() lastIndexOf()

console.log(str.indexOf('Life'));
console.log(str.includes(''));
console.log(str.lastIndexOf('i'));

//slice()  

console.log(str.slice(3,5));

//charAt()

console.log(str.charAt(6));
//split()

const names = 'Olga,Maria,Ioana';
const namesArr = names.split(',');
console.log(namesArr)

for(let i = 0; i<namesArr.length;i++) {
    console.log(namesArr[i]);
}

//replace()  replaceAll() with regular expresion global g  for replacing all match and i for ignore case sensitive

// I love tomatoes. Tomatoes are red and tasty. Everybody love tomatoes.  // strawberries

const strReplace = 'I love tomatoes. Tomatoes are red and tasty. Everybody love tomatoes.';
const regex = /tomatoes/gi;
const newStr = strReplace.replace(regex, (match)=>{
    const isUpperCase = match.charAt(0) === match.charAt(0).toUpperCase();
    return isUpperCase ? 'Strawberries' : 'strawberries';
});

console.log(newStr);

// write a method to fix the cities name received as input ex: fix ManCHESter to Manchester
function formatCity(city){
    const _toLowerCase = city.toLowerCase();
    return _toLowerCase.replace(_toLowerCase[0], _toLowerCase[0].toUpperCase());
}
console.log(formatCity('ManCHESter'))
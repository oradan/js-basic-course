// if else  https://www.w3schools.com/js/js_if_else.asp
// Switch statement https://www.w3schools.com/js/js_switch.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator


// if...else 
const condition = true;
const condition_1 = true;
const condition_2 = false;
if(condition) {
    console.log("Heyyy");
} else {
    console.log("Heiii it is not true")
};
// if ... else if 

if(condition) {
    console.log("First condition is true");
} else if (condition_1) {
    console.log("Second condition is true");
} else if (condition_2) {
    console.log("Second condition is true");
} else {
    console.log("Nothing was true")
}

// ternary operator

const myConst = condition ? "My constant" : "This is not my constant";
console.log(myConst);

// switch statement

const dayOfTheWeek = new Date().getDay();

function logTheday(message) {
    const dayName = new Date().toLocaleDateString('en-En',{weekday:"long"});
    console.log(`Today is ${dayName} , ${message}`)
}
// logTheday("It is a beautiful day")

console.log('++++++++++++++++');
switch(dayOfTheWeek) {
      case 1:
      case 2:  
      case 3:
        logTheday(":(  Work again , workkkkkk");
        break
      case 4:
      case 5:
        logTheday(":) It is so good");
        break
      case 6:
        logTheday("Weekendddddd");
        break
      case 7:
        logTheday(":( UUUUU the Monday is coming");
        break
        default:
            console.log('There is no day name')
}
// while loop
let i = 0;
let foo = 0;
while(i<=5) {
    console.log(i);
    i++;
}
// Do While Loop
do {
    console.log('Is the first iteration');
    console.log(foo);
    foo++;
 } while (foo <=5) ;


// for loop

const peeps = [
    {
        name: {
            first: 'Jerod',
            last: 'Smith'
        },
        age: 25,
        id: 1,
    },
    {
        name: {
            first: 'Jen',
            last: 'Jones'
        },
        age: 30,
        id: 2,
    },
    {
        name: {
            first: 'Maria',
            last: 'Mirabela'
        },
        age: 16,
        id: 3,
    },
    {
        name: {
            first: 'Terrance',
            last: 'Adams'
        },
        age: 26,
        id: 4,
    }
];

console.log('++++++++++++++++');

for(let i = 0; i < peeps.length; i++) {
   const {name:{first,last}, age} = peeps[i];
 //  if (i===2) {break};
   if (i===2) {continue};
   console.log(`${first} ${last}`);
}

console.log('++++++++++++++++');

// for ... in loop

const comments = {
    293: {
        text: 'I love pizza!',
        userId: 1,
        rating: 4,
    },
    123: {
        text: 'I love pizza more than everyone!',
        userId: 1,
        rating: 5,
    },
    4223: {
        text: 'Burgers are best.',
        userId: 3,
        rating: 4,
    },
    4267: {
        text: 'Bears eat beets.',
        userId: 3,
        rating: 3,
    },
    1561: {
        text: 'Best service ever!',
        userId: 2,
        rating: 5,
    },
    1899: {
        text: 'This was gross!',
        userId: 3,
        rating: 1,
    },
    415: {
        text: 'Much better than last time!',
        userId: 3,
    }
};

for( let key in comments) {
    const {userId, text} = comments[key];
    console.log(`${userId} comented: ${text}`);
}

// for ... of loop


console.log(Object.entries(peeps[0]), "entries");

for (let key of Object.keys(comments)) {
   console.log(comments[key].text);
}
console.log('++++++++++++++++');
for (let value of Object.values(comments)) {
   console.log(value.text);
}

console.log('++++++++++++++++');
for (let [key,value] of Object.entries(comments)) {
   console.log(value.text);
}
console.log('++++++++++++++++');


// const peeps = [
//     {
//         name: {
//             first: 'Jerod',
//             last: 'Smith'
//         },
//         age: 25,
//         id: 1,
//     },
//     {
//         name: {
//             first: 'Jen',
//             last: 'Jones'
//         },
//         age: 30,
//         id: 2,
//     },
//     {
//         name: {
//             first: 'Terrance',
//             last: 'Adams'
//         },
//         age: 26,
//         id: 3,
//     }
// ];

// ex nr 2 from arr-obj ex
const fullNameArr = peeps.map(i=>`${i.name.first} ${i.name.last}`);
const fullNameArr_1 = peeps.map(({name:{first,last}})=>`${first} ${last}`);
console.log(fullNameArr);
// ex nr 3 from arr-obj ex
const isOlderThan24 = peeps.every(i=> i.age > 24);

const arr_1 = [];

for (let val of Object.values(comments)) {
    arr_1.push(val.text);
}

console.log(arr_1);
const arr_2 = Object.values(comments).map(i=>i.text)
const arr_3 = Object.values(comments).reduce((acc,curr)=>{
    return [...acc,curr.text]
},[])

console.log(arr_2)
console.log(arr_3)


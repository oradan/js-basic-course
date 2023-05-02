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
            first: 'Terrance',
            last: 'Adams'
        },
        age: 26,
        id: 3,
    }
];

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


// EASIER CHALLENGES (using the peeps array) //
console.log('EASIER CHALLENGES');
// 1. Count the number of people in the peeps array.
console.log('1. Count the number of people in the peeps array.');

const numberOfPeople = peeps.length;
console.log(numberOfPeople);

// 2. List full names of people in a new array of strings.
console.log('2. List full names of people in a new array of strings.')

/* const fullNameArr = peeps.map(i=>`${i.name.first} ${i.name.last}`);
console.log(fullNameArr); */

const fullNameArr_1 = peeps.map(({name:{first,last}})=>`${first} ${last}`);
console.log(fullNameArr_1);

// 3. Return/save in a variable  “true” if everyone is older than 24 and save in a constant use peeps array Ex: allAre24.
console.log('3. Return/save in a variable  “true” if everyone is older than 24 and save in a constant.');

const allAre24 = peeps.every(i=> i.age > 24);
console.log(allAre24);

// 4. Return/save in a variable “true” if at least one person is younger than 26.
console.log('4. Return/save in a variable “true” if at least one person is younger than 26.');

const notAllAre26 = peeps.find(i=> i.age < 26);
function bool(arr){
if (notAllAre26) return true;
else return false;
}
const atLeastOnePersonIsYoungerThan26=bool(peeps);
console.log(atLeastOnePersonIsYoungerThan26);

// 5. Return/save in a variable a new array called “young peeps” of all peeps less than 30.
console.log('5. Return/save in a variable a new array called “young peeps” of all peeps less than 30');

const peepsLessThan30 = peeps.filter(ppl=> ppl.age < 30);
const youngPeeps = peepsLessThan30.map(({name:{first,last},age,id}) =>`${first} ${last} ${age} ${id}`);
console.log(youngPeeps); // array of strings


function getYoungPeeps(arr) {
    const youngPeeps = [];
    for (let i = 0; i < arr.length; i++) {
    youngPeeps.push(arr[i]); }
    return youngPeeps;
}    

const youngPeeps1 = getYoungPeeps(peepsLessThan30);
console.log(youngPeeps1);

// 6. Sort the peeps by age from oldest to youngest in an new array called “sortedPeeps”. use Array.sort()
console.log('6. Sort the peeps by age from oldest to youngest in an new array called “sortedPeeps”.')

function compareAges(peep1, peep2) {
    return peep2.age - peep1.age; // returnează diferența de vârstă între cele două persoane
  }
  
const peepsSorted = peeps.sort(compareAges); // sortam pe baza diferentei de varsta
console.log(peepsSorted);

const sortedPeeps = peepsSorted.map(({name:{first,last},age,id}) =>`${first} ${last} ${age} ${id}`);//destructurare
console.log(sortedPeeps);//array of strings


// 7. Create a new array called “firstNamePeeps” with only the first names of the peeps.
console.log('7. Create a new array called “firstNamePeeps” with only the first names of the peeps.');

const firstNamePeeps = peeps.map(({name:{first}}) =>`${first}`);
console.log(firstNamePeeps);


// HARDER CHALLENGES (using the comments object and peeps array) //
console.log('HARDER CHALLENGES');
// 1. List all the comments text  in an array of strings called “commentsTextArray” use array.push() or even harder use array.map()
console.log('1. List all the comments text  in an array of strings called “commentsTextArray” ');

const commentsTextArray = Object.values(comments).map(comment => comment.text);
console.log(commentsTextArray);

// 2. Return all comments with the word “love” in the comment text in a new array called “loveComments” 
console.log('2. Return all comments with the word “love” in the comment text in a new array called “loveComments” ');

const loveComments = Object.values(comments).filter(comment => comment.text.includes('love')).map(comment => comment.text);
console.log(loveComments);

// 3. List all the comments in an array called “sortedCommentsArray" from lowest rating to highest rating. Ignore comments without a rating.
console.log('3. List all the comments in an array called “sortedCommentsArray" from lowest rating to highest rating. Ignore comments without a rating.');

// se filtreaza comments fara rating si sortam dupa rating cu diferenta intre ele ca la ex.6 (dif de varsta)
const sortedComments = Object.values(comments).filter(comment => comment.rating !== undefined).sort((a, b) => a.rating - b.rating);
const sortedCommentsArray = sortedComments.map(comment => comment.text);
console.log(sortedCommentsArray);

// 4. Return a new object called “commentObj” with the comment id as a key and the comment text as the value.
console.log('4. Return a new object called “commentObj” with the comment id as a key and the comment text as the value.');

const commentObj = {};

for (const commentId in comments) {
  if (comments[commentId].text) {
    commentObj[commentId] = comments[commentId].text;
  }
}
console.log(commentObj);

// 5. Return a new object called “groupedRatings” with the rating as a key and an array of comments text with that rating as the value. 
// Ignore comments without a rating.
console.log('5. Return a new object called “groupedRatings” with the rating as a key and an array of comments text with that rating as the value. Ignore comments without a rating.');

const groupedRatings = {};

for (const key in comments) {
  const comment = comments[key];
  if (comment.rating !== undefined) {
    if (groupedRatings[comment.rating] === undefined) {
      groupedRatings[comment.rating] = [comment.text];
    } else {
      groupedRatings[comment.rating].push(comment.text);
    }
  }
}

console.log(groupedRatings);
// 6. Return the average rating of all comments.
console.log('6. Return the average rating of all comments.');

const ratings = Object.values(comments).filter(comment => comment.rating).map(comment => comment.rating); //returneaza ratingurile fara cele care nu au rating
const averageRating = ratings.reduce((acc, currval) => acc + currval, 0) / ratings.length;

console.log(averageRating); // ? 4
// 7. Group all comments by the user who made the comment. Return a new object called “groupedPeepComments” with the user’s first and last name as a camelcase string key. The value of each object should be an array of comment objects by the person.
console.log('7. Group all comments by the user who made the comment. Return a new object called “groupedPeepComments” with the user’s first and last name as a camelcase string key. The value of each object should be an array of comment objects by the person.');

const groupedPeepComments = {};

for (const commentId in comments) {
    const comment = comments[commentId];
    const user = peeps.find((peep) => peep.id === comment.userId);
    if (!user) {
    continue;
  }

  const key = `${user.name.first}${user.name.last}`;
  if (!groupedPeepComments[key]) {
    groupedPeepComments[key] = [];
  }
  groupedPeepComments[key].push(comment);
}
console.log(groupedPeepComments);







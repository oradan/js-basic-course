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

// 1. Count the number of people in the peeps array.
const nrOfPeeps = peeps.length;
console.log(nrOfPeeps);

// 2. List full names of people in a new array of strings.
const fullNames = [...peeps].map(person => `${person.name.first} ${person.name.last}`);
console.log(fullNames);

// 3. Return/save in a variable  “true” if everyone is older than 24 and save in a constant use peeps array Ex: allAre24.
const adults = [...peeps].every(person => person.age > 24);
console.log(adults);

// 4. Return/save in a variable “true” if at least one person is younger than 26.
const minors = [...peeps].some(person => person.age < 26);
console.log(minors);

// 5. Return/save in a variable a new array called “young peeps” of all peeps less than 30.
const youngPeeps = [...peeps].filter(person => person.age < 30);
console.log(youngPeeps);

// 6. Sort the peeps by age from oldest to youngest in an new array called “sortedPeeps”. use Array.sort()
const sortedPeeps = [...peeps].sort((a, b) => b.age - a.age);
console.log(sortedPeeps);

// 7. Create a new array called “firstNamePeeps” with only the first names of the peeps.
const firstNamePeeps = [...peeps].map(person => person.name.first);
console.log(firstNamePeeps);


// HARDER CHALLENGES (using the comments object and peeps array) //

// 1. List all the comments text  in an array of strings called “commentsTextArray” use array.push() or even harder use array.map()

const commentsTextArray = Object.values(comments).map(comment => comment.text);
console.log(commentsTextArray);

// 2. Return all comments with the word “love” in the comment text in a new array called “loveComments” 

const loveComments = Object.values(comments).filter(comment => comment.text.includes("love"));
console.log(loveComments);

// 3. List all the comments in an array called “sortedCommentsArray" from lowest rating to highest rating. Ignore comments without a rating.

const ratedComments = Object.values(comments).filter(comment => comment.rating);
const sortedComments = ratedComments.sort((a, b) => a.rating - b.rating);
const sortedCommentsArray = sortedComments.map(comment => ({ text: comment.text, userId: comment.userId, rating: comment.rating }));

// 4. Return a new object called “commentObj” with the comment id as a key and the comment text as the value
const commentObj = Object.entries(comments)
console.log(commentObj);

// 5. Return a new object called “groupedRatings” with the rating as a key and an array of comments text with that rating as the value. 
// Ignore comments without a rating.

// 6. Return the average rating of all comments.

// 7. Group all comments by the user who made the comment. Return a new object called “groupedPeepComments” with the user’s first and last name as a camelcase string key. The value of each object should be an array of comment objects by the person.


// <email>/session_3/exercisess

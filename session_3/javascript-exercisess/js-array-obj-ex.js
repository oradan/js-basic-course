const peeps = [
  {
    name: {
      first: "Jerod",
      last: "Smith",
    },
    age: 25,
    id: 1,
  },
  {
    name: {
      first: "Jen",
      last: "Jones",
    },
    age: 30,
    id: 2,
  },
  {
    name: {
      first: "Terrance",
      last: "Adams",
    },
    age: 26,
    id: 3,
  },
];

const comments = {
  293: {
    text: "I love pizza!",
    userId: 1,
    rating: 4,
  },
  123: {
    text: "I love pizza more than everyone!",
    userId: 1,
    rating: 5,
  },
  4223: {
    text: "Burgers are best.",
    userId: 3,
    rating: 4,
  },
  4267: {
    text: "Bears eat beets.",
    userId: 3,
    rating: 3,
  },
  1561: {
    text: "Best service ever!",
    userId: 2,
    rating: 5,
  },
  1899: {
    text: "This was gross!",
    userId: 3,
    rating: 1,
  },
  415: {
    text: "Much better than last time!",
    userId: 3,
  },
};

// EASIER CHALLENGES (using the peeps array) //

// 1. Count the number of people in the peeps array.
let numberOfPeople = 0;
for (let i = 0; i < peeps.length; i++) {
  numberOfPeople += i;
}
console.log(numberOfPeople);

// 2. List full names of people in a new array of strings.
const fullName = peeps.map((person) => {
  const {
    name: { first, last },
  } = person;
  return `${first} ${last}`;
});

console.log(fullName);

// 3. Return/save in a variable  “true” if everyone is older than 24 and save in a constant use peeps array Ex: allAre24.
const adultsOlder = peeps.every((adult) => adult.age > 24);
console.log(adultsOlder);

// 4. Return/save in a variable “true” if at least one person is younger than 26.
const minor = peeps.some((child) => child.age < 26);
console.log(minor);

// 5. Return/save in a variable a new array called “young peeps” of all peeps less than 30.
const youngPeeps = peeps.filter((person) => person.age < 30);
console.log(youngPeeps);

// 6. Sort the peeps by age from oldest to youngest in an new array called “sortedPeeps”. use Array.sort()
const sortedPeeps = [...peeps].sort((a, b) => b.age - a.age);
console.log(sortedPeeps);
//modifica array-ul initial

// 7. Create a new array called “firstNamePeeps” with only the first names of the peeps.
const firstNamePeeps = peeps.map((peep) => {
  const { name } = peep;
  return name.first;
});
console.log(firstNamePeeps);

// HARDER CHALLENGES (using the comments object and peeps array) //

// 1. List all the comments text  in an array of strings called “commentsTextArray” use array.push() or even harder use array.map()
let commentsTextArray = [];
const commentsArray = Object.values(comments);
commentsArray.forEach((comment) => {
  commentsTextArray.push(comment.text);
});
console.log(commentsTextArray);
console.log(commentsArray);

// 2. Return all comments with the word “love” in the comment text in a new array called “loveComments”
const loveComments = [];
commentsArray.map((item) => {
  const { text } = item;
  // text.includes("love") ? loveComments.push(text) : loveComments;
  const loveText = text.includes("love");
  if (loveText) {
    loveComments.push(text);
  }
});
console.log(loveComments);

// 3. List all the comments in an array called “sortedCommentsArray" from lowest rating to highest rating. Ignore comments without a rating.
const ratingArray = commentsArray.filter((element) => element.rating);
const sortedCommentsArray = ratingArray.sort((a, b) => a.rating - b.rating);
console.log(sortedCommentsArray);

// 4. Return a new object called “commentObj” with the comment id as a key and the comment text as the value.
const commentKey = Object.keys(comments);
const commentObj = commentKey.reduce(
  (acc, currentVal) => ({ ...acc, [currentVal]: comments[currentVal].text }),
  {}
);
console.log(commentObj);

// 5. Return a new object called “groupedRatings” with the rating as a key and an array of comments text with that rating as the value.
// Ignore comments without a rating.
const commentsValueRating = Object.values(comments).filter(
  (element) => element.rating
);
const ratingId = commentsValueRating.map((element) => element.rating);
const valueText = commentsValueRating.map((element) => element.text);
const objRating = ratingId.reduce((acc, currentRating, valueText) => {
  acc[currentRating] = [
    ...(acc[currentRating] || []),
    commentsValueRating[valueText],
  ];
  return acc;
}, {});
console.log(objRating);

// 6. Return the average rating of all comments.
const ratingAvgSum = ratingId.reduce(
  (sum, currentValue) => (sum += currentValue),
  0
);
const ratingAvg = Math.round(ratingAvgSum / ratingId.length);
console.log(ratingAvg);

// 7. Group all comments by the user who made the comment. Return a new object called “groupedPeepComments” with the user’s first and last name as a camelcase string key. The value of each object should be an array of comment objects by the person.
const listValues = Object.values(comments);
const groupedPeepComments = peeps.reduce(
  (acc, { name: { first, last }, id }) => {
    acc[`${first.toLocaleLowerCase()}${last}`] = listValues.filter(
      (i) => id === i.userId
    );
    console.log(acc, `=> ${id}`);
    return acc;
  },
  {}
);
console.log(groupedPeepComments);
// <email>/session_3/exercisess

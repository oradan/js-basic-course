/*
Given a string , implement a dynamic method in order to replace a certain word in that string.

Ex : Apples are round, and apples are juicy.

replace word ‘apples’ wit ‘oranges’ . If the word that needs to be replaced is at the beginning of the sentence, please keep the capitalization of the first letter.

Result: Oranges are round, and oranges are juicy.
*/

const applesString = "Apples are round, and apples are juicy.";
const regexA = /apples/gi;
const orangesString = applesString.replace(regexA, (word) => {
  const isUpperCase = word.charAt(0) === word[0].toUpperCase();
  return isUpperCase ? "Oranges" : "oranges";
});

console.log(orangesString);

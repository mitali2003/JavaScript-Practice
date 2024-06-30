// Q-1 Find longest word in sentences

const str = "My name is Mitali i am a beutiful girl";

const findLongestWord = (str) => {
  return str.split(" ").reduce((currWord, nextWord) => {
    return currWord.length > nextWord.length ? currWord : nextWord;
  });
};
console.log(findLongestWord(str));

//Q-2 : Write a JavaScript program to find the maximum and minimum values of an object properties.

const scores = {
  math: 95,
  english: 88,
  science: 76,
  history: 92,
};

const findMaxMinValue = (scores) => {
  const values = Object.values(scores);
  const maxValues = Math.max(...values);
  const minValues = Math.min(...values);
  return { maxValues, minValues };
};
console.log(findMaxMinValue(scores));

// Q-3 : Write a JavaScript program to find all values in an object that are of a specific type.

const mixedData = {
  id: 101,
  name: "Bob",
  isStudent: true,
  grade: 85.5,
  courses: ["Math", "Science"],
};

const filterData = (mixedData, type) => {
  return Object.keys(mixedData).filter((obj) => typeof mixedData[obj] === type);
};
console.log(filterData(mixedData, "string"));
console.log(filterData(mixedData, "number"));

// Q-4 : Write a JavaScript function to insert a string within a string at a particular position.

const originalStr = "Hello World ";
const stringToInsert = "beutiful";
const position = 6;

const result = (originalStr, stringToInsert, position) => {
  return (
    originalStr.slice(0, position) +
    stringToInsert +
    originalStr.slice(position)
  );
};
console.log(result(originalStr, stringToInsert, position));

//Q-5  find out the maximum date from the array

const dates = [
  new Date("2022-06-15"),
  new Date("2023-09-20"),
  new Date("2021-03-10"),
  new Date("2024-01-05"),
];

const maxDate = new Date(Math.max(...dates));
console.log(maxDate);

// Q-6  Write a JavaScript function to remove a specific character from a string.

const removeCharacter = (str, removeChar) => str.split(removeChar).join("");

console.log(removeCharacter("Hello, World!", ","));
console.log(removeCharacter("Hello, World!", "o"));

// Q-7 :  Write a JavaScript program to find the sum of all numbers in a nested array.

const nestedSum = (arr) => {
  return arr.flat(Infinity).reduce((sum, num) => sum + num, 0);
};

const nestedArray = [
  [1, 2],
  [3, [4, 5]],
  [6, [7, 8, [9]]],
];
console.log(nestedSum(nestedArray));

// Q-8 :Write a JavaScript function to capitalize the first letter of each word in a sentence.

const capitalizeWords = (sentence) => {
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(capitalizeWords("hello world"));

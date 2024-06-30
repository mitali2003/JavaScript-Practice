// Q-1 Given an array nums of size n, return the majority element.
// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const findMajoryElm = (nums) => {
  const count = nums.reduce((acc, input) => {
    if (!acc[input]) {
      acc[input] = 1;
    } else {
      acc[input]++;
    }
    return acc;
  }, {});
  const entries = Object.entries(count);
  const [majorityElement] = entries.reduce((maxPair, currentPair) => {
    return currentPair[1] > maxPair[1] ? currentPair : maxPair;
  });

  return majorityElement;
};

console.log(findMajoryElm([2, 2, 1, 1, 1, 2, 2, 1, 2]));
console.log(findMajoryElm([3, 2, 3]));
console.log(findMajoryElm([2, 2, 1, 1, 1, 2, 2]));

//Q-2 Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.

const fillArray = (start, end, step) => {
  let array = [];
  start = start.charCodeAt(0);
  end = end.charCodeAt(0);
  while (start <= end) {
    array.push(String.fromCharCode(start));
    start += step;
  }
  return array;
};
console.log(fillArray("a", "z", 3));

// Q-3
// you are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4]

let plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] != 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  return [1, ...digits];
};
console.log(plusOne([4, 3, 2, 1]));

//Q-4 convert roman to integer
// Input: s = "III";
// Output: 3;
// Explanation: III = 3;

var romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const values = [...s].map((char) => roman[char]);

  return values.reduce((result, currentValue, index, array) => {
    const nextValue = array[index + 1];
    if (nextValue && currentValue < nextValue) {
      return result - currentValue;
    } else {
      return result + currentValue;
    }
  }, 0);
};
console.log(romanToInt("III"));
console.log(romanToInt("IV"));

//Q-5
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

let isAnagram = function (s, t) {
  return s.split("").sort().join("") == t.split("").sort().join("");
};
console.log(isAnagram("anagram", "nagaram"));

// Q-6 Find the leap years from a given range of years
function findLeapYears(startYear, endYear) {
  return Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  ).filter((year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
}

const startYear = 2000;
const endYear = 2024;
console.log(
  "Leap years between",
  startYear,
  "and",
  endYear,
  "are:",
  findLeapYears(startYear, endYear)
);

//Q-7 Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"

let addBinary = function (a, b) {
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};
console.log(addBinary("11", "1"));

//Q-8 :
// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.

// Example 1:

// Input: nums = [10,2]
// Output: "210"

var largestNumber = function (nums) {
  let finalNums = nums
    .join("")
    .split("")
    .sort((x, y) => y - x);
  return finalNums.join("");
};
console.log(largestNumber([10, 2]));

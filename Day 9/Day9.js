// Q-1 : Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh”
// ans = “abcdefgh”

const uniqueChar = (str) => {
  const uniqueSet = new Set(str);
  const uniqueCharStr = [...uniqueSet].join("");
  return uniqueCharStr;
};

console.log(uniqueChar("abcdabcdefgggh"));

// Q-2 :Write a JavaScript function to generate a random number within a range (start,end)

const generateRandomNumber = (start, end) => {
  return Math.floor(Math.random() * (100 - 50)) + 50;
};
console.log(generateRandomNumber(50, 100));

// Q-3 : Write a JavaScript function that takes an object as input and returns a new object with the same properties, but with all property values converted to uppercase.

const upperCase = (obj) => {
  const upperCaseEntries = Object.entries(obj).map(([key, value]) => [
    key,
    value.toUpperCase(),
  ]);

  return Object.fromEntries(upperCaseEntries);
};
console.log(upperCase({ 1: "mitali", 2: "sakshi", 3: "jetun", 4: "kaushik" }));

// Q-4: Find the key with the maximum value in an object

const getMaxKey = (obj) => {
  return Object.keys(obj).reduce((maxKey, currentKey) => {
    return obj[maxKey] > obj[currentKey] ? maxKey : currentKey;
  }, "");
};

const obj = { a: 6, b: 10, c: 13, d: 45, e: 50 };
console.log(getMaxKey(obj));

//Q-5  :   Find the Common Elements in Three Arrays
const findCommonElements = (arr1, arr2, arr3) => {
  return arr1.filter((value) => arr2.includes(value) && arr3.includes(value));
};

console.log(findCommonElements([1, 2, 3], [2, 3, 4], [3, 4, 5]));

// Q-6  :
//iven an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
// Input: nums = [1, 1, 2];
// Output: [1,2]

let removeDuplicates = function (nums) {
  const res = [];
  nums.filter((el, idx) => {
    if (nums[idx] !== nums[idx + 1]) {
      res.push(el);
    } else {
      idx++;
    }
  });
  console.log(res);
};
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

// Q-7 :
// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.
// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.

const thirdDistinctNumber = (nums) => {
  const newArr = Array.from(new Set(nums));
  const sortedArr = newArr.sort((a, b) => b - a);
  if (nums.length < 3) {
    return sortedArr[0];
  } else {
    return sortedArr[2];
  }
};
console.log(thirdDistinctNumber([3, 2, 1]));
console.log(thirdDistinctNumber([1, 2]));
console.log(thirdDistinctNumber([2, 2, 3, 1]));
console.log(thirdDistinctNumber([3, 3, 4, 3, 4, 3, 0, 3, 3]));

// Q-8 : Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Input: nums = [2, 2, 1];
// Output: 1;

const removeElement = (arr) => {
  return arr.reduce((prev, next) => prev ^ next, 0);
};
console.log(removeElement([4, 1, 2, 1, 2]));
console.log(removeElement([2, 2, 1]));

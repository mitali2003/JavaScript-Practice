//Q-1 Given an sorted integer array nums. Return the missing integer that is not present in nums.

const findMissingElement = (arr) => {
  const missing = arr.find((el, index) => el + 1 !== arr[index + 1]);
  return missing !== undefined ? missing + 1 : arr[arr.length - 1] + 1;
};

console.log(findMissingElement([1, 2, 4, 5, 6]));

//Q-2 :
// Given two arrays of strings list1 and list2, find the common strings with the least index sum.

// A common string is a string that appeared in both list1 and list2.
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]

var findRestaurant = function (list1, list2) {
  let res = [];
  let leastIndex = 9999;

  list1.forEach((restaurant, i) => {
    const j = list2.indexOf(restaurant);

    if (j !== -1) {
      const indexSum = i + j;
      if (indexSum < leastIndex) {
        res = [restaurant];
        leastIndex = indexSum;
      } else if (indexSum === leastIndex) {
        res.push(restaurant);
      }
    }
  });

  return res;
};

const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
const list2 = [
  "Piatti",
  "The Grill at Torrey Pines",
  "Hungry Hunter Steakhouse",
  "Shogun",
];

console.log(findRestaurant(list1, list2));

//Q-3 : Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.

const sumOfDigits = (digits) => {
  return digits
    .toString()
    .split("")
    .reduce((prev, next) => prev + parseInt(next), 0);
};
console.log(sumOfDigits(52));

//Q-4 : Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1

const findPosition = (nums, target) => {
  const index = nums.findIndex((el) => el >= target);
  return index !== -1 ? index : nums.length;
};

console.log(findPosition([1, 3, 5, 6], 2));

//Q-5 : You are given a string s.
// Your task is to remove all digits by doing this operation repeatedly:
// Input: s = "abc"
// Output: "abc"
// Explanation:
// There is no digit in the string.
// Example 2:
// Input: s = "cb34"
// Output: "cb"

const clearDigits = (s) => {
  const stack = s
    .split("")
    .filter((char) => isNaN(char))
    .reduce((stack, char) => {
      if (char === "#") {
        stack.pop();
      } else {
        stack.push(char);
      }
      return stack;
    }, []);

  return stack.join("");
};

console.log(clearDigits("cb34"));

//Q-6 : Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays.

const mergedArray = (...arrays) => {
  let result = [];
  arrays.forEach((arr) => {
    result.push(...arr);
  });
  return result;
};
console.log(mergedArray([1, 2], [7, 8], [true, false], ["a", "b"]));

//Q-7 : Rearrange Array with Missing Elements
const rearrangeArray = (arr) => {
  return Array.from({ length: arr.length }, (_, index) => {
    return arr.includes(index) ? index : -1;
  });
};

console.log(rearrangeArray([0, -1, -1, 2, 3, 6, -1, 7]));

//Q-8 Callback Function for Array Element Check

const arr = [1, 2, 3, 4, 5];
const element = 3;

const success = () => {
  console.log("Element found");
};

const failure = () => {
  console.log("Element not found");
};

const checkArrayElement = (arr, element, callback) => {
  if (arr.includes(element)) {
    callback(success);
  } else {
    callback(failure);
  }
};

checkArrayElement(arr, element, (callback) => {
  callback();
});

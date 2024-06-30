// Q-1 :
//  Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// Example 1:

// Input: s = "ab", goal = "ba"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
// Example 2:

// Input: s = "ab", goal = "ab"
// Output: false
// Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
// Example 3:

// Input: s = "aa", goal = "aa"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.

const buddyStrings = (a, b) => {
  if (a.length != b.length) return false;
  const res = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) res.push(i);
    if (res.length > 2) return false;
  }
  if (!res.length) return a.length != new Set(a).size;
  const [i, j] = res;
  return a[i] == b[j] && b[i] == a[j];
};
console.log(buddyStrings("aaaaaaapbc", "aaaaaaapcb"));

//Q-2 : you are given an array nums of integers, where nums[i] represents the height of a mountain at index i. A peak is defined as an element that is strictly greater than its neighbors.
const countPeaks = (nums) => {
  const peaks = nums.filter((num, i) => {
    return (
      i > 0 && i < nums.length - 1 && num > nums[i - 1] && num > nums[i + 1]
    );
  });

  return peaks.length;
};
console.log(countPeaks([1, 3, 2, 4, 1, 5, 6]));
console.log(countPeaks([5, 4, 3, 2, 1]));
console.log(countPeaks([1, 2, 3, 4, 5]));
console.log(countPeaks([1, 2, 1, 2, 1]));

//Q-3 :
// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Example 2:
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// Example 3:
// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

function wordPattern(pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) {
    return false;
  }

  const charToWord = {};
  const wordToChar = {};

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];
    if (charToWord[char]) {
      if (charToWord[char] !== word) {
        return false;
      }
    } else {
      charToWord[char] = word;
    }

    if (wordToChar[word]) {
      if (wordToChar[word] !== char) {
        return false;
      }
    } else {
      wordToChar[word] = char;
    }
  }

  return true;
}
const pattern1 = "abba";
const s1 = "dog cat cat dog";
console.log(wordPattern(pattern1, s1));

const pattern2 = "abba";
const s2 = "dog cat cat fish";
console.log(wordPattern(pattern2, s2));

const pattern3 = "aaaa";
const s3 = "dog cat cat dog";
console.log(wordPattern(pattern3, s3));

//Q-4 :
// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:  643

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

const findMaxAverage = (nums, k) => {
  let maxSum = nums.slice(0, k).reduce((acc, val) => acc + val, 0);
  let currentSum = maxSum;
  nums.slice(k).map((val, idx) => {
    currentSum += val - nums[idx];
    maxSum = Math.max(maxSum, currentSum);
  });

  return maxSum / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));

//Q-5:  674
// Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.
// Example 1:

// Input: nums = [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
// Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element
// 4.
// Example 2:

// Input: nums = [2,2,2,2,2]
// Output: 1
// Explanation: The longest continuous increasing subsequence is [2] with length 1. Note that it must be strictly
// increasing.

const findLengthOfLCIS = (nums) => {
  if (nums.length === 0) return 0;

  let maxLength = 1;
  let currentLength = 1;

  nums.reduce((prev, curr) => {
    if (curr > prev) {
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      currentLength = 1;
    }
    return curr;
  });

  return maxLength;
};
console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));

//Q-6 :  507
// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

// Given an integer n, return true if n is a perfect number, otherwise return false.

// Example 1:

// Input: num = 28
// Output: true
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// 1, 2, 4, 7, and 14 are all divisors of 28.
// Example 2:

// Input: num = 7
// Output: false

const findPerfectNum = (num) => {
  const arr = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      arr.push(i);
      if (i !== 1 && i !== num / i) {
        arr.push(num / i);
      }
    }
  }
  const sum = arr.reduce((prev, next) => prev + next, 0);
  return sum === num;
};

console.log(findPerfectNum(14));
console.log(findPerfectNum(28));

//Q-7 :
// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.

// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

// Example 1:

// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.
// Example 2:

// Input: ops = ["5","-2","4","C","D","9","+","+"]
// Output: 27
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "-2" - Add -2 to the record, record is now [5, -2].
// "4" - Add 4 to the record, record is now [5, -2, 4].
// "C" - Invalidate and remove the previous score, record is now [5, -2].
// "D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
// "9" - Add 9 to the record, record is now [5, -2, -4, 9].
// "+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
// "+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
// The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.
// Example 3:

// Input: ops = ["1","C"]
// Output: 0
// Explanation:
// "1" - Add 1 to the record, record is now [1].
// "C" - Invalidate and remove the previous score, record is now [].
// Since the record is empty, the total sum is 0.

const baseballScore = (ops) => {
  const arr = [];
  ops.forEach((op) => {
    switch (op) {
      case "D":
        arr.push(arr[arr.length - 1] * 2);
        break;
      case "C":
        arr.pop();
        break;
      case "+":
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        break;
      default:
        arr.push(parseInt(op));
    }
  });
  return arr.reduce((prev, curr) => prev + curr, 0);
};

console.log(baseballScore(["1", "C"]));
console.log(baseballScore(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(baseballScore(["5", "2", "C", "D", "+"]));

//Q-8:
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

const flowered = (arr, n) => {
  let count = 0;

  arr.forEach((plot, i) => {
    if (plot === 0) {
      const left_empty = i === 0 || arr[i - 1] === 0;
      const right_empty = i === arr.length - 1 || arr[i + 1] === 0;

      if (left_empty && right_empty) {
        arr[i] = 1;
        count++;
      }
    }
  });

  return count >= n;
};

console.log(flowered([1, 0, 0, 0, 1], 1));
console.log(flowered([1, 0, 0, 0, 1], 2));

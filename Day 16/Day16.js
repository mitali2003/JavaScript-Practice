//Q-1 :
// Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

// A substring is a contiguous sequence of characters within a string

// Example 1:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.
// Example 2:

// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".
// Example 3:

// Input: words = ["blue","green","bu"]
// Output: []
// Explanation: No string of words is substring of another string.

const findSubstrings = (words) => {
  return words.filter((word) =>
    words.some((other) => other !== word && other.includes(word))
  );
};

console.log(findSubstrings(["mass", "as", "hero", "superhero"]));
console.log(findSubstrings(["leetcode", "et", "code"]));
console.log(findSubstrings(["blue", "green", "bu"]));

// //Q-2  :
// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
// Example 2:

// Input: s = "abc", indices = [0,1,2]
// Output: "abc"
// Explanation: After shuffling, each character remains in its position.

const restoreString = (s, indices) => {
  return indices
    .map((indice, i) => [indices[i], s[i]])
    .sort((a, b) => a[0] - b[0])
    .map((el) => el[1])
    .join("");
};
console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
console.log(restoreString("abc", [0, 1, 2]));

// //Q-3
// The value of an alphanumeric string can be defined as:

// The numeric representation of the string in base 10, if it comprises of digits only.
// The length of the string, otherwise.
// Given an array strs of alphanumeric strings, return the maximum value of any string in strs.

// Example 1:

// Input: strs = ["alic3","bob","3","4","00000"]
// Output: 5
// Explanation:
// - "alic3" consists of both letters and digits, so its value is its length, i.e. 5.
// - "bob" consists only of letters, so its value is also its length, i.e. 3.
// - "3" consists only of digits, so its value is its numeric equivalent, i.e. 3.
// - "4" also consists only of digits, so its value is 4.
// - "00000" consists only of digits, so its value is 0.
// Hence, the maximum value is 5, of "alic3".
// Example 2:

// Input: strs = ["1","01","001","0001"]
// Output: 1
// Explanation:
// Each string in the array has value 1. Hence, we return 1.

const maxStringValue = (strs) => {
  const values = strs.map((str) => {
    if (/^\d+$/.test(str)) {
      return parseInt(str, 10);
    }

    return str.length;
  });
  return Math.max(...values);
};
console.log(maxStringValue(["alic3", "bob", "3", "4", "00000"]));
console.log(maxStringValue(["1", "01", "001", "0001"]));

//Q-4:
// You are given a 0-indexed array of string words and two integers left and right.

// A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.

// Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].

// Example 1:

// Input: words = ["are","amy","u"], left = 0, right = 2
// Output: 2
// Explanation:
// - "are" is a vowel string because it starts with 'a' and ends with 'e'.
// - "amy" is not a vowel string because it does not end with a vowel.
// - "u" is a vowel string because it starts with 'u' and ends with 'u'.
// The number of vowel strings in the mentioned range is 2.
// Example 2:

// Input: words = ["hey","aeo","mu","ooo","artro"], left = 1, right = 4
// Output: 3
// Explanation:
// - "aeo" is a vowel string because it starts with 'a' and ends with 'o'.
// - "mu" is not a vowel string because it does not start with a vowel.
// - "ooo" is a vowel string because it starts with 'o' and ends with 'o'.
// - "artro" is a vowel string because it starts with 'a' and ends with 'o'.
// The number of vowel strings in the mentioned range is 3.

// const findVowel = (words, left, right) => {
//   const vowel = ['a', 'e', 'i', 'o', 'u'];
//   const abc = words.map((word) => );
// };
// console.log(findVowel(['are', 'amy', 'u'], 0, 2));

const findVowelStrings = (words, left, right) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const subarray = words.slice(left, right + 1);
  const vowelStringsCount = subarray.filter(
    (word) => vowels.includes(word[0]) && vowels.includes(word[word.length - 1])
  ).length;

  return vowelStringsCount;
};

console.log(findVowelStrings(["are", "amy", "u"], 0, 2));
console.log(findVowelStrings(["hey", "aeo", "mu", "ooo", "artro"], 1, 4));

//Q-5:
// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

// Example 1:

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
// Example 2:

// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.
// Example 3:

// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.

const countConsistentStrings = (allowed, words) => {
  const allowedSet = new Set(allowed);
  const isConsistent = (word) => {
    return [...word].every((char) => allowedSet.has(char));
  };
  return words.filter(isConsistent).length;
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
console.log(
  countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
);
console.log(
  countConsistentStrings("cad", [
    "cc",
    "acd",
    "b",
    "ba",
    "bac",
    "bad",
    "ac",
    "d",
  ])
);

//Q-6 :
// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

// Example 1:

// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.
// Example 2:

// Input: words = ["notapalindrome","racecar"]
// Output: "racecar"
// Explanation: The first and only string that is palindromic is "racecar".
// Example 3:

// Input: words = ["def","ghi"]
// Output: ""
// Explanation: There are no palindromic strings, so the empty string is returned.

const findPalindromString = (words) => {
  return words.find((word) =>
    word === word.split("").reverse().join("") ? word : ""
  );
};
console.log(findPalindromString(["abc", "car", "ada", "racecar", "cool"]));
console.log(findPalindromString(["notapalindrome", "racecar"]));
console.log(findPalindromString(["def", "ghi"]));

//Q-7 :
// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.
// Example 2:

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".
// Example 3:

// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.

const expect = (val) => {
  return {
    toBe: (val1) => {
      if (val === val1) {
        return true;
      } else throw new Error("Not Equal");
    },

    notToBe: (val1) => {
      if (val !== val1) {
        return true;
      } else throw new Error("Equal");
    },
  };
};
console.log(expect(5).toBe(5));
// console.log(expect(5).notToBe(5));

//Q-8 :
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

// Example 1:

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
// Example 2:

let createCounter = (init) => {
  let n = init;
  function increment() {
    return ++n;
  }
  function decrement() {
    return --n;
  }
  function reset() {
    return (n = init);
  }
  return { increment, decrement, reset };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());

// Reverse a String
// Input: "javascript" → Output: "tpircsavaj"

const reverseString = (str) => {
  //   return str.split("").reverse().join("");
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
};
console.log(reverseString("javascript"));

// Check if a String is a Palindrome
// Input: "racecar" → Output: Palindrome

const isPalindrome = (str) => {
  //   return str === str.split("").reverse().join("")
  //     ? "Palindrom"
  //     : "Not Palindrome";
  const reverseStr = reverseString(str);
  return reverseStr === str ? "Palindrome" : "Not Palindrome";
};
console.log(isPalindrome("racecar"));

// Count Frequency of Each Character
// Input: "banana" → Output: { b:1, a:3, n:2 }

const countFreq = (str) => {
  return str.split("").reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 0;
    }
    acc[curr]++;
    return acc;
  }, {});
};
console.log(countFreq("banana"));

// Find the Most Frequent Character
// Input: "success" → Output: Most frequent: s (3 times)

const mostFreq = (str) => {
  return Object.entries(countFreq(str)).sort((a, b) => b[1] - a[1])[0][0];
};
console.log(mostFreq("success"));

// Check if Two Strings Are Anagrams
// Input: "listen", "silent" → Output: Anagram

const isAnagram = (str1, str2) => {
  if (
    str1.length === str2.length &&
    str1.split("").sort().join("") === str2.split("").sort().join("")
  ) {
    return "Anangram";
  }
  return "Not Anangram";
};
console.log(isAnagram("listen", "silent"));
// Find the First Non-Repeating Character
// Input: "aabbcddeff" → Output: c

const firstNonrepeating = (str) => {
  return Object.entries(countFreq(str)).sort((a, b) => a[1] - b[1])[0][0];
};
console.log(firstNonrepeating("aabbcddeff"));

// Remove All Duplicate Characters
// Input: "programming" → Output: "progamin"

const removeDuplicate = (str) => {
  return [...new Set(str.split(""))].join("");
};
console.log(removeDuplicate("programming"));

// Check if String Contains Only Alphabets
// Input: "HelloWorld123" → Output: False

const isAlphanet = (str) => {
  return str
    .toUpperCase()
    .split("")
    .every((el) => el.charCodeAt() >= 65 && el.charCodeAt() <= 90);
};
console.log(isAlphanet("HelloWorld12"));

// Reverse Words in a Sentence
// Input: "I love coding" → Output: "coding love I"

const reverseWord = (sentence) => {
  return sentence.split(" ").reverse().join(" ");
};
console.log(reverseWord("I love coding"));

// Find the Longest Word in a Sentence
// Input: "coding is beautiful" → Output: "beautiful"

const findLongestWord = (sentence) =>
  sentence.split(" ").sort((a, b) => b.length - a.length)[0];

console.log(findLongestWord("coding is beautiful"));

// Count the Number of Words
// Input: " hi there world " → Output: 3 words

const countWord = (sentence) => {
  return sentence.trim().split(" ").length;
};
console.log(countWord(" hi there world "));

// Find All Substrings of a String
// Input: "abc" → Output: a, ab, abc, b, bc, c

const findSubString = (str) => {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
};

// Compress a String
// Input: "aaabbccccd" → Output: "a3b2c4d1"

const compressString = (str) => {
  let ans = "";
  const frq = Object.entries(countFreq(str));
  frq.forEach(([key, value]) => {
    ans += key + value;
  });
  return ans;
};
console.log(compressString("aaabbccccd"));

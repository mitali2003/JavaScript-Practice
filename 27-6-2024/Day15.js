// Q-1 :
// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

// Example 1:

// Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
// Output: 2
// Explanation:
// - "leetcode" appears exactly once in each of the two arrays. We count this string.
// - "amazing" appears exactly once in each of the two arrays. We count this string.
// - "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
// - "as" appears once in words1, but does not appear in words2. We do not count this string.
// Thus, there are 2 strings that appear exactly once in each of the two arrays.
// Example 2:

// Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
// Output: 0
// Explanation: There are no strings that appear in each of the two arrays.
// Example 3:

// Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
// Output: 1
// Explanation: The only string that appears exactly once in each of the two arrays is "ab".

const uniqueString = (word1, word2) => {
  const countWord1 = word1.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 0;
    }
    acc[curr]++;
    return acc;
  }, {});
  const countWord2 = word2.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 0;
    }
    acc[curr]++;
    return acc;
  }, {});

  return Object.keys(countWord1).filter(
    (word) => countWord1[word] === 1 && countWord2[word] === 1
  ).length;
};

console.log(
  uniqueString(
    ["leetcode", "is", "amazing", "as", "is"],
    ["amazing", "leetcode", "is"]
  )
);
console.log(uniqueString(["a", "ab"], ["a", "a", "a", "ab"]));
console.log(uniqueString(["b", "bb", "bbb"], ["a", "aa", "aaa"]));

//Q-2 :
// A distinct string is a string that is present only once in an array.

// Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

// Note that the strings are considered in the order in which they appear in the array.

// Example 1:

// Input: arr = ["d","b","c","b","c","a"], k = 2
// Output: "a"
// Explanation:
// The only distinct strings in arr are "d" and "a".
// "d" appears 1st, so it is the 1st distinct string.
// "a" appears 2nd, so it is the 2nd distinct string.
// Since k == 2, "a" is returned.
// Example 2:

// Input: arr = ["aaa","aa","a"], k = 1
// Output: "aaa"
// Explanation:
// All strings in arr are distinct, so the 1st string "aaa" is returned.
// Example 3:

// Input: arr = ["a","b","a"], k = 3
// Output: ""
// Explanation:
// The only distinct string is "b". Since there are fewer than 3 distinct strings, we return an empty string "".

const distinctString = (arr, k) => {
  const countMap = arr.reduce((acc, word) => {
    if (!acc[word]) {
      acc[word] = 0;
    }
    acc[word]++;
    return acc;
  }, {});

  const distinctStrings = arr.filter((word) => countMap[word] === 1);
  if (k > distinctStrings.length) {
    return "";
  }
  return distinctStrings[k - 1];
};
console.log(distinctString(["aaa", "aa", "a"], 1));
console.log(distinctString(["a", "b", "a"], 3));
console.log(distinctString(["d", "b", "c", "b", "c", "a"], 2));

//Q-3:
// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

// Example 1:

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.
// Example 2:

// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false
// Example 3:

// Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
// Output: true

const isSame = (word1, word2) => {
  const str1 = word1.join("");
  const str2 = word2.join("");
  return str1 === str2 ? true : false;
};
console.log(isSame(["a", "cb"], ["ab", "c"]));
console.log(isSame(["ab", "c"], ["a", "bc"]));

//Q-4: 2828
// Given an array of strings words and a string s, determine if s is an acronym of words.

// The string s is considered an acronym of words if it can be formed by concatenating the first character of each string in words in order. For example, "ab" can be formed from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"].

// Return true if s is an acronym of words, and false otherwise.

// Example 1:

// Input: words = ["alice","bob","charlie"], s = "abc"
// Output: true
// Explanation: The first character in the words "alice", "bob", and "charlie" are 'a', 'b', and 'c', respectively. Hence, s = "abc" is the acronym.
// Example 2:

// Input: words = ["an","apple"], s = "a"
// Output: false
// Explanation: The first character in the words "an" and "apple" are 'a' and 'a', respectively.
// The acronym formed by concatenating these characters is "aa".
// Hence, s = "a" is not the acronym.
// Example 3:

// Input: words = ["never","gonna","give","up","on","you"], s = "ngguoy"
// Output: true
// Explanation: By concatenating the first character of the words in the array, we get the string "ngguoy".
// Hence, s = "ngguoy" is the acronym.

const isAcronym = (words, s) => {
  const findFirstElm = Array.from(words, (word) => word[0]).join("");
  return findFirstElm === s;
};
console.log(isAcronym(["alice", "bob", "charie"], "abc"));
console.log(isAcronym(["never", "gonna", "give", "up", "on", "you"], "ngguoy"));
console.log(isAcronym(["an", "apple"], "a"));

// //Q-5 : 1436
// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

// Example 1:

// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo"
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
// Example 2:

// Input: paths = [["B","C"],["D","B"],["C","A"]]
// Output: "A"
// Explanation: All possible trips are:
// "D" -> "B" -> "C" -> "A".
// "B" -> "C" -> "A".
// "C" -> "A".
// "A".
// Clearly the destination city is "A".
// Example 3:

// Input: paths = [["A","Z"]]
// Output: "Z"

const destCity = (paths) => {
  const outGoingCities = new Set(paths.map((path) => path[0]));
  const destination = paths
    .map((path) => path[1])
    .filter((city) => !outGoingCities.has(city));

  return destination[0];
};
console.log(
  destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ])
);
console.log(
  destCity([
    ["B", "C"],
    ["D", "B"],
    ["C", "A"],
  ])
);

console.log(destCity([["A", "Z"]]));

//Q-6 :  create a array of 100 element wthout using for loop
const generateNumber = () => {
  return Array.from({ length: 100 }, (_, idx) => idx);
};
console.log(generateNumber());

//Q-7 :
// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.

// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:

// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

const sumOfLengthsOfGoodStrings = (words, chars) => {
  const charCount = chars.split("").reduce((acc, char) => {
    if (!acc[char]) {
      acc[char] = 0;
    }
    acc[char]++;
    return acc;
  }, {});

  return words.reduce((sum, word) => {
    const wordCount = word.split("").reduce((acc, char) => {
      if (!acc[char]) {
        acc[char] = 0;
      }
      acc[char]++;
      return acc;
    }, {});

    word.split("").every((char) => wordCount[char] <= (charCount[char] || 0))
      ? sum + word.length
      : sum;
  }, 0);
};

console.log(sumOfLengthsOfGoodStrings(["cat", "bt", "hat", "tree"], "atach"));
console.log(
  sumOfLengthsOfGoodStrings(["hello", "world", "leetcode"], "welldonehoneyr")
);

//Q-8  :
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

// Example 1:

// Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// Output: 6
// Explanation:
// - The first sentence, "alice and bob love leetcode", has 5 words in total.
// - The second sentence, "i think so too", has 4 words in total.
// - The third sentence, "this is great thanks very much", has 6 words in total.
// Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.
// Example 2:

// Input: sentences = ["please wait", "continue to fight", "continue to win"]
// Output: 3
// Explanation: It is possible that multiple sentences contain the same number of words.
// In this example, the second and third sentences (underlined) have the same number of words.

const findMaxLengthWord = (sentences) => {
  const words = sentences.map((sent) => sent.split(" ").length);
  return Math.max(...words);
};
console.log(
  findMaxLengthWord([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
console.log(
  findMaxLengthWord(["please wait", "continue to fight", "continue to win"])
);

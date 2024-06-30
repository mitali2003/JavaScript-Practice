// Q-1 : You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Input: prices = [7,6,4,3,1]
// Output: 0

const findMaxProfit = (prices) => {
  let buy_price = prices[0];
  let profit = 0;

  prices.forEach((price, index) => {
    if (index === 0) return;
    if (price < buy_price) {
      buy_price = price;
    } else {
      let curr_price = price - buy_price;
      profit = Math.max(curr_price, profit);
    }
  });

  return profit;
};

console.log(findMaxProfit([7, 1, 5, 3, 6, 4]));

//Q-2 :  Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Input: nums = [1,3,5,6], target = 7
// Output: 4

let searchInsert = (nums, target) => {
  if (nums.includes(target)) return nums.indexOf(target);
  return [...nums, target].sort((a, b) => a - b).indexOf(target);
};
console.log(searchInsert([1, 3, 5, 6], 7));

//Q-3 : Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

// Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"
// Explanation:
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"),
// and that "hit" isn't the answer even though it occurs more because it is banned.

const mostFreqWord = (para, banned) => {
  const formattedWords = para.toLowerCase().replace(/[^\w\s]/g, " ");
  let words = formattedWords.split(" ").filter((word) => word !== banned);
  const res = words.reduce((acc, word) => {
    if (word) {
      acc[word] = (acc[word] || 0) + 1;
    }
    return acc;
  }, {});

  return Object.keys(res).reduce((maxWord, word) => {
    if (res[word] > res[maxWord]) {
      return word;
    } else {
      return maxWord;
    }
  }, Object.keys(res)[0]);
};

console.log(
  mostFreqWord("Bob hit a ball, the hit BALL flew far after it was hit.", "hit")
);

//Q_4 :
// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

const findCommonChar = (words) => {
  const splitWords = words.map((word) => word.split(""));

  return splitWords[0].reduce((commonChars, char) => {
    if (splitWords.every((word) => word.includes(char))) {
      commonChars.push(char);

      splitWords.forEach((word) => {
        word.splice(word.indexOf(char), 1);
      });
    }
    return commonChars;
  }, []);
};

console.log(findCommonChar(["bella", "label", "roller"]));
console.log(findCommonChar(["cool", "lock", "cook"]));

//Q-5:Given an array of strings words and a character separator, split each string in words by separator.
// Input: (words = ["one.two.three", "four.five", "six"]), (separator = ".");
// Output: ["one", "two", "three", "four", "five", "six"];

// Example 2:

// Input: words = ["$easy$","$problem$"], separator = "$"
// Output: ["easy","problem"]

const splitWordsBySeparator = (words, seperator) => {
  return words
    .join(seperator)
    .split(seperator)
    .filter((val) => val !== "");
};
console.log(splitWordsBySeparator(["one.two.three", "four.five", "six"], "."));
console.log(splitWordsBySeparator(["$easy$", "$problem$"], "$"));
console.log(splitWordsBySeparator(["|||"], "|"));

//Q-6 :
// You are given a 0-indexed array of strings details. Each element of details provides information about a given passenger compressed into a string of length 15. The system is such that:

// The first ten characters consist of the phone number of passengers.
// The next character denotes the gender of the person.
// The following two characters are used to indicate the age of the person.
// The last two characters determine the seat allotted to that person.
// Return the number of passengers who are strictly more than 60 years old.
// Example 1:

// Input: details = ["7868190130M7522","5303914400F9211","9273338290F4010"]
// Output: 2
// Explanation: The passengers at indices 0, 1, and 2 have ages 75, 92, and 40. Thus, there are 2 people who are over 60 years old.
// Example 2:

// Input: details = ["1313579440F2036","2921522980M5644"]
// Output: 0
// Explanation: None of the passengers are older than 60.

const findPasengers = (passengers) => {
  const findAge = passengers.map((passenger) => passenger.slice(11, 13));
  return findAge.filter((age) => age > 60).length;
};
console.log(
  findPasengers(["7868190130M7522", "5303914400F9211", "9273338290F4010"])
);
console.log(findPasengers(["1313579440F2036", "2921522980M5644"]));

//Q-7 : You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
// Example 1:

// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.
// Example 2:

// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

const sortAccordingHeight = (names, heights) => {
  const combinedArray = names.map((name, idx) => {
    return {
      name: name,
      height: heights[idx],
    };
  });
  const sortedArray = combinedArray.sort((a, b) => a.height - b.height);
  return sortedArray.map((arr) => arr.name);
};

console.log(sortAccordingHeight(["Mary", "John", "Emma"], [180, 165, 170]));
console.log(sortAccordingHeight(["Alice", "Bob", "Bob"], [155, 185, 150]));

//Q-8  :
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

const findSustring = (words) => {
  return words.filter((word) =>
    words.some((otherword) => otherword !== word && otherword.includes(word))
  );
};
console.log(findSustring(["mass", "as", "hero", "superhero"]));
console.log(findSustring(["leetcode", "et", "code"]));
console.log(findSustring(["blue", "green", "bu"]));

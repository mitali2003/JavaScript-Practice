//Q-1  :Write a function to convert a number to its binary representation.

const toBinary = (num) => {
  return num.toString(2);
};
console.log(toBinary(2));

//Q-2 : Write a function to convert a snake_case string to camelCase.

function snakeToCamel(str) {
  return str.replace(/(_\w)/g, (match) => match[1].toUpperCase());
}
console.log(snakeToCamel("snake_case"));

//Q-3 : Write a function to generate a random string of a given length.

const generateRandomString = (length) => {
  let allString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return Array.from({ length }, () =>
    allString.charAt(Math.floor(Math.random() * allString.length))
  ).join("");
};

console.log(generateRandomString(5));

//Q-4 :  Write a function to find the GCD (Greatest Common Divisor) of two numbers.
const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};
console.log(gcd(5, 2));

//Q-5 : Write a function to check if two strings are permutations of each other.
const arePermutations = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};

console.log(arePermutations("abc", "xyz"));

//Q-6 :Write a function to convert a binary string to its decimal representation.
const toDecimal = (binaryStr) => {
  return parseInt(binaryStr, 2);
};

console.log(toDecimal("10"));

//Q-7 : Write a function to generate an array of unique random numbers of a given length.

const generateRandomArray = (num, length) => {
  const arr = new Set();
  while (arr.size < num) {
    arr.add(Math.floor(Math.random() * length));
  }
  return Array.from(arr);
};
console.log(generateRandomArray(5, 100));

//Q-8 : Write a function to check if a given number is prime.
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log(isPrime(11));

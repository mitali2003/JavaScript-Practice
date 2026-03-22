// [2,4,6,5] -> 5642

const reverseData = (arr) => {
  //   return Number(arr.reverse().join(""));
  // 2 * 10^0 = 2
  // 4 * 10^1 = 40
  // 6 * 10^2 = 600
  // 5* 10^3 = 5000
  return arr.reduce((acc, curr, i) => acc + curr * Math.pow(10, i), 0);
};
console.log(reverseData([2, 4, 6, 5]));
console.log(reverseData([3, 5, 6, 7, 8, 9]));

//1. split Number into digit  N=12345 o/p = [1,2,3,4,5]
const splitNum = (n) => {
  const ans = [];
  while (n > 0) {
    ans.unshift(n % 10);
    n = Math.floor(n / 10);
  }
  return ans;
};
console.log(splitNum(12345));

//2.reverse a number N=1234 o/p = 4321 using % and /
const reverseNum = (n) => {
  const num = [];
  while (n > 0) {
    num.push(n % 10);
    n = Math.floor(n / 10);
  }
  return +num.join("");
};
console.log(reverseNum(1234));

//3. Remove the Decimal Point Mathematically
// Input: N = 12.34
// Output: 1234
// ✨ Do not use string operations.

const removeDecimal = (num) => {
  let temp = num;
  while (temp % 1 !== 0) {
    temp *= 10;
  }
  return temp;
};

console.log(removeDecimal(12.34)); // 1234

//4. Separate Whole and Fractional Parts of a Number
// Input: N = 5.75
// Output: Whole = 5, Fraction = 0.75
// ✨ Use mathematical logic to separate the integer and fractional portions without using built-in functions. Don't use Math.trunc() or Math.floor() method.

const parts = (n) => {};
console.log(parts(5.75));

//5. Generate a Decimal Number from Whole and Fractional Digits
// Input: Whole = [1, 2], Fraction = [3, 4]
// Output: 12.34
// ✨ Form the number mathematically by combining the digits from both arrays using powers of 10.

const decimalNum = (whole, fraction) => {};
console.log(decimalNum([1, 2], [3, 4]));

//6. Check if a Number is a Palindrome
// Input: N = 121
// Output: Palindrome
// ✨ Compares original and reversed numbers to detect symmetry.

const isPalindrome = (num) => {
  const currVal = num;
  const reverse = [];
  while (num > 0) {
    reverse.push(num % 10);
    num = Math.floor(num / 10);
  }
  return reverse.join("") == currVal;
};
console.log(isPalindrome(10));

//7. Check if a Number is an Armstrong Number (also called a Narcissistic Number)
// Input: N = 153
// Output: Armstrong Number
// ✨ Armstrong Number: 1³ + 5³ + 3³ = 153, 1⁴ + 6⁴ + 3⁴ + 4⁴ = 1634.

const isArmstrong = (n) => {
  const arr = n.toString().split("");
  return (
    arr.reduce((acc, curr) => {
      return acc + Math.pow(+curr, arr.length);
    }, 0) === n
  );
};
console.log(isArmstrong(153));
console.log(isArmstrong(1634));

//8. Find the Sum of Digits
// Input: N = 987
// Output: 24
// ✨ Builds understanding of digit extraction and accumulation.

const sum = (n) => {
  const arr = n.toString().split("");
  // return n
  //   .toString()
  //   .split("")
  //   .reduce((acc, curr) => acc + +curr, 0);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  return sum;
};
console.log(sum(234));

//9. Find the Average of Digits
// Input: N = 4567
// Output: Average = 5.5
// ✨ Combines digit sum and count for average computation.

const findAvg = (n) => {
  const arr = n.toString().split("");
  return arr.reduce((acc, curr) => acc + +curr, 0) / arr.length;
};
console.log(findAvg(4567));

//10. Find the Largest and Smallest Digit in a Number

// Input: N = 9483
// Output: Largest = 9, Smallest = 3
// ✨ Enhances comparison logic using loops.

const findLargest = (n) => {
  const arr = n.toString().split("");
  // return { largest: Math.max(...arr), smallest: Math.min(...arr) };
  let largest = arr[0];
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }

    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return { largest, smallest };
};
console.log(findLargest(21486350));

//11. Check if a Number is a Strong Number
// Input: N = 145
// Output: Strong Number
// ✨ Applies factorial of each digit and sums them: 1! + 4! + 5! = 145.

const isStrong = (n) => {
  const fac = (num) => {
    if (num == 0 || num == 1) {
      return 1;
    }
    return num * fac(num - 1);
  };
  const sumOfNum = n
    .toString()
    .split("")
    .reduce((acc, curr) => acc + fac(curr), 0);
  return sumOfNum === n;
};
// console.log(isStrong(145));
// console.log(isStrong(23));

//12. Check if a Number is an Automorphic Number
// Input: N = 25
// Output: Automorphic Number (since 25² = 625 ends with 25)
// ✨ Practices modulus-based pattern matching.

const isAutomorphic = (n) => {
  const sqaure = n * n;
};
console.log(isAutomorphic(25));

//13. Find the Frequency of Each Digit
// Input: N = 112233
// Output: 1 → 2, 2 → 2, 3 → 2
// ✨ Combines loops and conditionals for counting repetitions.

const findFreq = (num) =>
  num
    .toString()
    .split("")
    .reduce((acc, curr) => {
      if (acc[curr]) {
        acc[curr].push(count++);
      }
      acc[curr].push({ key: acc[curr], count: 0 });
      return acc;
    }, []);

// console.log(findFreq(112233));

//14. Check if a Number is a Harshad Number
// Input: N = 18
// Output: Harshad Number (since 18 is divisible by 1 + 8 = 9)
// ✨ Applies divisibility and digit-sum logic together.

const isHarshedNum = (n) => {
  const sumOfNum = n
    .toString()
    .split("")
    .reduce((acc, curr) => acc + +curr, 0);
  return n % sumOfNum === 0 ? "true" : "false";
};
// console.log(isHarshedNum(22));
// console.log(isHarshedNum(18));
// console.log(isHarshedNum(1729));

// ==================================================
// 1. FIND THE PRIME FACTORIZATION (RETURN AS AN ARRAY)
// ==================================================
// Input: N = 84
// Output: [2, 2, 3, 7]

const primeFactorizable = (num) => {
  const output = [];
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      output.push(i);
      num = num / i;
    }
  }
  return output;
};
console.log(primeFactorizable(84));
console.log(primeFactorizable(24));
console.log(primeFactorizable(21));

// ==================================================
// 2. FACTORIZATION IN EXPONENT FORM
// ==================================================
// Input: N = 360
// Output: "2^3 × 3^2 × 5^1"

const factorizeInExponentForm = (num) => {
  const output = [];
  for (let i = 2; i <= num; i++) {
    let expo = 0;
    while (num % i === 0) {
      expo++;
      num = num / i;
    }

    if (expo > 0) {
      output.push(`${i}^${expo}`);
    }
  }
  return output;
};
console.log(factorizeInExponentForm(360));

// ==================================================
// 3. DISTINCT PRIME FACTOR COUNT
// ==================================================
// Input: N = 100
// Output: Distinct Prime Factors = 2
// (Because 100 → 2, 5)

const DistinctPrimeFactor = (num) => {
  const output = [];
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      if (!output.includes(i)) {
        output.push(i);
      }
      num = num / i;
    }
  }
  return output;
};
console.log(DistinctPrimeFactor(100));

// ==================================================2
// 4. CHECK IF A NUMBER IS A POWERFUL NUMBER
// ==================================================
// A number is powerful if every prime factor
// appears with an exponent ≥ 2.
//
// Input: N = 36
// Output: Powerful Number
// (36 → 2² × 3² → all exponents ≥ 2)

const isPoweful = (num) => {
  for (let i = 2; i <= num; i++) {
    let count = 0;
    while (num % i === 0) {
      num = num / i;
      count++;
    }

    return count >= 2;
  }
};
console.log(isPoweful(36));

// ==================================================
// 5. FIND THE PRODUCT OF ALL DISTINCT PRIME FACTORS
// ==================================================
// Input: N = 150
// Output: Product = 2 × 3 × 5 = 30

const distincMul = (num) => {
  const output = [];
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      if (!output.includes(i)) {
        output.push(i);
      }
      num = num / i;
    }
  }
  return output.reduce((acc, curr) => acc * curr, 1);
};
console.log(distincMul(150));

// ==================================================
// 6. CHECK IF A NUMBER IS A SQUARE-FREE NUMBER
// ==================================================
// A number is square-free if none of its
// prime factors repeat.
//
// Input: N = 30
// Output: Square-Free Number
// (2 × 3 × 5 → no repeats)

const isSquareFreeNumber = (num) => {
  const output = [];
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      output.push(i);
      num = num / i;
    }
  }
  const uniqueElement = [...new Set(output)];
  return output.length === uniqueElement.length;
};
console.log(isSquareFreeNumber(36));

// ==================================================
// 7. CHECK IF A NUMBER IS A SMITH NUMBER
// ==================================================
// A composite number whose sum of digits
// equals the sum of digits of its prime factors.
//
// Input: N = 666
// Output: Smith Number

const smithNumber = (num) => {
  const isSum = (n) =>
    n
      .toString()
      .split("")
      .reduce((acc, curr) => acc + +curr, 0);
  const sumOfNum = isSum(num);
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      sum += +isSum(i);
      num = num / i;
    }
  }
  return sum === sumOfNum;
};
console.log(smithNumber(666));

// ==================================================
// 8. CHECK IF A NUMBER IS AN UGLY NUMBER
// ==================================================
// Ugly numbers have only 2, 3, 5 as prime factors.
//
// Input: N = 18
// Output: Ugly Number
//
// Input: N = 14
// Output: Not Ugly (Contains 7)

const isUglyNumber = (num) => {
  const primeFactor = [];
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      primeFactor.push(i);
      num = num / i;
    }
  }

  const isUgly = primeFactor.every((el) => [2, 3, 5].includes(el));
  return isUgly;
};
console.log(isUglyNumber(18));
console.log(isUglyNumber(14));

// ==================================================
// 9. CHECK IF A NUMBER IS A KAPREKAR NUMBER
// ==================================================
// Square the number → split → sum should
// give the original number.
//
// Input: N = 45
// Output: Kaprekar Number
// (45² = 2025 → 20 + 25 = 45)

const isKaprekarNum = (num) => {
  const sqaure = num * num;
  const splitLength = num.toString().split("").length;
  const sqareArr = sqaure.toString().split("");

  const right = sqareArr.slice(-splitLength).join("");
  const left = sqareArr
    .slice(0, sqaure.toString().split("").length - splitLength)
    .join("");
  return +right + +left === num;
};
console.log(isKaprekarNum(45));

// ==================================================
// 10. CHECK IF A NUMBER IS A HAPPY NUMBER
// ==================================================
// Repeatedly replace the number with the sum
// of squares of its digits. If it becomes 1,
// it is a Happy Number.
//
// Input: N = 19
// Output: Happy Number

const isHappy = (num) => {
  const visited = [];

  while (num !== 1) {
    if (visited.includes(num)) return false;
    visited.push(num);

    num = num
      .toString()
      .split("")
      .map(Number)
      .reduce((sum, d) => sum + d * d, 0);
  }

  return true;
};

console.log(isHappy(19));
console.log(isHappy(2));

// ==================================================
// 11. NUMBER BASE CONVERSION (ANY BASE TO ANY BASE)
// ==================================================
// Input: Number = "101101"
// From Base = 2
// To Base = 10
//
// Output: 45

const convertBase = (num, from, to) => parseInt(num, from).toString(to);
console.log(convertBase("101101", 2, 10));

// ==================================================
// 12. SWAP VARIABLES WITHOUT USING THIRD VARIABLE
// ==================================================
// Input: a = 5, b = 6
// Output: a = 6, b = 5

const swapVariable = (a, b) => {
  return ([a, b] = [b, a]);
};
console.log(swapVariable(5, 6));

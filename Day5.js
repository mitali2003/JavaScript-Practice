// Print all factors of number 24

const factors = (num) => {
  const fact = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      fact.push(i);
    }
  }
  return fact;
};
console.log(factors(24));

//Print all multiples of number up to N  Number=4 Limit=30

const printNum = (num, limit) => {
  const ans = [];
  // for (let i = 1; i * num < limit; i++) {
  //   ans.push(i * num);
  // }

  for (let i = num; i < limit; i += num) {
    ans.push(i);
  }
  return ans;
};
console.log(printNum(4, 30));
console.log(printNum(1, 10));
console.log(printNum(2, 10));

//Find HCF(highest common factor) or GCD(Greatest common divisor)  & LCM of two number
// input = 12,18   output=6

const findGCDAndLCM = (num1, num2) => {
  const factorOfNum1 = [];
  const factorOfNum2 = [];

  for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
      factorOfNum1.push(i);
    }
  }

  for (let i = 1; i <= num2; i++) {
    if (num2 % i === 0) {
      factorOfNum2.push(i);
    }
  }

  const commonArra = [];

  for (let i = 0; i <= factorOfNum1.length; i++) {
    if (factorOfNum2.includes(factorOfNum1[i])) {
      commonArra.push(factorOfNum1[i]);
    }
  }

  return {
    GCD: commonArra[commonArra.length - 1],
    LCD: commonArra.reduce((acc, curr) => acc * curr, 1),
  };
};
console.log(findGCDAndLCM(12, 18));
console.log(findGCDAndLCM(60, 36));
console.log(findGCDAndLCM(4, 6));

// Count the Total Number of Factors of a Number
// Input: N = 24
// Output: 8 Factors

const countFactor = (num) => {
  const fact = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      fact.push(i);
    }
  }
  return fact.length;
};
console.log(countFactor(24));

// Sum of All Factors of a Number
// Input: N = 12
// Output: Sum = 28

const sumOfFactor = (num) => {
  const fact = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      fact.push(i);
    }
  }
  return fact.reduce((acc, curr) => acc + curr, 0);
};
console.log(sumOfFactor(12));

// Find the Greatest Factor of a Number (Other Than Itself)
// Input: N = 36
// Output: 18

const finfFact = (num) => {
  const fact = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      fact.push(i);
    }
  }
  return fact[fact.length - 2];
};
console.log(finfFact(36));

// Check if a Number is a Perfect Number
// Input: N = 28
// Output: Perfect Number
// If sum of all proper divisors = number → Perfect Number.
// Proper divisors = all divisors of a number except the number itself
const findPerfect = (num) => {
  const fact = [];
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      fact.push(i);
    }
  }
  return fact.reduce((acc, curr) => acc + curr, 0) === num;
};
console.log(findPerfect(28));
console.log(findPerfect(10));

// Find the HCF and LCM of Three Numbers
// Input: 8, 12, 16
// Output: HCF = 4, LCM = 48

const findHCMAndLCM1 = (num1, num2, num3) => {
  const gcd = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const lcm = (a, b) => (a * b) / gcd(a, b);
  const HCF = gcd(gcd(num1, num2), num3);
  const LCM = lcm(lcm(num1, num2), num3);

  return { HCF, LCM };
};
console.log(findHCMAndLCM1(8, 12, 16));

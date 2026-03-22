// -----------------------------------
// NOTE: GCD : [a,b]=[b,a%b]
// NOTE: factorial: [a,b]=[b,a+b]
// -----------------------------------

// ==================================================
// CHECK NUMBER IS PRIME OR NOT
// ==================================================

const isPrime = (num) => {
  let factorCount = 0;

  // 1 is not a prime number
  if (num <= 1) return "Not Prime Number";

  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      factorCount++;
    }
  }

  const isPrime = factorCount === 2;
  return isPrime ? "Prime Number" : "Not Prime Number";
};

console.log(isPrime(1));

// ==================================================
// CHECK IF TWO NUMBERS ARE CO-PRIME
// Input: (7, 8)
// Output: Co-Prime
// ==================================================

// const isCoPrime = (num1, num2) => {
//   const factOf7 = [];
//   const factOf8 = [];

//   for (let i = 1; i <= num1; i++) {
//     if (num1 % i === 0) {
//       factOf7.push(i);
//     }
//   }

//   for (let i = 1; i <= num2; i++) {
//     if (num2 % i === 0) {
//       factOf8.push(i);
//     }
//   }

//   const commonElm = [];

//   for (let i = 0; i <= factOf7.length; i++) {
//     if (factOf8.includes(factOf7[i])) {
//       commonElm.push(factOf7[i]);
//     }
//   }

//   return commonElm.length === 1;
// };

// console.log(isCoPrime(7, 8));
// console.log(isCoPrime(8, 15));
// console.log(isCoPrime(16, 17));

const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const isCoPrime = (a, b) => gcd(a, b) === 1;

console.log(isCoPrime(7, 8));
console.log(isCoPrime(8, 15));
console.log(isCoPrime(16, 17));

// ==================================================
// PRINT FIBONACCI SERIES UP TO N TERMS
// Input: N = 10
// Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// ==================================================

const fabonacci = (num) => {
  if (num <= 0) return [];
  if (num === 1) return [0];
  const fib = [0, 1];
  for (let i = 2; i < num; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
};

console.log(fabonacci(10));

// ==================================================
// FIND THE Nth FIBONACCI NUMBER
// Input: N = 8
// Output: 21
// ==================================================

const findNthNum = (n) => {
  if (n <= 1) return n;

  let a = 0,
    b = 1;

  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};

console.log(findNthNum(8));

// ==================================================
// CHECK IF A NUMBER BELONGS TO FIBONACCI SERIES
// Input: 21
// Output: Yes
// ==================================================

// const isBelongToSeries = (num) => {
//   let fib = [0, 1];

//   for (let i = 2; i <= num; i++) {
//     const nextNum = fib[i - 1] + fib[i - 2];
//     fib.push(nextNum);

//     if (nextNum === num) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(isBelongToSeries(4));
const isBelongToSeries = (num) => {
  let a = 0,
    b = 1;

  while (b <= num) {
    if (b === num) return true;
    [a, b] = [b, a + b];
  }
  return num === 0;
};
console.log(isBelongToSeries(21));

// ==================================================
// PRINT ALL PRIME NUMBERS UP TO N
// Input: N = 20
// Output: 2, 3, 5, 7, 11, 13, 17, 19
// ==================================================

const isprime = (n) => {
  const fact = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      fact.push(i);
    }
  }
  return fact.length === 2;
};

// const printAllPrimeNum = (num) => {
//   const allPrime = [];

//   for (let i = 1; i <= num; i++) {
//     if (isprime(i)) {
//       allPrime.push(i);
//     }
//   }
//   return allPrime;
// };

const printAllPrimeNum = (n) => {
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
};
console.log(printAllPrimeNum(20));

// ==================================================
// SUM OF ALL PRIME NUMBERS TILL N
// Input: N = 10
// Output: 17
// ==================================================

const sumOfAllPrime = (n) => {
  let sum = 0;

  for (let i = 2; i <= n; i++) {
    if (isprime(i)) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumOfAllPrime(10));

// ==================================================
// CHECK IF TWO NUMBERS ARE TWIN PRIMES
// Input: (3, 5)
// Output: Twin Primes
// ==================================================

const isTwinNum = (num1, num2) => {
  if (num2 - num1 === 2 && isprime(num1) && isprime(num2)) {
    return "Twin Pair";
  }
  return "Not Twin pair";
};

console.log(isTwinNum(3, 5));

// ==================================================
// PRINT ALL FIBONACCI NUMBERS UP TO A GIVEN LIMIT
// Input: Limit = 100
// ==================================================

const allFib = (n) => {
  let fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    if (fib[i - 1] + fib[i - 2] <= n) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
  }
  return fib;
};

console.log(allFib(100));

// ==================================================
// GENERATE FIBONACCI NUMBERS WITHIN A RANGE
// Input: Start = 10, End = 100
// ==================================================

// const generateFib = (start, end) => {
//   const fib = [0, 1];

//   for (let i = 2; i < end; i++) {
//     fib.push(fib[i - 1] + fib[i - 2]);
//   }

//   return fib.filter((data) => data >= start && data <= end);
// };

const generateFib = (start, end) => {
  let a = 0,
    b = 1;
  const res = [];

  while (b <= end) {
    if (b >= start) res.push(b);
    [a, b] = [b, a + b];
  }
  return res;
};

console.log(generateFib(10, 100));

// ==================================================
// FIND THE SUM OF EVEN FIBONACCI NUMBERS UP TO N TERMS
// Input: N = 10
// Output: 44
// ==================================================

const findSum = (n) => {
  let a = 0,
    b = 1,
    sum = 0;

  for (let i = 2; i <= n; i++) {
    const c = a + b;
    if (c % 2 === 0) sum += c;
    a = b;
    b = c;
  }
  return sum;
};

console.log(findSum(10));

// ==================================================
// CHECK IF THE SUM OF TWO CONSECUTIVE FIBONACCI NUMBERS IS PRIME
// Input: (5 + 8)
// ==================================================

const checkIsPrime = (n1, n2) => {
  const finalNul = n1 + n2;
  return isprime(finalNul);
};

console.log(checkIsPrime(5, 8));

// ==================================================
// PRINT FIRST N PRIME FIBONACCI NUMBERS
// Input: N = 5
// Output: 2, 3, 5, 13, 89
// ==================================================

const firstPrimeFib = (n) => {
  const result = [];
  let a = 0,
    b = 1;

  while (result.length < n) {
    const c = a + b;
    if (isPrime(c)) result.push(c);
    a = b;
    b = c;
  }
  return result;
};

console.log(firstPrimeFib(5)); // [2, 3, 5, 13, 89]

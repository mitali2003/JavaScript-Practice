// Print number from 1 to n

const printNumber = (num) => {
  //   for (n = 1; n <= num; n++) {
  //     console.log(n);
  //   }
  return Array.from({ length: num }, (_, i) => i + 1);
};
// console.log(printNumber(5));

// Print a number from n to 1 without changing loop condition

const backPrintNum = (num) => {
  for (let n = 1; n <= num; n++) {
    console.log(num - n + 1);
  }
  //   return Array.from({ length: num }, (_, i) => num - i);
};
// backPrintNum(5);

// Print all even num from 1 to n

const printEven = (num) =>
  Array.from({ length: Math.floor(num / 2) }, (_, i) => (i + 1) * 2);
// console.log(printEven(15));

//sum of first n natural num

const sum = (num) => {
  // const allNum = Array.from({ length: num }, (_, i) => i + 1);
  // return allNum.reduce((acc, curr) => acc + curr, 0);
  return (num * (num + 1)) / 2;
};
// console.log(sum(10));

//factorial of n

const fact = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fact(n - 1);
};
// console.log(fact(5));

//sum of all even number (input =10   -------->2+4+6+8+10)

const sumOfEven = (n) => {
  // return Array.from(
  //   { length: Math.floor(n / 2) },
  //   (_, i) => (i + 1) * 2
  // ).reduce((acc, curr) => acc + curr, 0);
  const k = Math.floor(n / 2);
  return k * (k + 1);
};
// console.log(sumOfEven(10));

//print square of natural num (input = 5 -------->1 4 9 16 25)

const sqaureOfNum = (n) => {
  return Array.from({ length: n }, (_, i) => (i + 1) * (i + 1));
};
console.log(sqaureOfNum(5));

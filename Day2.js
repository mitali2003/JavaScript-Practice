// 1. **Find the Maximum of Three Numbers**

//    * Input: `10 20 5`
//    * Output: `20`

const findMaxOfThree = (n1, n2, n3) => {
  //   return Math.max(n1, n2, n3);
  //   return [n1, n2, n3].sort((a, b) => b - a)[0];

  if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n1 && n2 > n3) {
    return n2;
  } else {
    return n3;
  }
};
// console.log(findMaxOfThree(1, 8, 100));

// 2. **Check if a Number is Positive, Negative, or Zero**

//    * Input: `-9`
//    * Output: `Negative`

const checkNum = (n) => {
  if (n < 0) {
    return "Nagative";
  } else if (n === 0) {
    return "Zero";
  } else {
    return "Positive";
  }
};
// console.log(checkNum(-10));

// 3. **Calculate Electricity Bill**

// * Input: `Units = 230`
// * Output: `Total Bill = ₹1500`
// * Example Logic:

//   * 0–100 units → ₹5 per unit
//   * 101–200 units → ₹7 per unit
//   * 201–300 units → ₹10 per unit
//   * Above 300 units → ₹12 per unit
// * 🔍 *Teaches:* cumulative calculation + condition chaining.

const calculateBill = (units) => {
  let bill = 0;

  if (units <= 100) {
    bill = units * 5;
  } else if (units <= 200) {
    bill = 100 * 5 + (units - 100) * 7;
  } else if (units <= 300) {
    bill = 100 * 5 + 100 * 7 + (units - 200) * 10;
  } else {
    bill = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 12;
  }

  return `Total Bill = ₹${bill}`;
};
// console.log(calculateBill(230)); // Total Bill = ₹1500

// 4. **Check if a Character is a Vowel or Consonant**

//    * Input: `e`
//    * Output: `Vowel`

const isCheck = (vowel) => {
  if (["a", "e", "i", "o", "u"].includes(vowel.toLowerCase())) {
    return "vowel";
  }
  return "consonent";
};
// console.log(isCheck("I"));

// 5. **Check if a Year is a Leap Year**

//    * Input: `2024`
//    * Output: `Leap Year`
//    A year is a **leap year** if it satisfies these conditions:

//    1. It is **divisible by 4**,
//       ➜ `year % 4 === 0`
//    2. **But not divisible by 100**,
//       ➜ `year % 100 !== 0`
//    3. **Unless** it is also **divisible by 400**,
//       ➜ `year % 400 === 0`

//    🧩 **In Simple Words**
//    - If a year is divisible by **4**, it’s a leap year.
//    - **Except** if it’s also divisible by **100**, then it’s **not** a leap year.
//    - **But** if it’s divisible by **400**, it **is** a leap year again.

const checkLeap = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
};
// console.log(checkLeap(2024));

// ### 🏠 **Homework / Practice Challenge**

// 1. **Check if a Character is Uppercase, Lowercase, Digit, or Special Character**

//    * Input: `A`
//    * Output: `Uppercase Letter`
//    * ✨ *Teaches use of character code ranges (`charCodeAt`) and compound logical conditions.*
//    * 🔍 *Concepts:* ASCII range checks, compound `&&` and `||` operators.

const isCheckChar = (chat) => {
  const code = chat.charCodeAt(0);
  if (code >= 65 && code <= 90) {
    return "Uppercase";
  } else if (code >= 97 && code <= 122) {
    return "LowerCase";
  } else if (code >= 48 && code <= 57) {
    return "digit";
  }
};
// console.log(isCheckChar("A"));

// 2. **Check Triangle Type Using Sides and Angles**

// * **Input:** `Sides = 3, 4, 5`
// * **Output:** `Right-Angled Triangle`
// * ✨ *Combines geometric reasoning + Pythagoras theorem check.*
// * Example Logic:

//   * If `a² + b² = c²` → Right-angled
//   * Else if all sides equal → Equilateral
//   * Else if any two equal → Isosceles
//   * Else → Scalene

const findTypes = (a, b, c) => {
  if (a * a + b * b == c * c) {
    return "Right sided";
  } else if ((a == b) == c) {
    return "Equilateral";
  } else if (a == b || a == c || b == c) {
    return "Isosceles";
  } else {
    return "Scalene";
  }
};
console.log(findTypes(3, 4, 5));

// 3. **Calculate Income Tax Based on Slabs**

// * **Input:** `Income = ₹7,50,000`
// * **Output:** `Tax = ₹62,500`

//   * Up to ₹2,50,000 → No tax
//   * ₹2,50,001 – ₹5,00,000 → 5%
//   * ₹5,00,001 – ₹10,00,000 → 20%
//   * Above ₹10,00,000 → 30%

const calcTax = (income) => {
  let tax = 0;

  if (income <= 250000) {
    tax = 0;
  } else if (income <= 500000) {
    tax = (income - 250000) * 0.05;
  } else if (income <= 1000000) {
    tax = 250000 * 0.05 + (income - 500000) * 0.2;
  } else {
    tax = 250000 * 0.05 + 500000 * 0.2 + (income - 1000000) * 0.3;
  }

  return `Tax = ₹${tax}`;
};

console.log(calcTax(750000));

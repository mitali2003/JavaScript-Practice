// Q-1 : Write a JavaScript program to find the difference in days between two dates

const day1 = new Date("2023-06-01");
const day2 = new Date("2023-06-15");

const diff = Math.abs(day2 - day1);
const dayDiff = Math.ceil(diff / (1000 * 60 * 60 * 24)); //1 ms = 1000sec 60min 60sec 24 hr
console.log(dayDiff);

// Q-2 : Write a JavaScript program to flatten a nested array using the reduce method.

const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattedArray = (nestedArray) => {
  return nestedArray.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return acc.concat(flattedArray(val));
    }
    return acc.concat(val);
  }, []);
};
console.log(flattedArray(nestedArray));

//Q-3: Write a JavaScript function to count the occurrences of each element in an array using the reduce method.

const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4];
const numberOfOccurrences = (numbers) => {
  return numbers.reduce((acc, val) => {
    if (!acc[val]) {
      acc[val] = [];
    }
    acc[val]++;
    return acc;
  }, {});
};
console.log(numberOfOccurrences(numbers));

//Q-4 :Write a JavaScript function to remove falsy values from an array using the filter method.

const values = [0, 1, false, 2, "", 3, null, "a", NaN];

const removeFalsyValue = (values) => {
  const falsyVal = [0, null, undefined, "", false, NaN];
  return values.filter((value) => !falsyVal.includes(value));
};
console.log(removeFalsyValue(values));

//Q-5  Write a JavaScript function to flatten an object, so that the nested keys are represented in a single level with dot notation using recursion and Object.keys.

const nestedObject = {
  name: "Alice",
  address: {
    city: "Wonderland",
    street: {
      name: "Rabbit Hole",
      number: 42,
      pincode: {
        code: "123456",
      },
    },
  },
};

const flattedObject = (Obj) => {
  const result = {};
  for (const i in Obj) {
    if (typeof Obj[i] == "object") {
      const temp = flattedObject(Obj[i]);
      for (const j in temp) {
        result[i + "." + j] = temp[j];
      }
    } else {
      result[i] = Obj[i];
    }
  }
  return result;
};
console.log(flattedObject(nestedObject));

// Q-6 : Calculate Age Based on Birthdate

const calculateBirthDate = () => {
  const bithdate = new Date("9-5-2003");
  const bithdatYear = bithdate.getFullYear();
  const currYear = new Date().getFullYear();
  const diff = currYear - bithdatYear;
  return diff;
};
console.log(calculateBirthDate());

// Q-7 : Write a JavaScript function to format a given date into a custom string format DD/MM/YYYY HH:MM:SS.

const date = new Date("2024-06-16T14:30:00");
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate();
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");
  return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
};
console.log(formatDate(date)); // "16/06/2024 14:30:00"

//Q-8 : Write a JavaScript function to calculate the total number of days a person has lived based on their birthdate and display it in a formatted string.

const calculateDaysLived = (birthdate) => {
  const birthdateObj = new Date(birthdate);
  const currentDate = new Date();
  const differenceInMilliseconds = currentDate - birthdateObj;
  const daysLived = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );
  return `You have lived for ${daysLived} days.`;
};
const birthdate = "2003-05-09";
console.log(calculateDaysLived(birthdate));

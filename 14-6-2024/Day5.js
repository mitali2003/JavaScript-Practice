// Q-1 Write a JavaScript program to get the length of a JavaScript object.

const student = {
  name: "Mitali",
  age: 22,
  city: "Pune",
  country: "India",
};

const findObjLength = (student) => {
  return Object.keys(student).length;
};
console.log(findObjLength(student));

// Q-2 Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    readingStatus: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    readingStatus: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false,
  },
];

const readingStatus = (library) => {
  return library.map((el) => {
    return !el.readingStatus
      ? `You still need to read ${el.title} book by ${el.author}`
      : `Already read ${el.title} by ${el.author}`;
  });
};
console.log(readingStatus(library));

// Q-3 : Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.

const project = {
  name: "Invoice calculate",
  version: "1.0",
  author: "Salim Khan",
};

const swapValue = (project) => {
  const result = {};
  Object.keys(project).forEach((key) => {
    const value = project[key];
    result[value] = key;
  });
  return result;
};

console.log(swapValue(project));

//Q-4 : Write a JavaScript function to convert an object into a list of '[key, value]' pairs.

const colorCode = {
  black: "#000000",
  white: "#FFFFFF",
  red: " FF0000",
};

const convertObjectToList = (colorCode) => {
  return Object.entries(colorCode);
};
console.log(convertObjectToList(colorCode));

// Q-5 :Write a JavaScript program to check if a given object contains a specified property.

const person = {
  name: "John",
  age: 30,
  profession: "Engineer",
};

const hasProperty = (person, property) => {
  return person.hasOwnProperty(property);
};
console.log(hasProperty(person, "name"));

//Q-6 :  Write a JavaScript program to find the properties of an object that contain a specified value.

const user = {
  id: 101,
  name: "Alice",
  age: 25,
  city: "New York",
  country: "USA",
};

const findPropertiesWithValue = (obj, value) => {
  return Object.keys(obj).filter((key) => obj[key] === value);
};

console.log(findPropertiesWithValue(user, "Alice"));

// Q-7 : Write a JavaScript program to find all values in an object that are of a specific type.

const mixedData = {
  id: 101,
  name: "Bob",
  isStudent: true,
  grade: 85.5,
  courses: ["Math", "Science"],
};

const filterData = (mixedData, type) => {
  return Object.keys(mixedData).filter((obj) => typeof mixedData[obj] === type);
};
console.log(filterData(mixedData, "string"));
console.log(filterData(mixedData, "number"));

// Q_8 Write a JavaScript program to create an array of objects from two arrays, one containing keys and the other containing values.

const keys = ["name", "age", "city"];
const values = ["Alice", 25, "Wonderland"];

const createObjectFromArrays = (keys, values) => {
  const obj = {};
  keys.forEach((key, index) => {
    obj[key] = values[index];
  });
  return obj;
};
console.log(createObjectFromArrays(keys, values));

//Q-9 : Write a JavaScript program to find the maximum and minimum values of an object properties.

const scores = {
  math: 95,
  english: 88,
  science: 76,
  history: 92,
};

const findMaxMinValue = (scores) => {
  const values = Object.values(scores);
  const maxValues = Math.max(...values);
  const minValues = Math.min(...values);
  return { maxValues, minValues };
};
console.log(findMaxMinValue(scores));

// Q- 10 : Write a JavaScript program to compare two objects to determine if they have identical properties and values.

const obj1 = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};

const obj2 = {
  name: "Alice",
  age: 27,
  city: "Wonderland",
};

const findIdenticalProperty = (obj1, obj2) => {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);
  if (key1.length !== key2.length) return false;
  for (let key of key1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};
console.log(findIdenticalProperty(obj1, obj2));

const students = [
  {
    id: 1,
    name: "Chris Lee",
    section: "B",
    standard: "11th",
    marks: {
      maths: 50,
      science: 45,
      english: 30,
    },
    maxMarks: 50,
    fees: {
      total: 50000,
      paid: 42000,
      paymentHistory: [
        { amount: 20000, date: "2022-08-01" },
        { amount: 22000, date: "2023-01-15" },
      ],
    },
  },
  {
    id: 2,
    name: "Ava Roberts",
    section: "A",
    standard: "12th",
    marks: {
      maths: 60,
      science: 70,
      english: 80,
    },
    maxMarks: 80,
    fees: {
      total: 55000,
      paid: 50000,
      paymentHistory: [
        { amount: 30000, date: "2022-09-10" },
        { amount: 20000, date: "2023-03-05" },
      ],
    },
  },
  {
    id: 3,
    name: "Liam Smith",
    section: "C",
    standard: "10th",
    marks: {
      maths: 45,
      science: 35,
      english: 50,
    },
    maxMarks: 100,
    fees: {
      total: 60000,
      paid: 55000,
      paymentHistory: [
        { amount: 30000, date: "2022-05-20" },
        { amount: 25000, date: "2023-02-15" },
      ],
    },
  },
  {
    id: 4,
    name: "Olivia Brown",
    section: "B",
    standard: "11th",
    marks: {
      maths: 65,
      science: 75,
      english: 50,
    },
    maxMarks: 50,
    fees: {
      total: 45000,
      paid: 43000,
      paymentHistory: [
        { amount: 20000, date: "2022-07-05" },
        { amount: 23000, date: "2023-01-10" },
      ],
    },
  },
  {
    id: 5,
    name: "Sophia Johnson",
    section: "D",
    standard: "12th",
    marks: {
      maths: 85,
      science: 90,
      english: 75,
    },
    maxMarks: 80,
    fees: {
      total: 70000,
      paid: 65000,
      paymentHistory: [
        { amount: 30000, date: "2022-11-30" },
        { amount: 35000, date: "2023-05-10" },
      ],
    },
  },
  {
    id: 6,
    name: "Noah Taylor",
    section: "A",
    standard: "9th",
    marks: {
      maths: 40,
      science: 35,
      english: 60,
    },
    maxMarks: 50,
    fees: {
      total: 30000,
      paid: 25000,
      paymentHistory: [
        { amount: 15000, date: "2022-06-15" },
        { amount: 10000, date: "2023-01-10" },
      ],
    },
  },
  {
    id: 7,
    name: "Ethan White",
    section: "C",
    standard: "11th",
    marks: {
      maths: 70,
      science: 80,
      english: 85,
    },
    maxMarks: 100,
    fees: {
      total: 55000,
      paid: 50000,
      paymentHistory: [
        { amount: 25000, date: "2022-10-01" },
        { amount: 25000, date: "2023-04-15" },
      ],
    },
  },
  {
    id: 8,
    name: "Emma Green",
    section: "B",
    standard: "10th",
    marks: {
      maths: 90,
      science: 80,
      english: 95,
    },
    maxMarks: 80,
    fees: {
      total: 40000,
      paid: 38000,
      paymentHistory: [
        { amount: 20000, date: "2022-09-12" },
        { amount: 18000, date: "2023-02-22" },
      ],
    },
  },
  {
    id: 9,
    name: "Mason Harris",
    section: "D",
    standard: "12th",
    marks: {
      maths: 50,
      science: 55,
      english: 45,
    },
    maxMarks: 100,
    fees: {
      total: 65000,
      paid: 60000,
      paymentHistory: [
        { amount: 35000, date: "2022-07-30" },
        { amount: 25000, date: "2023-06-20" },
      ],
    },
  },
  {
    id: 10,
    name: "Isabella Wilson",
    section: "A",
    standard: "9th",
    marks: {
      maths: 55,
      science: 50,
      english: 65,
    },
    maxMarks: 50,
    fees: {
      total: 35000,
      paid: 30000,
      paymentHistory: [
        { amount: 15000, date: "2022-05-12" },
        { amount: 15000, date: "2023-03-28" },
      ],
    },
  },
];

// 1. Create a function that sorts the student array based on their standard/grade.
// 2. Identify and return the details of the student with the highest marks in Maths, but only for those in the 10th standard.
// 3. Write a function to calculate the amount for students in the year 2022.

const sortStudentData = () =>
  students.sort((a, b) => parseInt(a.standard) - parseInt(b.standard));

console.log(sortStudentData());

const findStudent = () =>
  students
    .filter(({ standard }) => standard === "10th")
    .sort((a, b) => b.marks.maths - a.marks.maths)[0];

console.log(findStudent());

const countTotalFees = () =>
  students
    .flatMap(({ fees: { paymentHistory } }) => paymentHistory)
    .filter(({ date }) => new Date(date).getFullYear() === 2022)
    .reduce((acc, curr) => acc + curr.amount, 0);

console.log(countTotalFees());

const students = [
  {
    firstName: "Alice",
    lastName: "Johnson",
    class: "10-A",
    subjects: { Math: 85, Science: 92, English: 88 },
  },
  {
    firstName: "Bob",
    lastName: "Smith",
    class: "10-B",
    subjects: { Math: 70, Science: 75, English: 80 },
  },
  {
    firstName: "Charlie",
    lastName: "Davis",
    class: "9-A",
    subjects: { Math: 95, Science: 89, English: 91 },
  },
  {
    firstName: "Diana",
    lastName: "Prince",
    class: "9-C",
    subjects: { Math: 60, Science: 65, English: 70 },
  },
  {
    firstName: "Ethan",
    lastName: "Hunt",
    class: "11-B",
    subjects: { Math: 88, Science: 84, English: 86 },
  },
];

// create a function that return average marks for each subjects for each standard
// {
//   9:{
//     math:77.5,

//   },
//   10
// }
// create a function that takes minimum percentage and maximum percentage as parameters and returns a list of student with their full names and
// class whose percentage falls within the range (inclusive)

const findAvgMarks = () => {
  const sumOfStudentMarks = students.reduce((acc, curr) => {
    const standard = parseInt(curr.class);
    if (!acc[standard]) {
      acc[standard] = {
        Math: 0,
        Science: 0,
        English: 0,
        count: 0,
      };
    }
    acc[standard].count += 1;
    acc[standard].Math += curr.subjects.Math;
    acc[standard].Science += curr.subjects.Science;
    acc[standard].English += curr.subjects.English;
    return acc;
  }, {});

  return Object.entries(sumOfStudentMarks).reduce((acc, [key, value]) => {
    if (!acc[key]) {
      acc[key] = {
        Math: value.Math / value.count,
        Science: value.Science / value.count,
        English: value.English / value.count,
      };
    }
    return acc;
  }, {});
};
console.log(findAvgMarks());

const filterDataBasedOnPercentage = (minPer, maxPer) => {
  return students
    .map(({ firstName, lastName, subjects: { Math, Science, English } }) => ({
      fullName: `${firstName}_${lastName}`,
      percentage: ((Math + Science + English) * 100) / 300,
    }))
    .filter(({ percentage }) => percentage >= minPer && percentage <= maxPer);
};
console.log(filterDataBasedOnPercentage(20, 80));

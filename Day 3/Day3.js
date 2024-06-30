const students = [
  {
    studentId: "S001",
    name: "Alice Johnson",
    age: 20,
    enrolled: true,
    scores: [
      { subject: "Math", score: 85 },
      { subject: "English", score: 78 },
      { subject: "Science", score: 92 },
    ],
  },
  {
    studentId: "S002",
    name: "Bob Smith",
    age: 22,
    enrolled: false,
    scores: [
      { subject: "Math", score: 90 },
      { subject: "English", score: 82 },
      { subject: "Science", score: 88 },
    ],
  },
  {
    studentId: "S003",
    name: "Charlie Brown",
    age: 21,
    enrolled: true,
    scores: [
      { subject: "Math", score: 70 },
      { subject: "English", score: 95 },
      { subject: "Science", score: 80 },
    ],
  },
  {
    studentId: "S004",
    name: "David Wilson",
    age: 23,
    enrolled: true,
    scores: [
      { subject: "Math", score: 75 },
      { subject: "English", score: 85 },
      { subject: "Science", score: 89 },
    ],
  },
  {
    studentId: "S005",
    name: "Eva Green",
    age: 20,
    enrolled: false,
    scores: [
      { subject: "Math", score: 88 },
      { subject: "English", score: 92 },
      { subject: "Science", score: 94 },
    ],
  },
];

// Q-1  write a function that calculates the average score of each student across all subjects and returns an array of objects with the student name and their average score.

const findAvg = (students) => {
  return students.map((student) => {
    const avgMarks =
      student.scores.reduce((acc, input) => acc + input.score, 0) /
      student.scores.length;
    return {
      student: student.name,
      avgScore: avgMarks.toFixed(2),
    };
  });
};
console.log(findAvg(students));

// Q-2 Which student has the highest score in Math?

const highestMark = (students) => {
  const mathsMark = students.map((student) =>
    student.scores.find((score) => score.subject === "Math")
  );
  return mathsMark.reduce((prev, next) =>
    prev.score > next.score ? prev : next
  );
};
console.log(highestMark(students));

//Q-3 : Determine the subject in which the highest average score was achieved among all students

const subjects = ["Math", "English", "Science"];
const averageScores = {};
subjects.forEach((subject) => {
  const totalScore = students.reduce((sum, student) => {
    const subjectScore = student.scores.find(
      (score) => score.subject === subject
    ).score;
    return sum + subjectScore;
  }, 0);
  averageScores[subject] = totalScore / students.length;
});
const highestAverageSubject = Object.keys(averageScores).reduce(
  (prev, current) =>
    averageScores[prev] > averageScores[current] ? prev : current
);
console.log(highestAverageSubject);

const tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Complete assignment 1",
    dueDate: "2024-06-20",
    priority: "High",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Prepare presentation slides",
    dueDate: "2024-06-25",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Submit project proposal",
    dueDate: "2024-06-30",
    priority: "High",
  },
  {
    id: 4,
    title: "Task 4",
    description: "Review code changes",
    dueDate: "2024-07-05",
    priority: "Low",
  },
  {
    id: 5,
    title: "Task 5",
    description: "Attend team meeting",
    dueDate: "2024-06-14",
    priority: "Medium",
  },
];

//Q-4 : Write a function named findTasksDueToday that takes this array of tasks and the current date as input and returns an array of tasks that are due today.

const findTasksDueToday = (tasks, currentDate) => {
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate() + 1).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return tasks.filter((task) => task.dueDate === formattedDate);
};
const currentDate = new Date();
console.log(findTasksDueToday(tasks, currentDate));

//Q-5: Write a function named findOverdueTasks that takes the tasks array and the current date as input and returns an array of tasks that are overdue, sorted by their due dates in ascending order.
const findOverdueTasks = (tasks, currentDate) => {
  const currentDateObj = new Date(currentDate);
  const overdueTasks = tasks.filter(
    (task) => new Date(task.dueDate) < currentDateObj
  );
  overdueTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  return overdueTasks;
};

const currentDate = "2024-06-25"; // Example current date
console.log(findOverdueTasks(tasks, currentDate));

//Q_6 : Run-length encoding (RLE) is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string "3322251" we replace "33" with "23", replace "222" with "32", replace "5" with "15" and replace "1" with "11". Thus the compressed string becomes "23321511".

// Given a positive integer n, return the nth element of the count-and-say sequence.

// Input: n = 4
// Output: "1211"

// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = RLE of "1" = "11"
// countAndSay(3) = RLE of "11" = "21"
// countAndSay(4) = RLE of "21" = "1211"

const countAndSay = function (n) {
  if (n == 1) {
    return "1";
  }
  const say = countAndSay(n - 1);
  //processing
  let result = "";
  for (let i = 0; i < say.length; i++) {
    let count = 1;
    const ch = say[i];
    while (i < say.length - 1 && say[i] === say[i + 1]) {
      count++;
      i++;
    }
    result += String(count) + String(ch);
  }
  return result;
};
console.log(countAndSay(4));

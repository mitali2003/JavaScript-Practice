const courses = [
  { id: 1, name: "Mathematics" },
  { id: 2, name: "Physics" },
  { id: 3, name: "Chemistry" },
];

const students = [
  { id: 1, name: "Alice Johnson", major: "Physics", courses: [1, 2] },
  { id: 2, name: "Bob Smith", major: "Mathematics", courses: [1, 3] },
  { id: 3, name: "Charlie Brown", major: "Chemistry", courses: [2, 3] },
  { id: 4, name: "David Wilson", major: "Physics", courses: [1] },
  { id: 5, name: "Eve Davis", major: "Mathematics", courses: [3] },
];

const professors = [
  { id: 1, name: "Dr. Adam", department: "Mathematics", course: 1 },
  { id: 2, name: "Dr. Brian", department: "Physics", course: 2 },
  { id: 3, name: "Dr. Claire", department: "Chemistry", course: 3 },
];

// Q-1 Find all students majoring in a given subject.

const findMajorStudent = (students, subject) => {
  const result = students
    .filter((student) => student.major == subject)
    .map((student) => student.name);
  console.log(result);
};
findMajorStudent(students, "Physics");

// Q-2 Get a list of all courses with the names of students enrolled in them.

const filterStudentByCources = (students, courses) => {
  return courses.map((course) => {
    const filterdStudent = students
      .filter((student) => student.courses.includes(course.id))
      .map((student) => student.name);

    return {
      className: course.name,
      name: filterdStudent,
    };
  });
};
console.log(filterStudentByCources(students, courses));

// Q-3  List all students enrolled in a specific course.

const findStudentsInCourse = (students, courseName) => {
  const courceId = courses.find((cource) => cource.name === courseName).id;
  const result = students
    .filter((student) => student.courses.includes(courceId))
    .map((student) => student.name);
  console.log(result);
};

findStudentsInCourse(students, "Mathematics");

//Q-4 Get a summary of all majors with the number of students in each.

const getMajorSummary = (students, courses) => {
  return courses.map((cource) => {
    const enrollStudent = students
      .filter((student) => student.courses.includes(cource.id))
      .map((student) => student.name).length;

    return {
      name: cource.name,
      studentCount: enrollStudent,
    };
  });
};

console.log(getMajorSummary(students, courses));

//Q-5  Find professors teaching a specific course.

const findProfessorsByCourse = (professors, courseName) => {
  const courceId = courses.find((course) => course.name === courseName).id;
  return professors
    .filter((prof) => prof.id == courceId)
    .map((prof) => prof.name);
};

console.log(findProfessorsByCourse(professors, "Mathematics"));

//Q-6 List all students enrolled in more than one course.

const findStudentsWithMultipleCourses = (students) => {
  return students
    .filter((student) => student.courses.length > 1)
    .map((student) => student.name);
};

console.log(findStudentsWithMultipleCourses(students));

// Q-7 Get a list of all professors with the courses they teach.

const getProfessorsWithCourses = (professors, courses) => {
  return courses.map((course) => {
    const professorName = professors.find((prof) => prof.id === course.id).name;
    return {
      professorName: professorName,
      course: course.name,
    };
  });
};

console.log(getProfessorsWithCourses(professors, courses));

//Q-8Find all students with names start with A or a

const findStudentsByNamePattern = (students) => {
  const regExp = /^[aA]/;
  return students
    .filter((student) => regExp.test(student.name))
    .map((student) => student.name);
};

console.log(findStudentsByNamePattern(students));

// Q-9 List all students along with the names of the courses they are enrolled in.

const getStudentsWithCourses = (students, courses) => {
  return students.map((student) => {
    const enrollStuent = student.courses.map(
      (courceId) => courses.find((course) => courceId === course.id).name
    );
    return {
      studentName: student.name,
      courses: enrollStuent,
    };
  });
};

console.log(getStudentsWithCourses(students, courses));

//Q-10 Find all students along with their major and the courses they are enrolled in.

const getStudentsWithDetails = (students, courses) => {
  return students.map((student) => {
    const enrolledCourses = student.courses.map((courseId) => {
      const course = courses.find((course) => course.id === courseId);
      return course ? course.name : "Unknown course";
    });

    return {
      studentName: student.name,
      major: student.major,
      courses: enrolledCourses,
    };
  });
};

console.log(getStudentsWithDetails(students, courses));

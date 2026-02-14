const employees = [
  {
    id: 1,
    name: "Amit Sharma",
    detail: {
      department: "IT",
      designation: "Software Developer",
      experience: 3,
      salary: {
        salary: 60000,
        PF: 200,
        TDS: 500,
      },
    },
  },
  {
    id: 2,
    name: "Priya Patel",
    detail: {
      department: "HR",
      designation: "HR Manager",
      experience: 5,
      salary: {
        salary: 55000,
        PF: 250,
        TDS: 600,
      },
    },
  },
  {
    id: 3,
    name: "Rahul Verma",
    detail: {
      department: "IT",
      designation: "Quality Assurance",
      experience: 4,
      salary: {
        salary: 50000,
        PF: 220,
        TDS: 450,
      },
    },
  },
  {
    id: 4,
    name: "Sneha Reddy",
    detail: {
      department: "IT",
      designation: "Frontend Developer",
      experience: 2,
      salary: {
        salary: 45000,
        PF: 180,
        TDS: 350,
      },
    },
  },
  {
    id: 5,
    name: "Vikram Singh",
    detail: {
      department: "IT",
      designation: "Backend Developer",
      experience: 6,
      salary: {
        salary: 65000,
        PF: 300,
        TDS: 700,
      },
    },
  },
  {
    id: 6,
    name: "Neha Gupta",
    detail: {
      department: "Marketing",
      designation: "Marketing Executive",
      experience: 2,
      salary: {
        salary: 40000,
        PF: 150,
        TDS: 300,
      },
    },
  },
  {
    id: 7,
    name: "Arjun Nair",
    detail: {
      department: "IT",
      designation: "Frontend Developer",
      experience: 7,
      salary: {
        salary: 70000,
        PF: 350,
        TDS: 800,
      },
    },
  },
  {
    id: 8,
    name: "Kavita Joshi",
    detail: {
      department: "Finance",
      designation: "Financial Analyst",
      experience: 3,
      salary: {
        salary: 52000,
        PF: 210,
        TDS: 480,
      },
    },
  },
  {
    id: 9,
    name: "Rohan Das",
    detail: {
      department: "IT",
      designation: "Frontend Developer",
      experience: 4,
      salary: {
        salary: 58000,
        PF: 260,
        TDS: 550,
      },
    },
  },
  {
    id: 10,
    name: "Meera Iyer",
    detail: {
      department: "Admin",
      designation: "Admin Officer",
      experience: 3,
      salary: {
        salary: 42000,
        PF: 170,
        TDS: 320,
      },
    },
  },
];

// 1. Find all employees who belong to IT department and have experience more than 3 years.
// Return a new array that contains:
// - Employee name
// - Designation
// - Net Salary (Formula of Net Salary: salary − PF − TDS)

// 2. Get top 3 highest paid employees based on gross salary.
// grossSalary = salary + PF + TDS

// 3. Find the first employee who:
// - Has experience between 3 and 6 years
// - Works in IT department
// - Has PF greater than 250
// Return full employee object.

const finalOutput = () => {
  const result1 = employees
    .filter(
      ({ detail: { department, experience } }) =>
        department === "IT" && experience > 3,
    )
    .map(
      ({
        name,
        detail: {
          designation,
          salary: { salary, PF, TDS },
        },
      }) => ({
        name,
        designation,
        netSalary: salary - PF - TDS,
      }),
    );

  console.log(result1);

  const result2 = employees
    .map((employee) => ({
      ...employee,
      grossSalary:
        employee.detail.salary.salary +
        employee.detail.salary.PF +
        employee.detail.salary.TDS,
    }))
    .sort((a, b) => b.grossSalary - a.grossSalary)
    .slice(0, 3);

  console.log(result2);

  const result3 = employees.find(
    ({
      detail: {
        experience,
        department,
        salary: { PF },
      },
    }) => experience >= 3 && experience <= 6 && department === "IT" && PF > 250,
  );
  console.log(result3);
};
finalOutput();

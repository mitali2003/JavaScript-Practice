const employeesWithSubordinates = [
  {
    id: 1,
    name: "Shashwat Patel",
    department: "Engineering",
    salary: 80000,
    subordinates: [
      {
        id: 4,
        name: "Sanya Mirza",
        department: "Engineering",
        salary: 65000,
        subordinates: [
          {
            id: 6,
            name: "Neha Trivedi",
            department: "Marketing",
            salary: 60000,
          },
        ],
      },
      { id: 5, name: "Rohan Singh", department: "Engineering", salary: 70000 },
    ],
  },
  {
    id: 2,
    name: "Isha Vishwakarma",
    department: "Marketing",
    salary: 70000,
    subordinates: [
      { id: 6, name: "Neha Trivedi", department: "Marketing", salary: 60000 },
    ],
  },
  {
    id: 3,
    name: "Arjun Pandit",
    department: "Finance",
    salary: 90000,
    subordinates: [
      { id: 7, name: "Vikram Avasthi", department: "Finance", salary: 75000 },
      { id: 8, name: "Anaya Pande", department: "Finance", salary: 80000 },
    ],
  },
  {
    id: 9,
    name: "scarlett johansson",
    department: "Engineering",
    salary: 75000,
    subordinates: [
      {
        id: 10,
        name: "Divya Chaudhari",
        department: "Engineering",
        salary: 60000,
      },
    ],
  },
];

// Q.1 : Concatenate the names of all employees and their subordinates into a single string separated by commas.

const getNames = (employees) => {
  let names = [];

  const getNames = (employee) => {
    names.push(employee.name);
    if (employee.subordinates) {
      employee.subordinates.forEach((subordinate) => getNames(subordinate));
    }
  };

  employees.forEach((employee) => getNames(employee));
  return names.join(", ");
};
console.log(getNames(employeesWithSubordinates));

// Q.2 : Find the employee with the highest  alary (including subordinates).

const highestSalary = (employees) => {
  const allSalary = [];
  const getSalary = (employee) => {
    allSalary.push(employee.salary);
    if (employee.subordinates) {
      employee.subordinates.forEach((subordinate) => getSalary(subordinate));
    }
  };

  employees.forEach((employee) => getSalary(employee));
  return Math.max(...allSalary);
};

console.log(highestSalary(employeesWithSubordinates));

// Q.3 : Create a flattened array containing all employees names (including subordinates name).

const flattedArrayWithName = (employees) => {
  const employeeNames = [];
  const names = (employee) => {
    employeeNames.push(employee.name);
    if (employee.subordinates) {
      employee.subordinates.forEach((subordinate) => names(subordinate));
    }
  };
  employees.forEach((emplpoyee) => names(emplpoyee));
  return employeeNames;
};
console.log(flattedArrayWithName(employeesWithSubordinates));

// Q.4 : Write a recursive function to calculate the total salary for an employee and their subordinates.

const totalSalary = (employees) => {
  let total = 0;
  const getSalary = (employee) => {
    total += employee.salary;
    if (employee.subordinates) {
      employee.subordinates.forEach((subordinate) => getSalary(subordinate));
    }
  };
  employees.forEach((employee) => getSalary(employee));
  return total;
};
console.log(totalSalary(employeesWithSubordinates));

// Q.6 : Find the longest name among all employees and subordinates.

const longestName = (employees) => {
  let longestName = "";
  const getLongName = (employee) => {
    if (employee.name.length > longestName.length) {
      longestName = employee.name;
    }
    if (employee.subordinates) {
      employee.subordinates.forEach((subordinate) => getLongName(subordinate));
    }
  };
  employees.forEach((employee) => getLongName(employee));
  return longestName;
};

console.log(longestName(employeesWithSubordinates));

// Q.7 : Check if any employee has a name containing the letter 'X'. <- 'X' can be any letter.

const containsLetterX = (employees) => {
  let containsX = false;
  const checkName = (employee) => {
    if (employee.name.toLowerCase().includes("x")) {
      containsX = true;
    }
    if (employee.subordinates) {
      employee.subordinates.forEach((subordinate) => checkName(subordinate));
    }
  };
  employees.forEach((employee) => checkName(employee));
  return containsX;
};

console.log(containsLetterX(employeesWithSubordinates));

// Q.8 : Sort the employees based on their salaries in descending order.

const sortEmployeesBySalary = (employees) => {
  return employees.sort((a, b) => b.salary - a.salary);
};

console.log(sortEmployeesBySalary(employeesWithSubordinates));

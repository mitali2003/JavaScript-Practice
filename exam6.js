const tenants = [
  {
    id: 1,
    tenant: {
      name: "John Doe",
      age: 28,
      email: "johndoe@example.com",
      members: [
        { name: "Jane Doe", age: 18, relation: "daughter" },
        { name: "Mark Doe", age: 5, relation: "son" },
      ],
      salary: 4000,
    },
    house: {
      rent: 1200,
      bills: [
        { name: "electricity", amount: 1000, isDue: true },
        { name: "water", amount: 200, isDue: false },
      ],
    },
  },
  {
    id: 2,
    tenant: {
      name: "Alice Smith",
      age: 34,
      email: "alicesmith@example.com",
      members: [{ name: "Charlie Smith", age: 10, relation: "daughter" }],
      salary: 3500,
    },
    house: {
      rent: 1500,
      bills: [
        { name: "electricity", amount: 500, isDue: false },
        { name: "water", amount: 150, isDue: true },
        { name: "internet", amount: 50, isDue: true },
      ],
    },
  },
  {
    id: 3,
    tenant: {
      name: "Michael Brown",
      age: 45,
      email: "michaelb@example.com",
      members: [{ name: "Lily Brown", age: 20, relation: "daughter" }],
      salary: 5000,
    },
    house: {
      rent: 1700,
      bills: [
        { name: "electricity", amount: 1200, isDue: false },
        { name: "water", amount: 250, isDue: true },
        { name: "gas", amount: 100, isDue: false },
      ],
    },
  },
  {
    id: 4,
    tenant: {
      name: "David Lee",
      age: 39,
      email: "davidlee@example.com",
      members: [
        { name: "Emily Lee", age: 16, relation: "daughter" },
        { name: "Oliver Lee", age: 7, relation: "son" },
        { name: "Grace Lee", age: 2, relation: "daughter" },
      ],
      salary: 4500,
    },
    house: {
      rent: 1300,
      bills: [
        { name: "electricity", amount: 700, isDue: true },
        { name: "water", amount: 100, isDue: false },
      ],
    },
  },
  {
    id: 5,
    tenant: {
      name: "Sarah Turner",
      age: 30,
      email: "sarahturner@example.com",
      members: [{ name: "Nathan Turner", age: 12, relation: "son" }],
      salary: 3300,
    },
    house: {
      rent: 1100,
      bills: [
        { name: "electricity", amount: 300, isDue: false },
        { name: "water", amount: 180, isDue: true },
      ],
    },
  },
  {
    id: 6,
    tenant: {
      name: "Thomas Harris",
      age: 50,
      email: "thomasharris@example.com",
      members: [
        { name: "Sophia Harris", age: 25, relation: "daughter" },
        { name: "Lucas Harris", age: 23, relation: "son" },
        { name: "Sarah Harris", age: 10, relation: "daughter" },
      ],
      salary: 5500,
    },
    house: {
      rent: 1800,
      bills: [
        { name: "electricity", amount: 600, isDue: true },
        { name: "water", amount: 250, isDue: false },
      ],
    },
  },
  {
    id: 7,
    tenant: {
      name: "Jennifer Williams",
      age: 38,
      email: "jenniferwilliams@example.com",
      members: [
        { name: "Alex Williams", age: 14, relation: "son" },
        { name: "Ella Williams", age: 9, relation: "daughter" },
      ],
      salary: 4600,
    },
    house: {
      rent: 1600,
      bills: [
        { name: "electricity", amount: 800, isDue: false },
        { name: "water", amount: 200, isDue: true },
        { name: "gas", amount: 150, isDue: true },
      ],
    },
  },
  {
    id: 8,
    tenant: {
      name: "Daniel Johnson",
      age: 42,
      email: "danieljohnson@example.com",
      members: [{ name: "Emma Johnson", age: 19, relation: "daughter" }],
      salary: 3700,
    },
    house: {
      rent: 1400,
      bills: [
        { name: "electricity", amount: 400, isDue: true },
        { name: "water", amount: 220, isDue: false },
        { name: "phone", amount: 60, isDue: true },
      ],
    },
  },
  {
    id: 9,
    tenant: {
      name: "Olivia Clark",
      age: 27,
      email: "oliviaclark@example.com",
      members: [{ name: "Jack Clark", age: 22, relation: "brother" }],
      salary: 3100,
    },
    house: {
      rent: 1250,
      bills: [
        { name: "electricity", amount: 700, isDue: false },
        { name: "water", amount: 150, isDue: true },
      ],
    },
  },
  {
    id: 10,
    tenant: {
      name: "William Robinson",
      age: 33,
      email: "williamrobinson@example.com",
      members: [
        { name: "Rachel Robinson", age: 27, relation: "wife" },
        { name: "Sam Robinson", age: 4, relation: "son" },
        { name: "Lily Robinson", age: 2, relation: "daughter" },
      ],
      salary: 6000,
    },
    house: {
      rent: 2000,
      bills: [
        { name: "electricity", amount: 1000, isDue: true },
        { name: "water", amount: 300, isDue: false },
        { name: "gas", amount: 120, isDue: true },
        { name: "internet", amount: 75, isDue: true },
      ],
    },
  },
];

// 1. Write function that return an array of object that includes tenant name and their due amount.
// [{name:"John Doe", dueAmount:100}, ...]

// 2. Write a function that separates a list of tenants into two categories: adults and children.
// - An adult is anyone aged 18 or older.
// - A child is anyone younger than 18.
// Each category should only contain the person's name and age.

// {
//   "adults": [
//     { "name": "John Doe", "age": 28 },
//     { "name": "Jane Doe", "age": 18 },
//     ...
//   ],
//   "children": [{ "name": "Mark Doe", "age": 5 }, ...]
// }

// 3. Write a function that takes an array of tenants and returns an array of objects with each tenant's name and savings.
// [
//   { "name": "John Doe", "saving": 1600 },
//   { "name": "Alice Smith", "saving": 1300 },
//   ...
// ]

// 4. Write a function that groups the bills by their categories (e.g., electricity, water, gas, etc.), including only those bills that are isDue: true.
// {
//   electricity: [{ tenant: 'John Doe', amount: 1000 }],
//   water: [{ tenant: 'Alice Smith', amount: 150 }, { tenant: 'David Lee', amount: 100 }],
//   internet: [{ tenant: 'Alice Smith', amount: 50 }],
//   ...
// }

// 5. Find the Tenant Who Has Paid the Most in Utility Bills (electricity, water, gas, etc.)

// ==========================
// 1. Tenant Name & Due Amount
// ==========================

const findDue = () =>
  tenants.map(({ tenant: { name }, house: { bills } }) => ({
    name,
    dueAmount: bills
      .filter((b) => b.isDue)
      .reduce((sum, b) => sum + b.amount, 0),
  }));

console.log("1. Due Amounts:", findDue());

// =======================================
// 2. Separate Adults & Children
// =======================================

const groupByData = () => {
  const people = tenants.flatMap((t) => [
    { name: t.tenant.name, age: t.tenant.age },
    ...t.tenant.members,
  ]);

  return people.reduce(
    (acc, person) => {
      if (person.age >= 18) acc.adults.push(person);
      else acc.children.push(person);
      return acc;
    },
    { adults: [], children: [] },
  );
};

console.log("2. Adults & Children:", groupByData());

// ==========================
// 3. Tenant Savings
// ==========================

const findSaving = () =>
  tenants.map(({ tenant: { name, salary }, house: { rent, bills } }) => ({
    name,
    saving:
      salary -
      rent -
      bills.filter((b) => b.isDue).reduce((sum, b) => sum + b.amount, 0),
  }));

console.log("3. Savings:", findSaving());

// ========================================
// 4. Group Bills By Category (isDue only)
// ========================================

const groupByBills = () =>
  tenants.reduce((acc, { tenant: { name }, house: { bills } }) => {
    bills
      .filter((b) => b.isDue)
      .forEach((bill) => {
        if (!acc[bill.name]) acc[bill.name] = [];
        acc[bill.name].push({
          tenant: name,
          amount: bill.amount,
        });
      });

    return acc;
  }, {});

console.log("4. Bills Grouped:", groupByBills());

// =========================================
// 5. Tenant Who Paid Most Utility Bills
// =========================================

const findHighestPaid = () =>
  tenants
    .map(({ tenant, house }) => ({
      name: tenant.name,
      totalPaid: house.bills
        .filter((b) => b.isDue)
        .reduce((a, b) => a + b.amount, 0),
    }))
    .sort((a, b) => b.totalPaid - a.totalPaid)[0];

console.log("5. Highest Payer:", findHighestPaid());

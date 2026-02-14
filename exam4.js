const businesses = [
  {
    businessId: "BIZ-1001",
    name: "TechNova Solutions",
    industry: "Information Technology",
    revenue: { yearly: 25000000, currency: "INR" },
    services: [
      { name: "Web Development", employee: 20 },
      { name: "Mobile Apps", employee: 28 },
      { name: "Cloud Solutions", employee: 12 },
    ],
  },
  {
    businessId: "BIZ-1002",
    name: "GreenLeaf Organics",
    industry: "Agriculture",
    revenue: { yearly: 7200000, currency: "INR" },
    services: [
      { name: "Organic Farming", employee: 35 },
      { name: "Wholesale Supply", employee: 10 },
    ],
  },
  {
    businessId: "BIZ-1003",
    name: "UrbanMart Retail",
    industry: "Retail",
    revenue: { yearly: 98000000, currency: "INR" },
    services: [
      { name: "Supermarket Operations", employee: 180 },
      { name: "Online Grocery", employee: 60 },
      { name: "Logistics", employee: 40 },
    ],
  },
  {
    businessId: "BIZ-1004",
    name: "FinEdge Consultants",
    industry: "Finance",
    revenue: { yearly: 15000000, currency: "INR" },
    services: [
      { name: "Tax Consulting", employee: 22 },
      { name: "Investment Advisory", employee: 18 },
      { name: "Audit Services", employee: 10 },
    ],
  },
  {
    businessId: "BIZ-1005",
    name: "BuildRight Constructions",
    industry: "Real Estate",
    revenue: { yearly: 65000000, currency: "INR" },
    services: [
      { name: "Residential Projects", employee: 90 },
      { name: "Commercial Buildings", employee: 70 },
      { name: "Project Management", employee: 25 },
    ],
  },
  {
    businessId: "BIZ-1006",
    name: "HealthPlus Care",
    industry: "Healthcare",
    revenue: { yearly: 42000000, currency: "INR" },
    services: [
      { name: "Hospital Services", employee: 120 },
      { name: "Diagnostics", employee: 40 },
      { name: "Pharmacy", employee: 25 },
    ],
  },
  {
    businessId: "BIZ-1007",
    name: "EduSmart Academy",
    industry: "Education",
    revenue: { yearly: 9800000, currency: "INR" },
    services: [
      { name: "Online Courses", employee: 18 },
      { name: "Classroom Training", employee: 22 },
    ],
  },
  {
    businessId: "BIZ-1008",
    name: "MoveFast Logistics",
    industry: "Logistics",
    revenue: { yearly: 36000000, currency: "INR" },
    services: [
      { name: "Warehousing", employee: 55 },
      { name: "Transportation", employee: 80 },
      { name: "Supply Chain Management", employee: 30 },
    ],
  },
  {
    businessId: "BIZ-1009",
    name: "StyleStreet Fashion",
    industry: "Fashion",
    revenue: { yearly: 18000000, currency: "INR" },
    services: [
      { name: "Retail Stores", employee: 65 },
      { name: "Online Sales", employee: 35 },
      { name: "Design Studio", employee: 15 },
    ],
  },
  {
    businessId: "BIZ-1010",
    name: "PowerGrid Energy",
    industry: "Energy",
    revenue: { yearly: 120000000, currency: "INR" },
    services: [
      { name: "Power Generation", employee: 150 },
      { name: "Distribution", employee: 90 },
      { name: "Maintenance", employee: 45 },
    ],
  },
];

// 1. Create a function getBusinessEmployeeCount(businesses) that returns a new array of objects like:
// [
//   { businessId: "BIZ-1001", name: "TechNova Solutions", totalEmployees: 60 },
//   ...
// ]

// 2. Write a function findPremiumBusinesses(businesses, minRevenue, serviceName) that returns only business names where:
// - revenue.yearly is greater than minRevenue
// - The business offers the given serviceName

// 3. Create a function groupRevenueByIndustry(businesses) that returns an object like this:
// {
//   "Information Technology": 25000000,
//   "Agriculture": 7200000,
//   ...
// }

const getBusinessEmployeeCount = () => {
  return businesses.map(({ businessId, name, services }) => ({
    businessId,
    name,
    totalEmployee: services.reduce((acc, curr) => acc + curr.employee, 0),
  }));
};
console.log(getBusinessEmployeeCount());

const findPremiumBusinesses = (businesses, minRevenue, serviceName) => {
  return businesses
    .filter(
      ({ revenue: { yearly }, services }) =>
        yearly > minRevenue && services.some(({ name }) => name == serviceName),
    )
    .map(({ name }) => name);
};
console.log(findPremiumBusinesses(businesses, 25000000, "Web Development"));

const groupRevenueByIndustry = () => {
  return businesses.reduce((acc, { industry, revenue: { yearly } }) => {
    acc[industry] = yearly;
    return acc;
  }, {});
};
console.log(groupRevenueByIndustry());

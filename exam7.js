const shopDetails = [
  {
    id: "SHP001",
    name: "Green Fresh Mart",
    category: "Grocery",
    shop_details: {
      shop_number: "12A",
      floor_number: "Ground",
      shop_size_sqft: 850,
      shop_type: "Rented",
    },
    owner: {
      id: "OWN101",
      full_name: "Rajesh Kumar",
      phone: "9876543210",
    },
    tenant: {
      id: "TEN201",
      full_name: "Amit Verma",
      phone: "9123456780",
      lease_start_date: "2023-04-01",
      monthly_rent: 35000,
    },
    maintenance_history: [
      {
        date: "2024-02-10",
        type: "Electrical",
        cost: 4500,
        remarks: "Lighting repair",
      },
    ],
  },
  {
    id: "SHP002",
    name: "City Style Wear",
    category: "Clothing",
    shop_details: {
      shop_number: "05B",
      floor_number: "First",
      shop_size_sqft: 620,
      shop_type: "Owned",
    },
    owner: {
      id: "OWN102",
      full_name: "Neha Sharma",
      phone: "9898989898",
    },
    maintenance_history: [],
  },
  {
    id: "SHP003",
    name: "TechZone Electronics",
    category: "Electronics",
    shop_details: {
      shop_number: "22C",
      floor_number: "Ground",
      shop_size_sqft: 900,
      shop_type: "Rented",
    },
    owner: {
      id: "OWN103",
      full_name: "Suresh Patel",
      phone: "9765432109",
    },
    tenant: {
      id: "TEN202",
      full_name: "Rohit Mehta",
      phone: "9001122334",
      lease_start_date: "2022-11-15",
      monthly_rent: 42000,
    },
    maintenance_history: [
      {
        date: "2023-08-05",
        type: "Air Conditioning",
        cost: 12000,
        remarks: "AC replacement",
      },
      {
        date: "2024-01-18",
        type: "Electrical",
        cost: 3000,
        remarks: "Wiring fix",
      },
    ],
  },
  {
    id: "SHP004",
    name: "Daily Needs Store",
    category: "Grocery",
    shop_details: {
      shop_number: "03",
      floor_number: "Ground",
      shop_size_sqft: 500,
      shop_type: "Owned",
    },
    owner: {
      id: "OWN104",
      full_name: "Anil Singh",
      phone: "9812345678",
    },
    maintenance_history: [
      {
        date: "2023-12-02",
        type: "Plumbing",
        cost: 2000,
        remarks: "Leakage repair",
      },
    ],
  },
  {
    id: "SHP005",
    name: "Fashion Hub",
    category: "Clothing",
    shop_details: {
      shop_number: "14D",
      floor_number: "Second",
      shop_size_sqft: 750,
      shop_type: "Rented",
    },
    owner: {
      id: "OWN105",
      full_name: "Pooja Malhotra",
      phone: "9887766554",
    },
    tenant: {
      id: "TEN203",
      full_name: "Karan Malhotra",
      phone: "9011223344",
      lease_start_date: "2021-06-01",
      monthly_rent: 30000,
    },
    maintenance_history: [
      {
        date: "2024-03-01",
        type: "Interior",
        cost: 15000,
        remarks: "Wall repainting",
      },
    ],
  },
  {
    id: "SHP006",
    name: "Smart Gadget Store",
    category: "Electronics",
    shop_details: {
      shop_number: "19A",
      floor_number: "First",
      shop_size_sqft: 680,
      shop_type: "Owned",
    },
    owner: {
      id: "OWN106",
      full_name: "Vikram Joshi",
      phone: "9955443322",
    },
    maintenance_history: [],
  },
  {
    id: "SHP007",
    name: "Fresh Basket",
    category: "Grocery",
    shop_details: {
      shop_number: "07",
      floor_number: "Ground",
      shop_size_sqft: 560,
      shop_type: "Rented",
    },
    owner: {
      id: "OWN107",
      full_name: "Sunita Rao",
      phone: "9877001122",
    },
    tenant: {
      id: "TEN204",
      full_name: "Mahesh Rao",
      phone: "9345678901",
      lease_start_date: "2024-01-01",
      monthly_rent: 28000,
    },
    maintenance_history: [
      {
        date: "2024-01-25",
        type: "Pest Control",
        cost: 1800,
        remarks: "Quarterly pest control",
      },
      {
        date: "2023-08-05",
        type: "Air Conditioning",
        cost: 8000,
        remarks: "AC replacement",
      },
    ],
  },
  {
    id: "SHP008",
    name: "Urban Trends",
    category: "Clothing",
    shop_details: {
      shop_number: "11F",
      floor_number: "First",
      shop_size_sqft: 640,
      shop_type: "Owned",
    },
    owner: {
      id: "OWN108",
      full_name: "Ritika Jain",
      phone: "9090909090",
    },
    maintenance_history: [],
  },
  {
    id: "SHP009",
    name: "Digital World",
    category: "Electronics",
    shop_details: {
      shop_number: "25",
      floor_number: "Ground",
      shop_size_sqft: 880,
      shop_type: "Rented",
    },
    owner: {
      id: "OWN109",
      full_name: "Arun Khanna",
      phone: "9822334455",
    },
    tenant: {
      id: "TEN205",
      full_name: "Nikhil Khanna",
      phone: "9112233445",
      lease_start_date: "2020-09-10",
      monthly_rent: 45000,
    },
    maintenance_history: [
      {
        date: "2023-05-14",
        type: "Electrical",
        cost: 6000,
        remarks: "Power backup repair",
      },
    ],
  },
  {
    id: "SHP010",
    name: "Home Grocery Point",
    category: "Grocery",
    shop_details: {
      shop_number: "02B",
      floor_number: "Ground",
      shop_size_sqft: 480,
      shop_type: "Owned",
    },
    owner: {
      id: "OWN110",
      full_name: "Deepak Verma",
      phone: "9700011122",
    },
    maintenance_history: [
      {
        date: "2024-02-05",
        type: "Plumbing",
        cost: 1500,
        remarks: "Sink repair",
      },
    ],
  },
];

// 1. Find the total maintenance cost per shop category
// 2. Write a function getShopsWithHighMaintenanceCost(threshold) that takes a maintenance cost threshold as input and returns a list of shops where the total maintenance cost exceeds that threshold. Each shop in the output should include the shop id, name, category, and the total maintenance cost.
// Example Output
// [
//   {
//     id: "SHP003",
//     name: "TechZone Electronics",
//     category: "Electronics",
//     total_maintenance_cost: 15000
//   },
//   {
//     id: "SHP009",
//     name: "Digital World",
//     category: "Electronics",
//     total_maintenance_cost: 6000
//   },
//   {
//     id: "SHP005",
//     name: "Fashion Hub",
//     category: "Clothing",
//     total_maintenance_cost: 15000
//   }
// ]

const findTotalMaintenance = () => {
  return shopDetails.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = 0;
    }
    acc[curr.category] += curr.maintenance_history.reduce(
      (acc, curr) => acc + curr.cost,
      0,
    );
    return acc;
  }, {});
};
console.log(findTotalMaintenance());

const getShopsWithHighMaintenanceCost = (threshold) => {
  return shopDetails
    .map(({ id, name, maintenance_history, category }) => ({
      id,
      name,
      category,
      total_maintenance_cost: maintenance_history.reduce(
        (acc, curr) => acc + curr.cost,
        0,
      ),
    }))
    .filter(
      ({ total_maintenance_cost }) => total_maintenance_cost >= threshold,
    );
};
console.log(getShopsWithHighMaintenanceCost(5000));

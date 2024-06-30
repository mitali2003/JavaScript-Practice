const orders = [
  {
    orderId: "123",
    customerId: "123",
    deliveryDate: "01-01-2020",
    delivered: true,
    items: [
      { productId: "123", price: 55 },
      { productId: "234", price: 30 },
    ],
  },
  {
    orderId: "234",
    customerId: "234",
    deliveryDate: "01-02-2020",
    delivered: false,
    items: [{ productId: "234", price: 30 }],
  },
  {
    orderId: "345",
    customerId: "234",
    deliveryDate: "05-01-2020",
    delivered: true,
    items: [
      { productId: "567", price: 30 },
      { productId: "678", price: 80 },
    ],
  },
  {
    orderId: "456",
    customerId: "345",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "789", price: 12 },
      { productId: "890", price: 90 },
    ],
  },
  {
    orderId: "578",
    customerId: "456",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "901", price: 43 },
      { productId: "123", price: 55 },
    ],
  },
];

// Exercises

// 1) Get a list of the orders for the customer with the ID 234 that have not been delivered.
const filterData = (orders) => {
  const result = orders.filter(
    (order) => order.customerId === "234" && !order.delivered
  );
  console.log(result);
};
filterData(orders);

// 2) Create a new property on each order with the total price of items ordered.
const totalPrice = (orders) => {
  const result = orders.map((order) => ({
    ...order,
    totalPrice: order.items.reduce((prev, next) => prev + next.price, 0),
  }));
  console.log(result);
};

totalPrice(orders);

// 3) Have all the orders been delivered?
const checkStatus = (orders) => {
  const result = orders.every((order) => order.delivered);
  console.log(result);
};
checkStatus(orders);

// 4) Has the customer with ID '123' made any orders?
const checkOrder = (orders) => {
  const result = orders.some(
    (order) => order.customerId === "123" && order.delivered
  );
  console.log(result);
};
checkOrder(orders);

// 5) Have any products with an id of 123 been sold?
const totalSoldProduct = (orders) => {
  const result = orders.reduce(
    (prev, next) =>
      prev +
      next.items.reduce((acc, item) => acc + (item.productId === "123"), 0),
    0
  );
  console.log(result);
};
totalSoldProduct(orders);

//6)Find all orders with a delivery date in January 2020.
const findOrder = (orders) => {
  const januaryDateData = orders.filter((order) =>
    /01-2020$/.test(order.deliveryDate)
  );
  console.log(januaryDateData);
};
findOrder(orders);

// 7) Get a list of order IDs for customers who have at least one order with a total price greater than 50.
const highValueOrder = (orders) => {
  const result = orders
    .map((order) => ({
      ...order,
      total: order.items.reduce((prev, next) => prev + next.price, 0),
    }))
    .filter((item) => item.total > 50)
    .map((order) => order.orderId);
  console.log(result);
};
highValueOrder(orders);

//8) Find the total revenue for all delivered orders.

const findRevenue = (orders) => {
  const result = orders
    .filter((order) => order.delivered)
    .map((order) => order.items.reduce((prev, next) => prev + next.price, 0))
    .reduce((sum, price) => sum + price, 0);
  console.log(result);
};
findRevenue(orders);

//9)Get a list of all unique customer IDs who have placed orders.

const findUniqueId = (orders) => {
  const result = [...new Set(orders.map((order) => order.customerId))];
  console.log(result);
};
findUniqueId(orders);

//10) Find the most expensive order.

const findExpensiveOrder = (orders) => {
  const result = orders
    .map((order) => ({
      ...order,
      total: order.items.reduce((prev, next) => prev + next.price, 0),
    }))
    .reduce((prev, next) => (next.total > prev.total ? next : prev));
  console.log(result);
};
findExpensiveOrder(orders);

const category = [
  { id: 1, name: "Fashion" },
  { id: 2, name: "Home & Kitchen" },
  { id: 3, name: "Personal Care" },
];

const subCategory = [
  { id: 1, name: "Footwear", categoryId: 1 },
  { id: 2, name: "Skin care", categoryId: 3 },
  { id: 3, name: "Clothes", categoryId: 1 },
  { id: 4, name: "Outdoors", categoryId: 2 },
  { id: 5, name: "Appliances", categoryId: 2 },
  { id: 6, name: "Jewellery", categoryId: 1 },
  { id: 7, name: "Hair care", categoryId: 3 },
];

const products = [
  {
    id: 1,
    name: "Running Shoes",
    subCategoryId: 1,
    pricing: { price: 2500, discount: 300 },
    rating: 4.3,
    isReturnable: true,
    offers: [
      { name: "Bank Offer", discount: 200, type: "flat" },
      { name: "Cashback", discount: 5, type: "percentage" },
    ],
  },
  {
    id: 2,
    name: "Leather Sandals",
    subCategoryId: 1,
    pricing: { price: 1800, discount: 200 },
    rating: 4.1,
    isReturnable: true,
    offers: [{ name: "Festive Offer", discount: 10, type: "percentage" }],
  },
  {
    id: 3,
    name: "Hair Oil",
    subCategoryId: 7,
    pricing: { price: 399, discount: 50 },
    rating: 4.0,
    isReturnable: true,
    offers: [{ name: "Festive Offer", discount: 2, type: "percentage" }],
  },
  {
    id: 4,
    name: "Women Kurti",
    subCategoryId: 3,
    pricing: { price: 1200, discount: 250 },
    rating: 4.4,
    isReturnable: true,
    offers: [{ name: "Season Sale", discount: 15, type: "percentage" }],
  },
  {
    id: 5,
    name: "Gold Plated Necklace",
    subCategoryId: 6,
    pricing: { price: 3500, discount: 400 },
    rating: 4.5,
    isReturnable: false,
    offers: [{ name: "Bank Offer", discount: 300, type: "flat" }],
  },
  {
    id: 6,
    name: "Silver Earrings",
    subCategoryId: 6,
    pricing: { price: 1500, discount: 200 },
    rating: 4.2,
    isReturnable: false,
    offers: [{ name: "Festive Offer", discount: 10, type: "percentage" }],
  },
  {
    id: 7,
    name: "Face Wash",
    subCategoryId: 2,
    pricing: { price: 399, discount: 50 },
    rating: 4.1,
    isReturnable: true,
    offers: [{ name: "Cashback", discount: 5, type: "percentage" }],
  },
  {
    id: 8,
    name: "Moisturizing Cream",
    subCategoryId: 2,
    pricing: { price: 699, discount: 120 },
    rating: 4.3,
    isReturnable: true,
    offers: [{ name: "Bank Offer", discount: 100, type: "flat" }],
  },
  {
    id: 9,
    name: "Shampoo",
    subCategoryId: 7,
    pricing: { price: 499, discount: 80 },
    rating: 4.0,
    isReturnable: true,
    offers: [{ name: "Combo Offer", discount: 10, type: "percentage" }],
  },
  {
    id: 10,
    name: "Hair Oil",
    subCategoryId: 7,
    pricing: { price: 299, discount: 50 },
    rating: 4.2,
    isReturnable: true,
    offers: [{ name: "Cashback", discount: 5, type: "percentage" }],
  },
  {
    id: 11,
    name: "Non-Stick Cookware Set",
    subCategoryId: 5,
    pricing: { price: 3200, discount: 500 },
    rating: 4.4,
    isReturnable: true,
    offers: [{ name: "Bank Offer", discount: 300, type: "flat" }],
  },
  {
    id: 12,
    name: "Mixer Grinder",
    subCategoryId: 5,
    pricing: { price: 4500, discount: 700 },
    rating: 4.3,
    isReturnable: true,
    offers: [{ name: "Festive Offer", discount: 15, type: "percentage" }],
  },
  {
    id: 13,
    name: "Hair Oil",
    subCategoryId: 7,
    pricing: { price: 249, discount: 40 },
    rating: 3.5,
    isReturnable: true,
    offers: [{ name: "Festive Offer", discount: 50, type: "flat" }],
  },
  {
    id: 14,
    name: "Portable Gas Stove",
    subCategoryId: 4,
    pricing: { price: 2200, discount: 300 },
    rating: 4.1,
    isReturnable: true,
    offers: [{ name: "Cashback", discount: 5, type: "percentage" }],
  },
  {
    id: 15,
    name: "Sneakers",
    subCategoryId: 1,
    pricing: { price: 3000, discount: 400 },
    rating: 4.6,
    isReturnable: true,
    offers: [{ name: "Bank Offer", discount: 250, type: "flat" }],
  },
  {
    id: 16,
    name: "Jeans",
    subCategoryId: 3,
    pricing: { price: 2000, discount: 350 },
    rating: 4.3,
    isReturnable: true,
    offers: [{ name: "Combo Offer", discount: 10, type: "percentage" }],
  },
  {
    id: 17,
    name: "Hair Conditioner",
    subCategoryId: 7,
    pricing: { price: 399, discount: 70 },
    rating: 4.0,
    isReturnable: true,
    offers: [{ name: "Cashback", discount: 5, type: "percentage" }],
  },
  {
    id: 18,
    name: "Pressure Cooker",
    subCategoryId: 5,
    pricing: { price: 2800, discount: 450 },
    rating: 4.4,
    isReturnable: true,
    offers: [{ name: "Bank Offer", discount: 300, type: "flat" }],
  },
  {
    id: 19,
    name: "Sunscreen Lotion",
    subCategoryId: 2,
    pricing: { price: 599, discount: 100 },
    rating: 4.2,
    isReturnable: true,
    offers: [{ name: "Summer Sale", discount: 10, type: "percentage" }],
  },
  {
    id: 20,
    name: "Fashion Bangles",
    subCategoryId: 6,
    pricing: { price: 899, discount: 150 },
    rating: 4.1,
    isReturnable: false,
    offers: [{ name: "Festive Offer", discount: 100, type: "flat" }],
  },
];

// 1. Groups the products by their main category and subcategory.

// Example output
// {
// 	Fashion: {
//   	Clothes: [...],
//     Footwear: [...]
//   },
//   ...
// }

// 2. Write a function countReturnableProducts(products) that counts how many products are returnable and how many are not Returnable category wise.

// Output
// {
//   "Fashion": {
//     "returnable": 5,
//     "notReturnable": 3
//   },
//   "Personal Care": {
//     "returnable": 8,
//     "notReturnable": 0
//   },
//   "Home & Kitchen": {
//     "returnable": 4,
//     "notReturnable": 0
//   }
// }

// 3. Write a function getSubcategoriesByCategory(categories, subCategories) that takes two arrays—categories and subCategories—and returns an object where each key is a category name, and the value is an array of subcategory names that belong to that category.

// {
//   "Fashion": ["Footwear", "Clothes", "Jewellery"],
//   "Home & Kitchen": ["Outdoors", "Appliances"],
//   "Personal Care": ["Skin care", "Hair care"]
// }

// const groupByProductId = () => {
//   const result = category.reduce((acc, curr) => {
//     if (!acc[curr.name]) {
//       const data = subCategory.filter(
//         ({ categoryId }) => categoryId === curr.id,
//       );

//       const groupByProduct = data.reduce((acc, curr) => {
//         const subCategotyData = products.filter(
//           ({ subCategoryId }) => subCategoryId === curr.id,
//         );

//         if (!acc[curr.name]) {
//           acc[curr.name] = subCategotyData;
//         }
//         return acc;
//       }, {});

//       acc[curr.name] = groupByProduct;
//     }
//     return acc;
//   }, {});
//   return result;
// };
const groupByProductId = (categories, subCategories, products) => {
  const subCategoryMap = subCategories.reduce((acc, sc) => {
    acc[sc.id] = sc;
    return acc;
  }, {});

  return products.reduce((acc, product) => {
    const subCat = subCategoryMap[product.subCategoryId];
    const categoryObj = categories.find((c) => c.id === subCat.categoryId);

    if (!acc[categoryObj.name]) acc[categoryObj.name] = {};
    if (!acc[categoryObj.name][subCat.name]) {
      acc[categoryObj.name][subCat.name] = [];
    }

    acc[categoryObj.name][subCat.name].push(product);
    return acc;
  }, {});
};

console.log(groupByProductId());

const countReturnableProducts = (groupedProducts) =>
  Object.entries(groupedProducts).reduce((acc, [category, subcats]) => {
    const allProducts = Object.values(subcats).flat();
    const returnable = allProducts.filter(
      ({ isReturnable }) => isReturnable,
    ).length;

    acc[category] = {
      returnable,
      notReturnable: allProducts.length - returnable,
    };

    return acc;
  }, {});

console.log(countReturnableProducts());

const getSubcategoriesByCategory = () => {
  return Object.entries(groupByProductId()).reduce((acc, curr) => {
    acc[curr[0]] = Object.entries(curr[1]).map((el) => el[0]);
    return acc;
  }, {});
};
console.log(getSubcategoriesByCategory());

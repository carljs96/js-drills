// Challenge 1: Return names of people over 18, capitalized

// Given array:
const people = [
  { name: "alice", age: 17 },
  { name: "bob", age: 22 },
  { name: "charlie", age: 19 },
  { name: "dana", age: 16 },
];

// Your task:
// Filter out people under 18, then return an array of their names with the first letter capitalized.

// Expected output: ['Bob', 'Charlie']

// Write your code below:
const underAge = people
  .filter((x) => x.age > 18)
  .map((x) => x.name[0].toUpperCase() + x.name.slice(1));

console.log(underAge);

// Challenge 2: Group products by category and count how many in each category

// Given array:
const products = [
  { name: "Banana", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Apple", category: "Fruit" },
  { name: "Celery", category: "Vegetable" },
  { name: "Orange", category: "Fruit" },
];

// Your task:
// Return an object where the keys are categories, and the values are counts of how many products belong to each category.

// Expected output:
// { Fruit: 3, Vegetable: 2 }

// Write your code below:
const groupedProducts = products.reduce((acc, x) => {
  if (!acc[x.category]) {
    acc[x.category] = 1;
  } else {
    acc[x.category] += 1;
  }
  return acc;
}, {});
console.log(groupedProducts);

// Challenge 3: Remove duplicates and sort the array alphabetically

// Given array:
const fruits = ["banana", "apple", "orange", "banana", "apple", "kiwi"];

// Your task:
// Create a new array that contains only unique fruits, sorted alphabetically.

// Expected output: ['apple', 'banana', 'kiwi', 'orange']

// Write your code below:
const sortedFruits = fruits
  .reduce((acc, x) => {
    if (!acc.includes(x)) {
      acc.push(x);
    }
    return acc;
  }, [])
  .sort();
console.log(sortedFruits);

// Challenge 4: Find the first number in the array that is divisible by 7 and greater than 30

// Given array:
const numbers = [10, 21, 35, 49, 50, 70, 84];

// Your task:
// Return the first number that is divisible by 7 AND greater than 30.

// Expected output: 35

// Write your code below:
const weirdNumber = numbers.filter((x) => x % 7 === 0 && x > 30)[0];
console.log(weirdNumber);

// Challenge 5: Calculate the total price of items in the cart, applying a 10% discount only to items priced over $20

// Given array:
const cart = [
  { item: "Book", price: 15 },
  { item: "Headphones", price: 50 },
  { item: "Pen", price: 5 },
  { item: "Monitor", price: 150 },
];

// Your task:
// Calculate the total price after applying a 10% discount only to items with price > 20.

// Expected output: 198.5

// Write your code below:
const discounted =
  cart
    .filter((x) => x.price > 20)
    .map((x) => x.price * 0.9)
    .reduce((acc, x) => acc + x, 0) +
  cart.filter((x) => x.price <= 20).reduce((acc, x) => acc + x.price, 0);
console.log(discounted);

//version 2
const discountedv2 = cart.reduce(
  (acc, x) => (x.price > 20 ? acc + x.price * 0.9 : acc + x.price),
  0
);
console.log(discountedv2);

// Challenge 6: From the array of strings, return a new array with only unique strings, ignoring case.

// Given array:
const fruitz = [
  "Apple",
  "banana",
  "APPLE",
  "Banana",
  "Cherry",
  "cherry",
  "Date",
];

// Your task:
// Return an array with unique strings, ignoring case (e.g., "Apple" and "APPLE" count as duplicates).

// Expected output: ['Apple', 'banana', 'Cherry', 'Date']

// Write your code below:

const uniqueIdentifier = (arr) => {
  const clone = [];
  return arr.reduce((acc, x) => {
    if (
      !clone.includes(
        x
          .split()
          .map((x) => x.toLowerCase())
          .join()
      )
    ) {
      clone.push(
        x
          .split()
          .map((x) => x.toLowerCase())
          .join()
      );
      acc.push(x);
    }

    return acc;
  }, []);
};

console.log(uniqueIdentifier(fruitz));

// Challenge 7: From the array of users, return an array of emails for users who are verified and have a score above 80.

// Given array:
const users = [
  { email: "alice@example.com", verified: true, score: 82 },
  { email: "bob@example.com", verified: false, score: 91 },
  { email: "carol@example.com", verified: true, score: 77 },
  { email: "dave@example.com", verified: true, score: 95 },
];

// Your task:
// Filter users who are verified AND have a score > 80,
// Then return an array of their email addresses.

// Expected output: ['alice@example.com', 'dave@example.com']

// Write your code below:
const verifiedGoodScores = users
  .filter((x) => x.verified && x.score > 80)
  .map((x) => x.email);
console.log(verifiedGoodScores);

// Challenge 8: Create an array of strings describing each product's name and price, formatted to two decimal places.

// Given array:
const inventory = [
  { name: "Keyboard", price: 49.99 },
  { name: "Mouse", price: 25 },
  { name: "Webcam", price: 89.5 },
  { name: "Microphone", price: 120 },
];

// Your task:
// Return a new array of strings like:
// ['Keyboard - $49.99', 'Mouse - $25.00', ...]

// Expected output:
// ['Keyboard - $49.99', 'Mouse - $25.00', 'Webcam - $89.50', 'Microphone - $120.00']

// Write your code below:
const stringInventory = inventory.map(
  (x) => x.name + " - $" + x.price.toFixed(2)
);
console.log(stringInventory);

// Challenge 9: Return a flat array of all tags used in articles published after 2020.

// Given:
const articles = [
  { title: "JS Tips", year: 2019, tags: ["javascript", "tips"] },
  {
    title: "React Deep Dive",
    year: 2021,
    tags: ["react", "javascript", "frontend"],
  },
  {
    title: "Node.js Intro",
    year: 2022,
    tags: ["node", "backend", "javascript"],
  },
];

// Your task:
// Filter articles from after 2020,
// Then extract all their tags into a single flat array (no nested arrays).

// Expected output:
// ['react', 'javascript', 'frontend', 'node', 'backend', 'javascript']

// Write your code below:

const newArticles = articles
  .filter((x) => x.year > 2020)
  .map((x) => x.tags)
  .flat(Infinity);
console.log(newArticles);

// Challenge 10: Combine two arrays of sales data by product and sum their quantities.

// Given:
const sales1 = [
  { product: "A", quantity: 10 },
  { product: "B", quantity: 5 },
  { product: "C", quantity: 8 },
];

const sales2 = [
  { product: "A", quantity: 7 },
  { product: "B", quantity: 3 },
  { product: "D", quantity: 12 },
];

// Your task:
// Combine the sales from both arrays into one array where each product appears once,
// with the total quantity summed.

// Expected output:
// [
//   { product: "A", quantity: 17 },
//   { product: "B", quantity: 8 },
//   { product: "C", quantity: 8 },
//   { product: "D", quantity: 12 },
// ]

// Write your code below:
const combined = [...sales1, ...sales2];

const salesMap = combined.reduce((acc, sale) => {
  if (acc[sale.product]) {
    acc[sale.product] += sale.quantity;
  } else {
    acc[sale.product] = sale.quantity;
  }
  return acc;
}, {});

const mergedSales = Object.entries(salesMap).map(([product, quantity]) => ({
  product,
  quantity,
}));

console.log(mergedSales);

// Challenge 1: Count Vowels

// Your task:
// Write a function `countVowels(str)` that returns the number of vowels (a, e, i, o, u)
// in the given string. The function should be case-insensitive.

// Example:
// countVowels("Hello World") => 3
// countVowels("AEIOU xyz") => 5

// Write your code below:
const countVowels = (str) =>
  [...str.trim().toLowerCase()].filter((x) => x.match(/[aeiou]/gi)).length;

console.log(countVowels("abakadaeee"));

// Challenge 2: Find the First Non-Repeating Character

// Your task:
// Write a function `firstNonRepeatingChar(str)` that returns the **first character**
// in the string that does **not repeat** anywhere else.
// If all characters repeat, return `null`.

// The function should be case-insensitive, but return the character in its **original case**.

// Examples:
// firstNonRepeatingChar("aAbcbd") => "c"
// firstNonRepeatingChar("xXyYzZ") => null

// Write your code below:

const firstNonRepeatingChar = (str) => {
  const counts = {};

  for (const char of str.toLowerCase()) {
    counts[char] = (counts[char] || 0) + 1;
  }

  for (const char of str) {
    if (counts[char.toLowerCase()] === 1) {
      return char;
    }
  }

  return null;
};

console.log(firstNonRepeatingChar("aAbcbd"));
console.log(firstNonRepeatingChar("xXyYzZ"));

// Challenge 3: Flatten a Nested Array

// Your task:
// Write a function `flattenArray(arr)` that takes an array with nested arrays
// and returns a flat array with all elements.

// Example:
// flattenArray([1, [2, [3, 4]], 5]) => [1, 2, 3, 4, 5]

// Write your code below:
const flattenArray = (arr) => {
  return arr.flat(Infinity);
};
console.log(flattenArray([1, [2, [3, 4]], 5]));
// Challenge 4: Title Case a Sentence

// Your task:
// Write a function `titleCase(str)` that returns the input string
// with the first letter of each word capitalized and the rest in lowercase.

// Example:
// titleCase("i'm a little tea pot") => "I'm A Little Tea Pot"

// Write your code below:
const titleCase = (str) => {
  return str
    .trim()
    .split(" ")
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join(" ");
};
console.log(titleCase("i'm a little tea pot"));
// Challenge 5: Group Objects by Property

// Your task:
// Write a function `groupBy(arr, key)` that groups an array of objects by a specific key.

// Example:
// groupBy([{type: "fruit", name: "apple"}, {type: "veg", name: "carrot"}, {type: "fruit", name: "banana"}], "type")
// => { fruit: [{...}, {...}], veg: [{...}] }

// Write your code below:
const groupBy = (arr, key) => {
  return arr.reduce((acc, x) => {
    if (!acc[x[key]]) {
      acc[x[key]] = [x];
    } else {
      acc[x[key]].push(x);
    }
    return acc;
  }, {});
};
console.log(
  groupBy(
    [
      { type: "fruit", name: "apple" },
      { type: "veg", name: "carrot" },
      { type: "fruit", name: "banana" },
    ],
    "type"
  )
);

// Challenge 6: Remove Duplicate Values

// Your task:
// Write a function `removeDuplicates(arr)` that removes duplicate values
// from an array and returns a new array with only unique values.

// Example:
// removeDuplicates([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]

// Write your code below:
const removeDuplicates = (arr) => {
  return arr.reduce((acc, x) => {
    if (!acc.includes(x)) {
      acc.push(x);
    }
    return acc;
  }, []);
};
console.log(`remove duplicates: ${removeDuplicates([1, 2, 2, 3, 4, 4, 5])}`);

// Challenge 7: Anagram Checker

// Your task:
// Write a function `isAnagram(str1, str2)` that returns true if the two strings
// are anagrams of each other (case-insensitive), false otherwise.

// Example:
// isAnagram("listen", "silent") => true
// isAnagram("hello", "world") => false

// Write your code below:
const isAnagram = (first, second) => {
  return [...first].sort().join() === [...second].sort().join();
};
console.log("Anagrams");
console.log(isAnagram("ada", "adasdasd"));
console.log(isAnagram("silent", "silent"));
// Challenge 8: Chunk an Array

// Your task:
// Write a function `chunkArray(arr, size)` that splits an array into chunks
// of the specified size and returns them in a new array.

// Example:
// chunkArray([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

// Write your code below:
console.log("CHUNKYCHUNKY");
const chunkArray = (arr, size) => {
  const returnArr = [];
  for (let index = 0; index < arr.length; index += size) {
    returnArr.push(arr.slice(index, index + size));
  }
  return returnArr;
};
console.log(chunkArray([1, 2, 3, 4, 5], 2));
// Challenge 9: FizzBuzz (Classic)

// Your task:
// Write a function `fizzBuzz(n)` that prints numbers from 1 to n,
// but for multiples of 3, print "Fizz", for multiples of 5 print "Buzz",
// and for multiples of both 3 and 5 print "FizzBuzz".

// Example:
// fizzBuzz(5)
// Output:
// 1
// 2
// Fizz
// 4
// Buzz

// Write your code below:
const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(10);

//Challenge 10: Get the Most Popular Product

// You’re given a sales object where keys are product names,
// and values are quantities sold.

// Your task:
// 1. Convert the object into an array of objects like { product, quantity }
// 2. Find the product with the highest quantity
// 3. Return that object

// ✅ Expected Output for the given input:
// { product: "C", quantity: 70 }

const sales = {
  A: 50,
  B: 25,
  C: 70,
  D: 40,
};

// Your code here:
const highest = Object.entries(sales).reduce((x, y) => (x[1] > y[1] ? x : y));

const highestSale = { product: highest[0], quantity: highest[1] };
console.log(highestSale);

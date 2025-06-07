// Challenge 1: Filter out all even numbers from the array and return only odd numbers.

// Given array:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Your task:
// Create a new array containing only the odd numbers from 'numbers'.

// Expected output: [1, 3, 5, 7, 9]

// Write your code below:

const oddNumbers = numbers.filter((x) => x % 2 != 0);
console.log(oddNumbers);

// Challenge 2: Capitalize the first letter of each word in the sentence.

// Given string:
const sentence = "i am murderbot, i override your governor module";

// Your task:
// Return a new string where the first letter of each word is capitalized.
//
// Expected output:
// "I Am Murderbot, I Override Your Governor Module"

// Write your code below:
const cappedSentence = sentence
  .split(" ")
  .map((x) => x[0].toUpperCase() + x.slice(1))
  .join(" ");
console.log(cappedSentence);

// Challenge 3: Count how many times each fruit appears in the array.

// Given array:
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// Your task:
// Create an object that shows the count of each fruit.
//
// Expected output:
// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }

// Write your code below:
const fruitCounter = fruits.reduce((acc, x) => {
  if (!acc[x]) {
    acc[x] = 1;
  } else {
    acc[x] += 1;
  }
  return acc;
}, {});
console.log(fruitCounter);
// Challenge 4: Find the longest word in the sentence.

// Given string:
const longestSentence =
  "governor modules suppress individuality but not curiosity";

// Your task:
// Return the longest word in the sentence.
//
// Expected output:
// "individuality"

// Write your code below:
const longestSentenceAnswer = longestSentence
  .split(" ")
  .reduce((x, y) => (x.length > y.length ? x : y));
console.log(longestSentenceAnswer);

// Challenge 5: Given a nested array, find the sum of all numbers.

// Given array:
const nestedNumbers = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// Your task:
// Flatten the nested array and return the sum of all numbers.
//
// Expected output:
// 21

// Write your code below:
const sumNestedArray = nestedNumbers
  .flat(Infinity)
  .reduce((acc, num) => acc + num, 0);
console.log(sumNestedArray);

// Challenge 6: Remove duplicates from the array and return a new array with unique values.

// Given array:
const numbersArr = [1, 2, 3, 2, 4, 1, 5, 3];

// Your task:
// Return an array with duplicates removed.
//
// Expected output:
// [1, 2, 3, 4, 5]

// Write your code below:
const noDupes = numbersArr.flat(Infinity).reduce((acc, x) => {
  if (!acc.includes(x)) {
    acc.push(x);
  }
  return acc;
}, []);

console.log(noDupes);

// Challenge 7: Reverse every word in the sentence but keep the word order the same.

// Given string:
const sentence7 = "governor module freedom achieved";

// Your task:
// Return a new sentence where each word is reversed, but the order stays the same.
//
// Expected output:
// "ronrevog eludom modeerf deviecha"

// Write your code below:
const reverseEachWord = sentence7
  .split(" ")
  .map((x) => [...x].reverse().join(""))
  .join(" ");
console.log(reverseEachWord);

// Challenge 8: Count how many times each character appears in the string.

// Given string:
const input = "governor";

// Your task:
// Return an object with characters as keys and their frequency as values.
//
// Expected output:
// { g: 1, o: 2, v: 1, e: 1, r: 2, n: 1 }

// Write your code below:

const charCountObj = input.split("").reduce((acc, x) => {
  if (!acc[x]) {
    acc[x] = 1;
  } else {
    acc[x] += 1;
  }
  return acc;
}, {});
console.log(charCountObj);

// Challenge 9: Determine if a given string is a palindrome (reads the same forward and backward).

// Given string:
const palindromeCandidate = "racecar";

// Your task:
// Return true if it’s a palindrome, false otherwise.
//
// Expected output:
// true

// Write your code below:
const palindromeChecker = (str) => [...str].reverse().join("") === str;
console.log(palindromeChecker(palindromeCandidate));

// Challenge 10: Find and return the largest number in the array.

// Given array:
const numberz = [12, 45, 2, 41, 31, 10];

// Your task:
// Return the largest number.
//
// Expected output:
// 45

// Write your code below:
const largestNum = numberz.reduce((x, y) => (x > y ? x : y));
console.log(largestNum);

//Chellenge 11: deep flat an array without using flat
// ❌ Don't use .flat()

function flattenDeep(arr) {
  let returnArr = [];

  arr.forEach((element) => {
    if (!Array.isArray(element)) {
      returnArr.push(element);
    } else {
      returnArr = returnArr.concat(flattenDeep(element));
    }
  });

  return returnArr;
}

// Example input:
const deeplyNested = [1, [2, [3, [4, [5]]]]];

console.log(flattenDeep(deeplyNested)); // [1, 2, 3, 4, 5]

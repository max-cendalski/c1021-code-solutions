const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(number => number * 2);
const prices = numbers.map(number => `$${Number.parseFloat(number).toFixed(2)}`);
const upperCased = languages.map(word => word.toUpperCase());
const firstLetter = languages.map(word => word[0]);

console.log(doubled);
console.log(prices);
console.log(upperCased);
console.log(firstLetter);

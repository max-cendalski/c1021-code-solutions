var num1 = 1;
var num2 = 2;
var num3 = 3;

var maximumValue = Math.max(num1, num2, num3);

console.log('value of maximumValue: ', maximumValue);

var heroes = ['hulk', 'superman', 'spiderman', 'groot'];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('value of randomHero :', randomHero);

var library = [
  {
    title: 'Black Arrow',
    author: 'Robert Louis Stevenson'
  },
  {
    title: 'Murderbot Diary',
    author: 'Martha Wells'
  },
  {
    title: 'The Name of the Rose',
    author: 'Umberto Eco'
  }
];

var lastBook = library.pop();
console.log('value of the lastBook :', lastBook);

var firstBook = library.shift();
console.log('value of the firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library: ', library);

var fullName = 'Max Cendalski';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
firstName.toUpperCase();
var sayMyFirstName = firstName.toUpperCase();
console.log('value of sayMyName: ', sayMyFirstName);

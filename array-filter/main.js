const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

var evenNumbers = numbers.filter(number => number % 2 === 0);

var overFive = numbers.filter(number => number > 5);

var startWithE = names.filter(word => word.startsWith('E'));

var haveD = names.filter(word => word.toLowerCase().includes('d'));

console.log(evenNumbers);
console.log(overFive);
console.log(startWithE);
console.log(haveD);

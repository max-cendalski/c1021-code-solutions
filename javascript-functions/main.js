var person = {
  firstName: 'Max',
  lastName: 'Cendalski'
};

var array = ['apple', 'banana', 'avocado'];

function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

function greet(name) {
  return 'Hey, ' + name;
}

function getArea(width, height) {
  return width * height;
}

function getFirstName(person) {
  return person.firstName;
}

function getLastElement(array) {
  return array.length - 1;
}

console.log('function convertMinutesToSeconds output: ', convertMinutesToSeconds(5));
console.log('function greet output:', greet('Max'));
console.log('function getArea output: ', getArea(6, 6));
console.log('function firstName output: ', getFirstName(person));
console.log('function getLastElement output: ', getLastElement(array));

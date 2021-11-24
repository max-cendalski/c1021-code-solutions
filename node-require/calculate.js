const add = require('./add');
const substract = require('./substract');
const multiply = require('./multiply');
const divide = require('./divide');

if (process.argv[3] === 'add') {
  console.log(add(parseInt(process.argv[2]), parseInt(process.argv[4])));
}
if (process.argv[3] === 'substract') {
  console.log(substract(parseInt(process.argv[2]), parseInt(process.argv[4])));
}
if (process.argv[3] === 'multiply') {
  console.log(multiply(parseInt(process.argv[2]), parseInt(process.argv[4])));
}
if (process.argv[3] === 'divide') {
  console.log(divide(parseInt(process.argv[2]), parseInt(process.argv[4])));
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

var sum = numbers.reduce((previousNumber, currentNumber) => previousNumber + currentNumber);
var product = numbers.reduce((previousNumber, currentNumber) => previousNumber * currentNumber);

const balance = account.reduce((balance, transaction) => {
  if (transaction.type === 'deposit') {
    return balance + transaction.amount;
  }
  return balance - transaction.amount;
}, 0);

const composite = traits.reduce((composite, trait) => {
  return Object.assign(composite, trait);
}, {});

console.log(sum);
console.log(product);
console.log(balance);
console.log(composite);

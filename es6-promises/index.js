const takeAChance = require('./take-a-chance');

const myName = takeAChance('Max');

myName
  .then(resolve => { console.log(resolve); })
  .catch(error => { console.log(error.message); });

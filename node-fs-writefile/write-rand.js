var fs = require('fs');

var number = Math.random().toString();

fs.writeFile('random.txt', number, err => {
  if (err) throw err;
});

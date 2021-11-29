var fs = require('fs');

var data = process.argv[2];
fs.writeFile('note.txt', data, err => {
  if (err) throw err;
});

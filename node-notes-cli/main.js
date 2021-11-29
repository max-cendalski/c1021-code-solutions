var fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) throw err;

  if (process.argv[2] === 'read') {
    var thingsToDo = JSON.parse(data);
    for (var key in thingsToDo.notes) {
      console.log(key + '.' + thingsToDo.notes[key]);
    }
  }
});

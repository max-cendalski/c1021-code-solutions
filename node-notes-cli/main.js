var fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {

  function write(data) {
    var dataStringify = JSON.stringify(thingsToDo, null, 2);
    fs.writeFile('data.json', dataStringify, err => {
      if (err) throw err;
    });
  }

  if (err) throw err;
  var thingsToDo = JSON.parse(data);
  if (process.argv[2] === 'read') {
    for (var key in thingsToDo.notes) {
      console.log(key + '.' + thingsToDo.notes[key]);
    }
  } if (process.argv[2] === 'create') {
    thingsToDo.notes[thingsToDo.nextId] = process.argv[3];
    thingsToDo.nextId++;
    write(thingsToDo);
  } if (process.argv[2] === 'delete') {
    delete (thingsToDo.notes[process.argv[3]]);
    write(thingsToDo);
  } if (process.argv[2] === 'update') {
    thingsToDo.notes[process.argv[3]] = process.argv[4];
    write(thingsToDo);
  }
});

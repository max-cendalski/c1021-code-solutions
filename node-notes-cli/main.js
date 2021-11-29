var fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) throw err;
  var thingsToDo = JSON.parse(data);
  if (process.argv[2] === 'read') {
    for (var key in thingsToDo.notes) {
      console.log(key + '.' + thingsToDo.notes[key]);
    }
    console.log(thingsToDo.nextId);
  } if (process.argv[2] === 'create') {
    thingsToDo.notes[thingsToDo.nextId] = process.argv[3];
    thingsToDo.nextId++;
    var dataStringify = JSON.stringify(thingsToDo, null, 2);
    fs.writeFile('data.json', dataStringify, err => {
      if (err) throw err;
    });
  }
});

/*
{
  "nextId": 5,
  "notes": {
    "1": "The event loop is how a JavaScript runtime pushes asynchronous callbacks onto the stack once the stack is cleared.",
    "2": "Prototypal inheritance is how JavaScript objects delegate behavior.",
    "3": "In JavaScript, the value of `this` is determined when a function is called; not when it is defined.",
    "4": "A closure is formed when a function retains access to variables in its lexical scope."
  }
} */

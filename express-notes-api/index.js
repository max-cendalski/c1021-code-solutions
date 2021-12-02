var express = require('express');
var app = express();
express.json();
app.use(express.json());

var notes = {
  1: {
    content: 'The event loop is how a JavaScript runtime pushes asynchronous callbacks onto the stack once the stack is cleared.',
    id: 1
  },
  2: {
    content: 'Prototypal inheritance is how JavaScript objects delegate behavior.',
    id: 2
  },
  3: {
    content: 'In JavaScript, the value of `this` is determined when a function is called; not when it is defined.',
    id: 3
  },
  4: {
    content: 'A closure is formed when a function retains access to variables in its lexical scope.',
    id: 4
  }
};
var nextId = 1;

app.get('/api/notes', (req, res) => {
  var notesArray = [];
  for (var key in notes) {
    notesArray.push(notes[key]);
  }
  res.json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  var id = parseInt(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a number' });
  } else if (!notes[id]) {
    res.status(404).json({ error: "can't find note with id " + id });
  } else {
    res.json(notes[id]);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is up on port 3000');
});

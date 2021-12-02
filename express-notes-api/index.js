var express = require('express');
var fs = require('fs');
var app = express();
express.json();
app.use(express.json());
var notesObject = require('./data.json');

app.get('/api/notes', (req, res) => {
  var notesArray = [];
  for (var key in notesObject.notes) {
    notesArray.push(notesObject.notes[key]);
  }
  res.json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  var id = parseInt(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!notesObject.notes[id]) {
    res.status(404).json({ error: "can't find note with id " + id });
  } else {
    res.json(notesObject.notes[id]);
  }
});

app.post('/api/notes', (req, res) => {
  var newNoteObject = req.body;
  if (!newNoteObject.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    newNoteObject.id = notesObject.nextId;
    notesObject.notes[newNoteObject.id] = newNoteObject;
    notesObject.nextId++;
    var objectToSave = JSON.stringify(notesObject);
    fs.writeFile('data.json', objectToSave, { flag: 'r+' }, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occuried' });
      } else {
        res.status(201).json(newNoteObject);
      }
    });

  }
});

app.delete('/api/notes/:id', (req, res) => {
  var id = parseInt(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!notesObject.notes[id]) {
    res.status(404).json({ error: "can't find note with id " + id });
  } else {
    delete notesObject.notes[id];
    res.status(204).json();
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is up on port 3000');
});

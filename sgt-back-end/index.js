const express = require('express');
const pg = require('pg');
const app = express();
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
      select *
      from "grades"`;

  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.post('/api/grades', (req, res) => {
  const text = 'INSERT INTO grades(name, course, score) VALUES($1,$2,$3) RETURNING *';
  const values = [req.body.name, req.body.course, req.body.score];

  if (!values) {
    res.status(400).json({ error: 'missing data' });
  } else {
    db.query(text, values)
      .then(result => {
        res.status(200).json(result.row);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'unexpected error occured' });
      });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server is up on port 3000');
});

/* var express = require('express');
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
    var count = notesObject.nextId;
    notesObject.notes[count] = newNoteObject;
    newNoteObject.id = count;
    notesObject.notes[count] = newNoteObject;
    notesObject.nextId++;
    var objectToSave = JSON.stringify(notesObject);
    fs.writeFile('./data.json', objectToSave, err => {
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
    var objectToSave = JSON.stringify(notesObject);
    fs.writeFile('./data.json', objectToSave, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occuried' });
      } else {
        res.status(204).json({ notesObject });
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  var id = parseInt(req.params.id);
  if (!Number.isInteger(id) || !req.body) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!notesObject.notes[id]) {
    res.status(404).json({ error: 'No matching note' });
  } else {
    notesObject.notes[id].content = req.body.content;
    var updatedObject = notesObject.notes[id];
    var objectToSave = JSON.stringify(notesObject);
    fs.writeFile('./data.json', objectToSave, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occuried' });
      } else {
        res.status(200).json(updatedObject);
      }
    });
  }
});

 */

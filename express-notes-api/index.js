var express = require('express');
var app = express();
express.json();
app.use(express.json());

var notes = {};

app.get('/api/notes', (req, res) => {
  var notesArray = [];
  for (var key in notes) {
    notesArray.push(notes[key]);
  }
  res.json(notesArray);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is up on port 3000');
});

var express = require('express');
var app = express();
express.json();
app.use(express.json());

var nextId = 1;
var grades = {};

app.get('/api/grades', (req, res) => {
  var gradesArray = [];
  for (var key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  res.setHeader('content-type', 'application/json', 'charset Utf-8');
  var gradeObject = req.body;
  gradeObject.id = nextId;
  grades[nextId] = gradeObject;
  nextId++;
  res.status(201);
  res.json(gradeObject);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is up on port 3000');
});

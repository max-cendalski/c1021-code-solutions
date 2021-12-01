var express = require('express');
var app = express();

var nextId = 1;
var grades = {};

app.get('/api/grades', (req, res) => {
  var gradesArray = [];
  for (var key in grades) {
    gradesArray.push(grades[key]);
  }
  res.send(gradesArray);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is up on port 3000');
});

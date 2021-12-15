const express = require('express');
const path = require('path');
const app = express();

const pub = path.join(__dirname, 'public');
console.log(pub);
const stat = app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send(stat);
});

app.listen(3000);

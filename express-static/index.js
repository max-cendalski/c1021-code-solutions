const express = require('express');
const path = require('path');
const app = express();

const pub = path.join(__dirname, 'public');
console.log(pub);

const stat = express.static(pub);
app.use(stat);

app.get('/', function (req, res) {
  res.send(stat);
});

app.listen(3000);

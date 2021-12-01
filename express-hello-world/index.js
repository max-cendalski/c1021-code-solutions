var express = require('express');
var app = express();

app.use(function (req, res) {
  res.set('Content-Type', 'text/html');
  res.send('Hello World!');
});

app.listen(3000);

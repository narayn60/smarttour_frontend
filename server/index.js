// server/index.js

import express from 'express';
import path from 'path';

var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000');
});

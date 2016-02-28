// server/index.js
'use strict';

import express from 'express';
import path from 'path';
import compression from 'compression';

var app = express();

app.use(compression());

// serve our static stuff
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile("index.html");
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000');
});

// server/index.js
'use strict';

import express from 'express';
import path from 'path';
import compression from 'compression';
import React from 'react';
import { renderToString } from 'react-dom/server';
// add these to match the url to routes and then render
import { match, RouterContext } from 'react-router';
import routes from '../src/js/pages/routes';

var app = express();

app.use(compression());

// serve our static stuff
app.use(express.static('public'));

app.get('*', function(req, res) {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (props) {
      const appHtml = renderToString(<RouterContext {...props}/>);
      res.send(renderPage(appHtml));
    } else {
      res.status(404).send('Not Found');
    }
  });
});

function renderPage(appHtml) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <link href="css/vendor.min.css" rel="stylesheet">
    <link href="css/bundle.css" rel="stylesheet">
    <link href="fonts/fonts.css" rel="stylesheet">
    </head>
    <body>
    <div id=app>${appHtml}</div>
    </body>
    <script src="bundle.min.js"></script>
    </html>
  `
};

var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log('Example app listening on port ' + PORT);
});

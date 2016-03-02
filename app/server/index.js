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

// import auth_setup from './auth';
import authConfig from './config/auth';


import expressSession from 'express-session';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import passportGoogle from 'passport-google-oauth';

import alt from 'alt_base';

import Iso from 'iso';

import AuthActions from 'AuthActions';



const server = global.server = express();

server.use(compression());

// Setup passport and authentication
// auth_setup(server);

server.use(cookieParser('secret'));
server.use(expressSession()); // server.use(expressSession({
//   // secret: serverConfig.crypto,
//   secret: "dkshljfhs", //TODO change this soon
//   cookie: { secure: false },
// }));
server.use(passport.initialize());
server.use(passport.session());

const getInfoFromUser = function setupUserInfo(user) {
  /* eslint-disable prefer-const */
  let info = {
    id: user.id,
    provider: user.provider,
    name: user.displayName,
    logo: '',
    token: user.token,
  };
  /* eslint-enable prefer-const */

  if (typeof user.photos !== 'undefined') {
    info.logo = user.photos[0].value || '';
  }

  return info;
};


//
// Passport session setup
//
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  // TODO stirict by user_id in real apps
  // WARNING check obj
  done(null, obj);
});

//
// GoogleStrategy within Passport
//
passport.use(new passportGoogle.OAuth2Strategy({
  clientID: authConfig.googleAuth.clientID,
  clientSecret: authConfig.googleAuth.clientSecret,
  callbackURL: authConfig.googleAuth.callbackURL
}, (accessToken, refreshToken, profile, done) => {
  const result = Object.assign(profile, { token: accessToken });
  return done(null, getInfoFromUser(result));
}));

//
// place in config etc.
// const routeToLogin = '/login';
//
const routeToPrivate = '/about';

//
// redirect users and setup cookie
//
const socialUserRedirect = (req, res) => {
  if (typeof req.user !== 'undefined') {
    res.cookie('user', JSON.stringify(req.user));
  }
  return res.redirect(routeToPrivate);
};


// GET /auth/google
server.get('/auth/google',
           passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

server.get('/auth/google/callback',
           passport.authenticate('google'),
           socialUserRedirect);


//
// close session
//
server.get('/logout', (req, res) => {
  req.session.destroy( (err) => {
    res.clearCookie('user'); // TODO: Should this be in a callback?
    return res.redirect('/');
  });
});

//
// static files
//
server.use(express.static('public'));

server.get('*', async (req, res, next) => {
  // auth first
  if (req.user) {
    AuthActions.login(req.user);
  }

  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (props) {
      let serverHtml = Iso.render(renderToString(<RouterContext {...props}/>), alt.flush());
      res.send(renderPage(serverHtml));
    } else {
      res.status(404).send('Not Found');
    }
  });
});

function renderPage(serverHtml) {
  return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset=utf-8/>
            <title>My First React Router App</title>
            <link href="css/vendor.min.css" rel="stylesheet">
            <link href="css/bundle.css" rel="stylesheet">
            <link href="fonts/fonts.css" rel="stylesheet">
            <style type="text/css" >
            .js #fouc { display: none; }
            </style>
            <script type="text/javascript">
            document.documentElement.className = 'js';
            </script>
        </head>
        <body>
            <div id="fouc">
                <div id=app>
                  ${serverHtml}
                </div>
            </div>
        </body>
        <script src="bundle.min.js"></script>
        <script type="text/javascript">
        document.getElementById("fouc").style.display="block";
        </script>
    </html>
  `;
};

var PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log('Example server listening on port ' + PORT);
});

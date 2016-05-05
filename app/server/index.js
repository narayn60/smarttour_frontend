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

import authConfig from './config/auth';


import cookieParser from 'cookie-parser';
import passport from 'passport';
import passportGoogle from 'passport-google-oauth';

import alt from 'alt_base';

import Iso from 'iso';

import AuthActions from 'AuthActions';

var session = require('express-session');
var RedisStore = require('connect-redis')(session);


const server = global.server = express();

// server.use(history({
//   rewrites: [
//     {
//       from: /\/auth\/google\/callback.*$/,
//       to: function(context) {
//         console.log("CONETEXT", context);
//         return context.parsedUrl.path;
//       }
//     },
//     { from: /\/auth\/google/, to: '/auth/google'},
//     { from: /\/user/, to: '/user'},
//     { from: /\/logout/, to: '/logout'},
//     { from: /\//, to: '/'}
//   ]
// }));
server.use(compression());

// Setup passport and authentication
// auth_setup(server);
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; //TODO: Make sure this is only development


const redis_options = {
  'host': 'redis'
};

server.use(cookieParser('secret'));
server.use(session({
  store: new RedisStore(redis_options),
  secret: 'keyboard cat'
}));
/* server.use(session()); */
// server.use(expressSession()); // server.use(expressSession({
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
    id_token: user.id_token,
    refresh_token: user.refresh_token,
    token: user.token,
    email: user.emails[0].value
  };
  /* eslint-enable prefer-const */

  // if (typeof user.photos !== 'undefined') {
  //   info.logo = user.photos[0].value || '';
  // }

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
}, (accessToken, refreshToken, X, profile, done) => {
  const result = Object.assign(profile, { id_token: X.id_token,
                                          token: accessToken,
                                          refresh_token: refreshToken
                                        });
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
    AuthActions.login(req.user);
    res.cookie('user', JSON.stringify(req.user));
  }
  return res.redirect(routeToPrivate);
};


// GET /auth/google
server.get('/auth/google',
           passport.authenticate('google', {
             accessType: 'offline',
             prompt: 'consent',
             scope: [
               'https://www.googleapis.com/auth/plus.login',
               'https://www.googleapis.com/auth/userinfo.email',
               'https://www.googleapis.com/auth/userinfo.profile',
               'openid'
             ]
           })
);

server.get('/auth/google/callback',
           passport.authenticate('google'),
           socialUserRedirect);


server.get('/loaderio-d59ee75dfc1c1fe8f0a2013f4f4472bc', (req, res) => {
  res.set({"Content-Disposition":"attachment; filename=\"loaderio-d59ee75dfc1c1fe8f0a2013f4f4472bc.txt\""});
  res.send("loaderio-d59ee75dfc1c1fe8f0a2013f4f4472bc");
});

//
// close session
//
server.get('/logout', (req, res) => {
  req.session.destroy( (err) => {
    res.clearCookie('user'); // TODO: Should this be in a callback?
    return res.redirect('/');
  });
});

// maintain session
server.get('/user', function(req, res, next) {
  if(req.user) return res.json(req.user);
  res.json({error: 'not logged in'});
});

//
// static files
//
server.use(express.static('public'));

// const skipServerRender = (req, res) => {
//   renderPage(null);
// };

// server.get('/browse', skipServerRender);

server.get('*', (req, res, next) => {

  // auth first
  if (req.user) {
    AuthActions.login(req.user);
  }

  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (props) {
      let serverHtml = Iso.render(renderToString(<RouterContext {...props}/>), alt.flush());
      // let serverHtml = render(renderToString(<RouterContext {...props}/>));
      res.status(200).send(renderPage(serverHtml));
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
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Jaffna Tour</title>
            <link href="/css/vendor.min.css" rel="stylesheet">
            <link href="/css/bundle.css" rel="stylesheet">
            <link href="/fonts/fonts.css" rel="stylesheet">
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
        <script src="/bundle.min.js"></script>
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

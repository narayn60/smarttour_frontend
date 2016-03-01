import expressSession from 'express-session';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import passportGoogle from 'passport-google-oauth';

export default function auth_setup(server) {

  server.use(cookieParser());
  server.use(expressSession({
    // secret: serverConfig.crypto,
    secret: "dkshljfhs", //TODO change this soon
    cookie: { secure: false },
  }));
  server.use(passport.initialize());
  server.use(passport.session());
}

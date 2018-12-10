const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./../models/User');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password'
    },
    (username, password, done) => {
      User.findAuth({ username })
        .then((user, err) => {
          // Something went wrong!
          if (err) return done(err);

          // Invalid user
          if (!user || !user.validPassword(password)) {
            return done(null, false, {
              error: 'Username or password is invalid!'
            });
          }

          return done(null, user);
        })
        .catch(done);
    }
  )
);

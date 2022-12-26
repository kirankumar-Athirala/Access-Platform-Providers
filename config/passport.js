const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Load User model
const User = require('../models/User');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// DB Config
//const db = 'mongodb://agile:agileproject@localhost:3000/provider-a?authSource=admin';

// Connect to MongoDB
//mongoose
//  .connect(
//    db,
//    { useNewUrlParser: true ,useUnifiedTopology: true}
//  )
//  .then(() => console.log('MongoDB Connected'))
//  .catch(err => console.log(err));


module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
      // Match user
      User.findOne({
        username: username
      }).then(user => {
        if (!user) {
          return done(null, false, { message: 'That username is not registered' });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
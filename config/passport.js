const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
var usertest= true;
// Load User model
const User = require('../models/User');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'username' },  async (username, password, done) => {
      // Match user
      const founduser_a = await User.Provider_A.findOne({username: username});
      const founduser_b = await User.Provider_B.findOne({username: username});
      const founduser_c = await User.Provider_C.findOne({username: username});
      const founduser_d = await User.Provider_D.findOne({username: username});
      if (founduser_a) {
       // Match password
      bcrypt.compare(password, founduser_a.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          return done(null, founduser_a);
        } else {
          return done(null, false, { message: 'Password incorrect' });
        }
      });
      }

      else if (founduser_b) {
        // Match password
       bcrypt.compare(password, founduser_b.password, (err, isMatch) => {
         if (err) throw err;
         if (isMatch) {
           return done(null, founduser_b);
         } else {
           return done(null, false, { message: 'Password incorrect' });
         }
       });
       }

       else if (founduser_c) {
        // Match password
       bcrypt.compare(password, founduser_c.password, (err, isMatch) => {
         if (err) throw err;
         if (isMatch) {
           return done(null, founduser_c);
         } else {
           return done(null, false, { message: 'Password incorrect' });
         }
       });
       }

       else if (founduser_d) {
        // Match password
       bcrypt.compare(password, founduser_d.password, (err, isMatch) => {
         if (err) throw err;
         if (isMatch) {
           return done(null, founduser_d);
         } else {
           return done(null, false, { message: 'Password incorrect' });
         }
       });
       }
       else{
         return done(null, false, { message: 'That username is not registered' });
       }

    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser( function(id, done) {

    User.Provider_A.findById(id)
    .exec((err, user) => {
      if (user) done(err, user);
  })

  User.Provider_B.findById(id)
  .exec((err, user) => {
    if (user) done(err, user);
})

User.Provider_C.findById(id)
  .exec((err, user) => {
    if (user) done(err, user);
})

User.Provider_D.findById(id)
  .exec((err, user) => {
    if (user) done(err, user);
})
    
  });
};
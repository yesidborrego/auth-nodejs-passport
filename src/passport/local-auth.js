const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  let findUser = await User.findById(id);
  done(null, findUser);
})

passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  let findUser = await User.findOne({email});
  if(findUser) {
    return done(null, false, req.flash('signupMsg', 'The email already exist.'));
  }
  let user = new User();
  user.email = email,
  user.password = user.encryptPassword(password);
  await user.save();
  done(null, user);
}));
const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/user');

// GET - request
router.get('/', userController.home);
router.get('/signup', userController.getSignup);
router.get('/login', userController.getLogin);
router.get('/profile', checkAuthenticated, userController.getProfile);
router.get('/logout', userController.getLogout);



// POST - request
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: true
  }
));

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  passReqToCallback: true
}));

function checkAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

router.get('*', userController.get404);

module.exports = router;
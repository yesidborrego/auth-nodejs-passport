const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/user');

// GET - request
router.get('/', userController.home);
router.get('/signup', userController.getSignup);
router.get('/login', userController.getLogin);
router.get('/profile', userController.getProfile);
router.get('/logout', userController.getLogout);



// POST - request
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: true
  }
));

router.post('/login', (req, res) => {
  res.status(200).send('Login');
});

router.get('*', userController.get404);

module.exports = router;
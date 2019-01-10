const passport = require('passport');

// GET - controllers
function home(req, res){
  res.render('home');
}

function getSignup(req, res) {
  res.render('signup');
}

function getLogin(req, res) {
  res.render('login');
}

function getProfile(req, res) {
  res.render('profile');
}

function getLogout(req, res) {
  req.logout();
  res.redirect('/');
}

function get404(req, res) {
  res.render('404');
}

module.exports = {
  home,
  getSignup,
  getLogin,
  getProfile,
  getLogout,
  get404,
}
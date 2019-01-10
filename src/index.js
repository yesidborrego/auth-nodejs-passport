const path = require('path');
const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const engine = require('ejs-mate');
const passport = require('passport');
const flash = require('connect-flash');

// Initializing
const app = express();
const routes = require('./routes/routes'); // Importing Routes
require('./database'); // Importing MongoDB connection
require('./passport/local-auth'); // Importing configuration passport
const { sessionConfig } = require('./keys'); // Importing session configuration

// Settings
app.set('port', process.env.PORT || 3000);
app.engine('ejs', engine);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(session(sessionConfig));
app.use(flash())
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  app.locals.signupMsg = req.flash('signupMsg');
  app.locals.loginMsg = req.flash('loginMsg');
  app.locals.user = req.user;
  next();
});

// Routes
app.use('/', routes);

// Server listeing
app.listen(app.get('port'), () => {
  console.log(`Server Node on localhost:${app.get('port')}`);
});
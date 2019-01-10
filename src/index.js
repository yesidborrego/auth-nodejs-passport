const path = require('path');
const express = require('express');
const morgan = require('morgan');
const engine = require('ejs-mate');

// Initializing
const app = express();
const routes = require('./routes/routes');

// Settings
app.set('port', process.env.PORT || 3000);
app.engine('ejs', engine);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


// Middlewares
app.use(morgan('dev'));

// Routes
app.use('/', routes);

// Server listeing
app.listen(app.get('port'), () => {
  console.log(`Server Node on localhost:${app.get('port')}`);
});
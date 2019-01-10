const express = require('express');

// Initializing
const app = express();


// Settings
app.set('port', process.env.PORT || 3000);


// Middlewares


// Routes


// Server listeing
app.listen(app.get('port'), () => {
  console.log(`Server Node on localhost:${app.get('port')}`);
});
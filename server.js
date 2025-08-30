const express = require('express');
const morgan = require('morgan');

const PORT = 3000;
const app = express();
// MIDDLEWARE
app.use(morgan('dev'));

// ROUTES
app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.listen(PORT, () => {
  console.log('Listening on port 3000');
});

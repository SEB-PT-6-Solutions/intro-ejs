const express = require('express');
const morgan = require('morgan');

const PORT = 3000;
const app = express();
// MIDDLEWARE
app.use(morgan('dev'));

// ROUTES
app.get('/', (req, res) => {
  const val = true;
  res.render('home.ejs', {
    msg: 'Welcome to the home page',
    val,
    num: 10,
    player: {
      name: 'Bob',
    },
    inventory: [
      { name: 'Candle', qty: 4 },
      { name: 'Cheese', qty: 10 },
      { name: 'Phone', qty: 1 },
      { name: 'Tent', qty: 0 },
      { name: 'Torch', qty: 5 },
    ],
  });
});

app.listen(PORT, () => {
  console.log('Listening on port 3000');
});

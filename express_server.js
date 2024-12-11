// Setup
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const app = express();
const PORT = 8080;
app.set('view engine', 'ejs');

// Middlewware
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const urlDatabase = {
  b2xVn2: "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
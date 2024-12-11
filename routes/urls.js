const express = require('express');
const router = express.Router();

// Mock Database
const urlDatabase = {
  b2xVn2: "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

// Route for home
router.get('/', (req, res) => {
  res.send('Hello!');
});

// GET /urls
router.get('/urls', (req, res) => {
  const templateVars = { urls: urlDatabase };
  res.render('urls_index', templateVars);
});

// GET /urls/:id
router.get('/urls/:id', (req, res) => {
  console.log(req.params);
  const templateVars = { id: req.params.id, longURL: urlDatabase[req.params.id]};
  res.render('urls_show', templateVars);
});

module.exports = router;
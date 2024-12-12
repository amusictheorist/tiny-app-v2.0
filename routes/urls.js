const express = require('express');
const router = express.Router();
const { generateRandomString } = require('../helpers');

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

// GET /urls/new
router.get('/urls/new', (req, res) => {
  res.render('urls_new');
});

// GET /urls/:id
router.get('/urls/:id', (req, res) => {
  const templateVars = { id: req.params.id, longURL: urlDatabase[req.params.id]};
  res.render('urls_show', templateVars);
});

// POST /urls
router.post('/urls', (req, res) => {
  const longURL = req.body.longURL;
  const id = generateRandomString();
  urlDatabase[id] = longURL;
  res.redirect(`urls/${id}`);
});

// GET /u/:id
router.get('/u/:id', (req, res) => {
  const id = req.params.id;
  const longURL = urlDatabase[id];
  if (!longURL) {
    return res.status(404).send('URL not found');
  }
  res.redirect(longURL);  
});

// POST /urls/:id/delete
router.post('/urls/:id/delete', (req, res) => {
  const id = req.params.id;
  delete urlDatabase[id];
  res.redirect('/urls');
});


module.exports = router;
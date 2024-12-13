const express = require('express');
const router = express.Router();
const { urlDatabase, users } = require('../helpers');

// Route for home
router.get('/', (req, res) => {
  res.redirect('urls_index');
});

// GET /urls
router.get('/urls', (req, res) => {
  const user = users['xarknlmie3i'];
  const templateVars = {
    urls: urlDatabase,
    user
  };
  res.render('urls_index', templateVars);
});

// GET /urls/new
router.get('/urls/new', (req, res) => {
  const user = users['xarknlmie3i'];
  const templateVars = { user };
  res.render('urls_new', templateVars);
});

// GET /urls/:id
router.get('/urls/:id', (req, res) => {
  const user = users['xarknlmie3i'];
  const templateVars = {
    user,
    id: req.params.id,
    longURL: urlDatabase[req.params.id]
  };
  res.render('urls_show', templateVars);
});

// POST /logout
router.post('/logout', (req, res) => {
  const user = null;
  res.redirect('/login');
});

module.exports = router;
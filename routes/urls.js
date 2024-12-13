const express = require('express');
const router = express.Router();
const { urlDatabase, users } = require('../helpers');

// Route for home
router.get('/', (req, res) => {
  res.redirect('urls_index');
});

// GET /urls
router.get('/urls', (req, res) => {
  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).redirect('/login');
  }

  const user = users[userId];
  const templateVars = { urls: urlDatabase, user };
  res.render('urls_index', templateVars);
});

// GET /urls/new
router.get('/urls/new', (req, res) => {
  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).redirect('/login');
  }

  const user = users[userId];
  const templateVars = { user };
  res.render('urls_new', templateVars);
});

// GET /urls/:id
router.get('/urls/:id', (req, res) => {
  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).redirect('/login');
  }

  const user = users[userId];
  const templateVars = {
    user,
    id: req.params.id,
    longURL: urlDatabase[req.params.id]
  };

  res.render('urls_show', templateVars);
});

// POST /logout
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Error logging out');
    }
    res.redirect('/login');
  })
});

module.exports = router;
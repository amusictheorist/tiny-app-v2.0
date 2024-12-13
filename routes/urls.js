const express = require('express');
const router = express.Router();
const { urlDatabase, users } = require('../helpers');

// Route for home
router.get('/', (req, res) => {
  res.send('Hello!');
});

// GET /urls
router.get('/urls', (req, res) => {
  const templateVars = {
    urls: urlDatabase,
    users
  };
  res.render('urls_index', templateVars);
});

module.exports = router;
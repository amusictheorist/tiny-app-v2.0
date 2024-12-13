const express = require('express');
const router = express.Router();
const { urlDatabase, users } = require('../helpers');

// Route for home
router.get('/', (req, res) => {
  res.send('Hello!');
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

// POST /logout
router.post('/logout', (req, res) => {
  const user = null;
  console.log('logout route hit');
  console.log('user: ', user);
  res.redirect('/login');
});

module.exports = router;
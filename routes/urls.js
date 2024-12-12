const express = require('express');
const router = express.Router();

// Route for home
router.get('/', (req, res) => {
  res.send('Hello!');
});

// GET /urls
router.get('/urls', (req, res) => {
  const templateVars = { urls: urlDatabase };
  res.render('urls_index', templateVars);
});

module.exports = router;
const express = require('express');
const router = express.Router();
const { generateRandomString, users } = require('../helpers');

// GET /register
router.get('/', (req, res) => {
  res.render('register');
});

// POST /register
router.post('/', (req, res) => {
  const { email, password } = req.body;
  const userId = generateRandomString();

  if (!email || !password) {
    return res.status(400).send('You must provide and email and a password!');
  }

  users[userId] = { id: userId, email, password };

  res.redirect('/urls');

});

module.exports = router;
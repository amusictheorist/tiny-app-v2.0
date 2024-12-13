const express = require('express');
const router = express.Router();
const { generateRandomString, users } = require('../helpers');

// GET /register
router.get('/', (req, res) => {
  const templateVars = { user: null };
  res.render('register', templateVars);
});

// POST /register
router.post('/', (req, res) => {
  const { email, password } = req.body;
  const userId = generateRandomString();

  for (let user in users) {
    if (users[user].email === email) {
      return res.status(400).send('Email already registered!');
    }
  }

  users[userId] = { id: userId, email, password };

  req.session.userId = userId;

  res.redirect('/urls');
});

module.exports = router;
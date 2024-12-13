const express = require('express');
const router = express.Router();
const { findUserByEmail, users } = require('../helpers');

// GET /login
router.get('/', (req, res) => {
  const templateVars = { user: null }
  res.render('login', templateVars);
});

// POST /login
router.post('/', (req, res) => {
  const { email, password } = req.body;
  const user = findUserByEmail(email, users);
  const userId = user.id;

  if (user && user.password === password) {
    return res.redirect('/urls');
  }

  return res.status(401).render('login', { error: 'Invalid email or password' });
});

module.exports = router;
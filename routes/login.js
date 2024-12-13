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
  
  if (user && user.password === password) {
    req.session.userId = user.id;
    return res.redirect('/urls');
  }

  return res.status(401).send('Invalid credentials');
});

module.exports = router;
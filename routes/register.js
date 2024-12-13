const express = require('express');
const router = express.Router();
const { generateRandomString } = require('../helpers');
const { User } = require('../models/User');

// GET /register
router.get('/', (req, res) => {
  const templateVars = { user: null };
  res.render('register', templateVars);
});

// POST /register
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    return res.status(400).send('User already exists!');
  }

  try {
    const user = await User.create({ email, password });
    req.session.userId = user.id;
    res.redirect('/urls');
  } catch (error) {
    console.error('Error creating user: ', error);
    res.status(500).send('Internal server error')
  }
});

module.exports = router;
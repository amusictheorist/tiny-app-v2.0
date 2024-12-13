const express = require('express');
const router = express.Router();
const { urlDatabase, users, generateRandomString } = require('../helpers');

// Route for home
router.get('/', (req, res) => {
  res.redirect('urls_index');
});

// GET /urls
router.get('/urls', async (req, res) => {
  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).redirect('/login');
  }

  try {
    const urls = await URL.findAll({ where: { userId } });
    const templateVars = { user: users[userId], urls };
    res.render('urls_index', templateVars);
  } catch (error) {
    console.error('Error fethcing URLs: ', error);
    res.status(500).send('Internal server error');
  }
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
  const url = urlDatabase[req.params.id];

  if (!url || url.userId !== userId) {
    return res.status(403).send('You are not authorized to view this URL');
  }

  const templateVars = {
    user,
    id: req.params.id,
    longURL: url.longURL
  };
  
  res.render('urls_show', templateVars);
});

// GET /u/:id
router.get('/u/:id', (req, res) => {
  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).redirect('/login');
  }
  
  const user = users[userId];
  const longURL = urlDatabase[req.params.id].longURL;
  res.redirect(longURL);
});

// POST /urls
router.post('/urls', async (req, res) => {
  const userId = req.session.userId;
  const { longURL } = req.body;

  if (!userId) {
    return res.status(401).redirect('/login');
  }

  try {
    const shortURL = generateRandomString();
    await URL.createObjectURL({ shortURL, longURL, userId });
    res.redirect(`'/urls/${shortURL}`);
  } catch (error) {
    console.error('Error creating URL: ', error);
    res.status(500).send('Internal server error');
  }
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
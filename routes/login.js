const express = require('express');
const router = express.Router();

// POST /login
router.post('/', (req, res) => {
  console.log(req.body);
  const { username } = req.body;
  res.cookie('username', username, { httpOnly: true })
  return res.redirect('/urls');
});

module.exports = router;
const express = require('express');
const router = express.Router();

// POST /logout
router.post('/', (req, res) => {
  res.clearCookie('username');
  res.redirect('/urls');
});

module.exports = router;
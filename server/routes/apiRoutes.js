const express = require('express');
const router = express.Router();

router.get('/hello/:name', (req, res) => {
  return res.send(`Hello ${req.params.name}!`);
});

router.get('/hello/', (req, res) => {
  return res.send(`Hello ${req.params.name}!`);
});

module.exports = router;
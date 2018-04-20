const express = require('express');
const router = express.Router();

router.get(['/hello/','/hello/:name'], (req, res) => {
  return res.send(`Hello ${req.params.name}!`);
});

router.get(['/tilt/','/tilt/:input'], (req, res) => {
  return res.send(req.params.input);
});

// router.get('/hello/', (req, res) => {
//   return res.send(`Hello ${req.params.name}!`);
// });

module.exports = router;
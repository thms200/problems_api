const express = require('express');
const router = express.Router();

const problems = require(`${__dirname}/json/problems.json`);
const similars = require(`${__dirname}/json/similars.json`);

router.get('/problems', function(req, res, next) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(problems));
});

router.get('/similars', function(req, res, next) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(similars));
});

module.exports = router;

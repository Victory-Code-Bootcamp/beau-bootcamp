var express = require('express');
var router = express.Router();
var {welcome} = require('../utils/car')

/* GET home page. */
router.get('/books', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/car/:id', function(req, res, next) {
  const id = req.params.id;
  const car = welcome(id);
  res.render('index', { title: id, message: car });
});
router.get('/food', function(req, res, next) {
  res.render('index', { title: 'Hamburgers' });
});

module.exports = router;

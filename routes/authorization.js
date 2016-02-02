var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('authorization');
});

router.post('/', function(req, res, next) {
  res.redirect('/restaurants');
});

module.exports = router;

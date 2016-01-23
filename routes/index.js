var express = require('express');
var router = express.Router();
var knex = require('knex');

function restaurants(){
  return knex('restaurants');
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/restaurants');
});

module.exports = router;

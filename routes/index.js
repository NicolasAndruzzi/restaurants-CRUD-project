var express = require('express');
var router = express.Router();
var knex = require('knex') ({
  client: 'pg',
  connection: 'postgress://localhost/businesses'
});

function restaurants(){
  return knex('restaurants');
}

/* GET home page. */
router.get('/restaurants', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/restaurants/new', function(req, res, next) {
  res.render('new', { title: 'Express' });
});

router.get('/restaurants/:name', function(req, res, next) {
  res.render('show', { title: 'Express' });
});

router.get('/restaurants/:name/edit', function(req, res, next) {
  res.render('edit', { title: 'Express' });
});

console.log(restaurants());
module.exports = router;

var express = require('express');
var router = express.Router();
var knex = require('knex') ({
  client: 'pg',
  connection: 'postgress://localhost/businesses'
});

// function restaurants(){
//   return knex('restaurants');
// }

/* GET users listing. */
router.get('/restaurants', function(req, res, next) {
  res.render('./restaurants/index', {title: "red"});
});

// console.log(knex('restaurants'));
module.exports = router;



// THIS IS THE SCRATCH BRANCH

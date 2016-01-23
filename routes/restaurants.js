var express = require('express');
var router = express.Router();
var knex = require('knex')
var server = require('../serverlogic/serverlogic.js')


function restaurants(){
  return knex('restaurants');
}

/* GET users listing. */
router.get('/restaurants/', function(req, res, next) {
  // restaurants().select().then(function(results) {
  //   res.render('restaurants/index', {restaurants: results});
  // });
  res.send("HEllo")
});

// router.get('/restaurants/:id', function(req,res,next){
//
//   res.redirect('/')
// });

module.exports = router;

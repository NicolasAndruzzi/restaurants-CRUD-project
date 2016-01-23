var express = require('express');
var router = express.Router();
var knex = require('knex')
var server = require('../serverlogic/serverlogic.js')


var knex = require('../db/knex')


function restaurants(){
  return knex('restaurants');
}

router.get('/restaurants', function(req, res, next) {
  restaurants().select().then(function(results) {
    res.render('index', {restaurants: results})
  })
})

router.get('/restaurants/:id', function(req, res, next) {
  restaurants().select().where("id", req.params.id).then(function(results){
    console.log(results[0]);
    res.render('restaurants/show',{results: results[0]})
  })
})

router.get('/restaurants/new', function(req, res, next) {
    var cuisines = server.foods
    res.render('restaurants/new',{cuisines: cuisines})
  })
})



module.exports = router;

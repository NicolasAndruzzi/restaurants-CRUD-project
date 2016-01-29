var express = require('express');
var router = express.Router();
var knex = require('knex');

var server = require('../serverlogic/serverlogic.js');
var knex = require('../db/knex');


function restaurants(){
  return knex('restaurants');
}


router.get('/restaurants', function(req, res, next) {
  restaurants().select().then(function(results) {
    res.render('restaurants/index', {restaurants: results});
  });
});

router.get('/restaurants/new', function(req, res, next) {
  res.render("restaurants/new" , {cuisnes: server.foods});
});

router.get('/restaurants/:id', function(req, res, next) {
  restaurants().select().where("id", req.params.id).then(function(results){
    res.render('restaurants/show',{restaurant: results[0]});
  });
});

router.get('/restaurants/:id/edit', function(req, res, next) {
  restaurants().select().where("id", req.params.id).then(function(results){
    res.render('restaurants/edit',{restaurant: results[0]});
  });
});

router.get('/restaurants/:id/delete', function(req, res, next) {
  restaurants().select().where("id", req.params.id).then(function(results){
    res.redirect('/restaurants');
  });
});


module.exports = router;

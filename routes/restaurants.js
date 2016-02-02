var express = require('express');
var router = express.Router();
var knex = require('knex');

var server = require('../serverlogic/serverlogic.js');
var knex = require('../db/knex');


function restaurants(){
  return knex('restaurants');
}


router.get('/', function(req, res, next) {
  restaurants().select().then(function(results) {
    res.render('restaurants/index', {restaurants: results});
  });
});

router.get('/new', function(req, res, next) {
  res.render("restaurants/new" , {cuisnes: server.foods});
});

router.post('/new', function(req, res, next) {
  restaurants().insert({name: 'test'}).then(function() {
    res.redirect('/restaurants');
  });
});

router.get('/:id', function(req, res, next) {
  restaurants().select().where("id", req.params.id).then(function(results){
    res.render('restaurants/show',{restaurant: results[0]});
  });
});

router.get('/:id/edit', function(req, res, next) {
  restaurants().select().where("id", req.params.id).then(function(results){
    res.render('restaurants/edit',{restaurant: results[0]});
  });
});

router.get('/:id/delete', function(req, res, next) {
  restaurants().select().where("id", req.params.id).del().then(function(results){
    res.redirect('/restaurants');
  });
});


module.exports = router;

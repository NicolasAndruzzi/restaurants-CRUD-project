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
  res.render('restaurants/new');
});

router.post('/new', function(req, res, next) {
  restaurants().insert({name: req.body.name, city: req.body.city, state: req.body.state, cuisine: req.body.cuisine, rating: req.body.rating, img: req.body.imgURL, description: req.body.description}).then(function(results) {
    res.redirect('/restaurants');
  });
});

router.get('/:id', function(req, res, next) {
  restaurants().select().where('id', req.params.id).then(function(results){
    res.render('restaurants/show',{restaurant: results[0]});
  });
});

router.get('/:id/edit', function(req, res, next) {
  restaurants().select().where("id", req.params.id).then(function(results){
    res.render('restaurants/edit',{restaurant: results[0]});
  });
});

router.post('/:id/edit', function(req, res, next) {
    var updateItems = {name: req.body.name, city: req.body.city, state: req.body.state, cuisine: req.body.cuisine, rating: req.body.rating, img: req.body.imgURL, description: req.body.description}
    restaurants().update(updateItems).where('id', req.params.id).then(function(results){
      res.redirect('/restaurants/'+req.params.id);
    });
});

router.get('/:id/delete', function(req, res, next) {
  restaurants().select().where("id", req.params.id).del().then(function(results){
    res.redirect('/restaurants');
  });
});

router.get('/:id/map', function(req,res,next){

      var google_api = "https://maps.googleapis.com/maps/api/geocode/json?address=";
      var address = 'Zuni+St+&+W+34th+Ave,+Denver,+CO+80211'
      var my_key = "&key=AIzaSyBlnwQZvWxJEBUc7mJETX1B4cKrdYEjh30";


  request(google_api+address+my_key, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var jase = JSON.parse(body);
      var j = jase.results[0];
      var lat_long = j.geometry.location
      var lat = Number(lat_long.lat)
      var lng = Number(lat_long.lng)



      res.render('map', { header: 'Reviews', lat: lat, long: lng});
    }
  })
});


module.exports = router;

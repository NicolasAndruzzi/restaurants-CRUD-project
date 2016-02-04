var express = require('express');
var router = express.Router();
// var knex = require('knex');

var knex = require('../db/knex');


function users(){
  return knex('users');
}


router.get('/', function(req, res, next) {
  res.render('authorization', {authStatus: req.cookies.userAuth});
});

router.post('/signup', function(req, res, next) {
  users().insert({name: req.body.name, email: req.body.email, password: req.body.password}).then(function(results) {
  res.redirect('/restaurants');
  });
});

router.post('/login', function(req, res, next) {
  users().select().then(function(results){
    results.forEach (function(row, i) {
      if (row.email === req.body.email && row.password === req.body.password){
        res.cookie("userAuth", row.id);
        res.redirect('/restaurants');
      }
    });
    res.redirect('/authorization')
});
});

router.get('/logout', function(req, res, next) {
    res.clearCookie("userAuth");
    res.redirect('/restaurants');
});

module.exports = router;

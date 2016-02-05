var express = require('express');
var router = express.Router();
var validate = require('../public/javascripts/validations.js')
var knex = require('../db/knex');


function restaurants(){
  return knex('restaurants');
}


router.post('/restaurants/new', function(req, res, next) {
  var errors = "hello";
  console.log("gettin there");


  res.render('restaurants/index', {restaurants: results, errors: errors});
});

router.post('/restaurants/:id/edit', function(req, res, next) {
  var errors = [];


  res.render('/restaurants/'+ req.params.id +'/edit', {});
});


module.exports = router;



// var errors = [];
//   var namey = validator.nameIsNotBlank(req.body.name)
//   var emaily = validator.emailIsValid(req.body.email)
//   var phone = validator.phoneIsValid(req.body.phone)
//   errors.push(namey, emaily, phone)
//
//   function notBlank (value){
//     if(true){
//       return value;
//     }
//   }
//   if(errors.filter(notBlank).length >= 1){
//     res.render('index', {errors: errors})
//   }
//   else {
//     res.send('YAAAAAAY')
//   }

var express = require('express');
var router = express.Router();

router.get('/restaurants/:id/employees', function(req, res, next) {
  res.render('employees/index', {id: req.params.id});
});


module.exports = router;

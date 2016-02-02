var express = require('express');
var router = express.Router();
var authlogic = require('../serverlogic/authLogic.js')

router.get('/restaurants/:id/edit', authlogic.userCheck)
router.get('/restaurants/:id/delete', authlogic.userCheck)


module.exports = router;

module.exports = {
  userCheck:  function(req, res, next) {
    if (req.cookies.userAuth) {
      next();
    }
    else {
      res.redirect('/authorization');
    }
  }

}

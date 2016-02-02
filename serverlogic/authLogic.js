module.exports = {
  userCheck:  function(req, res, next) {
    if (req.cookies.userAuth === "1234567890987654321") {
      next();
    }
    else {
      res.redirect('/authorization');
    }
  }

}

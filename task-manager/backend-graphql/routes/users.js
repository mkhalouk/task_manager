const bcryptUtils = require('./utils/bcrypt_utils');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Create user */
router.post('/register', function(req, res) {
  // console.log('Body data : ', req.body);
  if(req.body.email && req.body.password) {
    hashedPsw = bcryptUtils.encrypt(req.body.password);
    // Add to the db
    res.sendStatus(200);
  }
});

/* Auth user */
router.post('/login', function(req, res) {
  // console.log('Body data : ', req.body);
  if(req.body.email && req.body.password) {
    hashedPsw = bcryptUtils.encrypt(req.body.password);
    userValidated = bcryptUtils.validateUser(req.body.password, hashedPsw);
    if(userValidated) // do the auth ??
      res.sendStatus(200);
  }
});

module.exports = router;

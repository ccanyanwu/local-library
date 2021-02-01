var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET what I am doing. */
router.get('/me', function(req, res, next) {
  res.send('I am learning very fast');
});

module.exports = router;

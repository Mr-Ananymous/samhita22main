var express = require('express');
var router = express.Router();
const dotenv = require('dotenv');


dotenv.config();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cashfree PG simulator' });
});

// router.get('/request', function(req, res, next) {
//   res.render('request');
// });
module.exports = router;

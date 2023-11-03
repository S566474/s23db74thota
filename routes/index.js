var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Door', { title: 'Search Results Door' });
});

module.exports = router;

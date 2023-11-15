var express = require('express');
const door_controller= require('../controllers/Door');
var router = express.Router();

/* GET detail costume page */
router.get('/detail', door_controller.door_view_one_Page);

/* GET create costume page */
router.get('/create', door_controller.door_create_Page);

/* GET create update page */
router.get('/update', door_controller.door_update_Page);

/* GET delete costume page */
router.get('/delete', door_controller.door_delete_Page);



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('door', { title: 'Search Results - Door' });
});

module.exports = router;
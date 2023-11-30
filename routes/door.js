var express = require('express');
const door_controller= require('../controllers/Door');
var router = express.Router();
// /* GET door */
// router.get('/', door_controller.door_view_one_Page );
// module.exports = router;


router.get('/detail', door_controller.door_view_one_Page);

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

// const secured = (req, res, next) => {
//     if (req.user){
//     return next();
//     }
//     req.session.returnTo = req.originalUrl;
//     res.redirect("/login");
//     }
//    router.get('/create',secured, door_controller.door_create_Page);
//    router.get('/update', secured,door_controller.door_update_Page);
//    router.get('/delete', secured,door_controller.door_delete_Page);

 module.exports = router;
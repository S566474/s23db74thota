var express = require('express');
var router = express.Router();
var api_controller = require('../controllers/api');
var door_controller = require('../controllers/Door');
router.get('/', api_controller.api);
router.post('/door', door_controller.door_create_post);
router.delete('/door/:id', door_controller.door_delete);
router.put('/door/:id', door_controller.door_update_put);
router.get('/door/:id', door_controller.door_detail);
router.get('/door', door_controller.door_list);



module.exports = router;
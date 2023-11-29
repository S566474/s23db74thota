var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var door_controller = require('../controllers/door');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// door ROUTES ///
// POST request for creating a door.
router.post('/door', door_controller.door_create_post);
// DELETE request to delete door.
router.delete('/door/:id', door_controller.door_delete);
// PUT request to update door.
router.put('/door/:id', door_controller.door_update_put);
// GET request for one door.
router.get('/door/:id', door_controller.door_detail);
// GET request for list of all door items.
router.get('/door', door_controller.door_list);
module.exports = router;
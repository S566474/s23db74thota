const mongoose = require('mongoose');

const doorSchema = mongoose.Schema({
  door_Name: String,
  door_color: String,
  door_height: Number,
});

module.exports = mongoose.model('door', doorSchema);

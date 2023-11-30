const mongoose = require('mongoose');

const doorSchema = mongoose.Schema({
  door_Name: String,
  door_color: String,
  door_height: {
    type: Number,
    min: [5, "Min value is 5"],
    max: [65, "Max value is 65"]
  }
})

module.exports = mongoose.model('door', doorSchema);

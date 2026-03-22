const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
  sellerEmail: String
});

module.exports = mongoose.model('vehicle', vehicleSchema);

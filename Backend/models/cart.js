const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  email: String,
  carId: String,
  carName: String,
  price: Number,
});

module.exports = mongoose.model("Cart", cartSchema);

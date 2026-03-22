const mongoose = require("mongoose");

const shortlistSchema = new mongoose.Schema({
  email: String,
  car: String
});

module.exports = mongoose.model("Shortlist", shortlistSchema);

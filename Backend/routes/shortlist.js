const express = require("express");
const router = express.Router();
const Shortlist = require("../models/Shortlist");

// Add to shortlist
router.post("/", async (req, res) => {
  const { email, car } = req.body;
  try {
    await Shortlist.create({ email, car });
    res.status(201).json({ message: "Added to cart" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get shortlist
router.get("/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const cars = await Shortlist.find({ email });
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

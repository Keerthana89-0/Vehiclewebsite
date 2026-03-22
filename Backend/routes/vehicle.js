const express = require('express');
const router = express.Router();
const Vehicle = require('../models/vehicle');

// Add vehicle
router.post('/add', async (req, res) => {
  const vehicle = new Vehicle(req.body);
  await vehicle.save();
  res.json({ message: "Vehicle added" });
});

// Get all vehicles
router.get('/all', async (req, res) => {
  const vehicles = await Vehicle.find();
  res.json(vehicles);
});

module.exports = router;

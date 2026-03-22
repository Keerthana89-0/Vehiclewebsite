const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

// Add to Cart
router.post("/add-to-cart", async (req, res) => {
  const { email, carId, carName, price } = req.body;

  try {
    const newItem = new Cart({ email, carId, carName, price });
    await newItem.save();
    res.json({ message: "Car added to cart" });
  } catch (error) {
    console.error("Error saving cart item:", error);
    res.status(500).json({ message: "Failed to add to cart" });
  }
});

// Get Cart by Email
router.get("/get-cart/:email", async (req, res) => {
  try {
    const items = await Cart.find({ email: req.params.email });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch cart items" });
  }
});
router.get("/:phone", async (req, res) => {
  const cartItems = await Cart.find({ phone: req.params.phone });
  res.json(cartItems);
});

module.exports = router;

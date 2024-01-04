// routes/orderRoutes.js

const express = require("express");
const router = express.Router();
const orderController = require("../controller/order");

router.post("/", (req, res) => {
  const { components } = req.body;
  console.log("idhr aaya");
  try {
    const order = orderController.createOrder(components);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

// server/routes/propertyRoutes.js
const express = require("express");
const router = express.Router();
const Property = require("../models/Property");

// List Property
router.post("/", async (req, res) => {
  const { owner, address, city, description, rent } = req.body;

  try {
    const property = new Property({ owner, address, city, description, rent });
    await property.save();
    res.status(201).json({ msg: "Property listed successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Get Properties
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;

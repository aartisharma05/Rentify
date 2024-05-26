// server/routes/propertyRoutes.js
const express = require("express");
const router = express.Router();
const Property = require("../models/Property");

// List Property
router.post("/", async (req, res) => {
  console.log(req);
  const { propertyImg, area, bedrooms, bathrooms, poi } = req.body;

  try {
    const property = new Property({
      propertyImg,
      area,
      bedrooms,
      bathrooms,
      poi,
    });

    await property.save();
    res.status(201).json({ msg: "Property listed successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

// Get Properties
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;

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
    console.error("Error listing property:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

// Get Properties
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (err) {
    console.error("Error listing property:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

// Update Property
router.put("/:id", async (req, res) => {
  const { propertyImg, area, bedrooms, bathrooms, poi } = req.body;

  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ msg: "Property not found" });
    }

    property.propertyImg = propertyImg || property.propertyImg;
    property.area = area || property.area;
    property.bedrooms = bedrooms || property.bedrooms;
    property.bathrooms = bathrooms || property.bathrooms;
    property.poi = poi || property.poi;

    await property.save();
    res.status(200).json({ msg: "Property updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

// Delete Property
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const property = await Property.findByIdAndDelete(id);

    if (!property) {
      return res.status(404).json({ msg: "Property not found" });
    }

    res.status(200).json({ msg: "Property deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;

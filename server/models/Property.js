// server/models/Property.js
const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  propertyImg: { type: String, required: true },
  area: { type: String, required: true },
  bedrooms: { type: String, required: true },
  bathrooms: { type: String, required: true },
  poi: { type: Number, required: true },
});

module.exports = mongoose.model("Property", PropertySchema);

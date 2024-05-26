// server/models/Property.js
const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  description: { type: String, required: true },
  rent: { type: Number, required: true },
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model("Property", PropertySchema);

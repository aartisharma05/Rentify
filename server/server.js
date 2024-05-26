// server/server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const propertyRoutes = require("./routes/propertyRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI; // Access MONGO_URI from environment variables

if (!MONGO_URI) {
  console.error(
    "Error: MongoDB URI is not defined in the environment variables"
  );
  process.exit(1);
}
// Middleware
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/users", userRoutes);
// app.use("/api/properties", propertyRoutes);
app.get("/api/properties", (req, res) => {
  // Here you would typically fetch data from a database
  const properties = [
    { id: 1, name: "Property 1", location: "Location 1" },
    { id: 2, name: "Property 2", location: "Location 2" },
    // Add more properties as needed
  ];
  res.json(properties);
});

// MongoDB Connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Sample Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// server/server.js
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const propertyRoutes = require("./routes/propertyRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
console.log(PORT);
const MONGO_URI = process.env.MONGO_URI; // Access MONGO_URI from environment variables
console.log(MONGO_URI);

if (!MONGO_URI) {
  console.error(
    "Error: MongoDB URI is not defined in the environment variables"
  );
  process.exit(1);
}

// Middleware
app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);
app.use("/properties", propertyRoutes);

// MongoDB Connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

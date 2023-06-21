const express = require("express");
const bodyParser = require("body-parser");
const { calculatePremiumController } = require("./controller");

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route for calculating car value
app.post("/calculatePremium", calculatePremiumController);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

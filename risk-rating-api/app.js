const express = require("express");
const bodyParser = require("body-parser");
const { calculateRiskRatingController } = require("./controller");

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route for calculating risk rating
app.post("/calculateRiskRating", calculateRiskRatingController);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

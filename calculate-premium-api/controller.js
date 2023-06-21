const { calculatePremium } = require("./model");
const { renderPremium, renderError } = require("./view");

function calculatePremiumController(req, res) {
  try {
    const { car_value, risk_rating } = req.body;
    const premium = calculatePremium(car_value, risk_rating);
    renderPremium(res, premium);
  } catch (error) {
    renderError(res, error);
  }
}

module.exports = {
  calculatePremiumController,
};

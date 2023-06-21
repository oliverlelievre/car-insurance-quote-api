const { calculateRiskRating } = require("./model");
const { renderRiskRating, renderError } = require("./view");

function calculateRiskRatingController(req, res) {
  try {
    const { claim_history } = req.body;
    const rating = calculateRiskRating(claim_history);
    renderRiskRating(res, rating);
  } catch (error) {
    renderError(res, error);
  }
}

module.exports = {
  calculateRiskRatingController,
};

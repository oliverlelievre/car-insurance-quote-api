function renderRiskRating(res, rating) {
  res.json({ risk_rating: rating });
}

function renderError(res, error) {
  res.status(400).json({ error: error.message });
}

module.exports = {
  renderRiskRating,
  renderError,
};

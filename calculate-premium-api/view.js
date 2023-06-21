function renderPremium(res, premium) {
  res.json(premium);
}

function renderError(res, error) {
  res.status(400).json({ error: error.message });
}

module.exports = {
  renderPremium,
  renderError,
};

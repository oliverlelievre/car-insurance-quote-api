function calculatePremium(carValue, riskRating) {
  if (typeof carValue !== "number" || typeof riskRating !== "number") {
    throw new Error("Invalid input values");
  }

  const yearlyPremium = (carValue * riskRating) / 100;
  const monthlyPremium = yearlyPremium / 12;

  return { monthly_premium: monthlyPremium, yearly_premium: yearlyPremium };
}

module.exports = {
  calculatePremium,
};

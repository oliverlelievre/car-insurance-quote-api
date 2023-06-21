function calculateRiskRating(claimHistory) {
  const keywords = ["collide", "crash", "scratch", "bump", "smash"];
  let riskRating = 0;

  // Convert claim history to lowercase to perform case-insensitive matching
  const lowerCaseClaimHistory = claimHistory.toLowerCase();

  // Count the occurrences of each keyword
  for (const keyword of keywords) {
    const regex = new RegExp(keyword, "g");
    const matches = lowerCaseClaimHistory.match(regex);
    if (matches) {
      riskRating += matches.length;
    }
  }

  return riskRating;
}

module.exports = {
  calculateRiskRating,
};

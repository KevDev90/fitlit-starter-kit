class Hydration {
  constructor(hydrationInfo) {
    this.hydrationInfo = hydrationInfo;
  }

  getTotalDailyHydrationAvg(userId) {
    let userHydration = this.hydrationInfo.filter(user => user.userID === userId);
    let hydration = userHydration.reduce((ounces, user) => {
      ounces += user.numOunces / userHydration.length
      return ounces
    }, 0)
    return Math.round(hydration);
    }

  getDailyHydration(userId, date) {
    let userHydration = this.hydrationInfo.filter(user => user.userID === userId);
    let hydrationDate = userHydration.filter(userDate => userDate.date === date);
    let hydration = hydrationDate.find(ounces => {
      return ounces.numOunces
    })
      return hydration.numOunces;
  }

  getWeeklyHydration(userId, date) {
    let userHydration = this.hydrationInfo.filter(user => user.userID === userId);

  }

}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
};

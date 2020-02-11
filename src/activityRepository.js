class ActivityRepository {
  constructor(activityData) {
    this.activityData = activityData;
    this.userInfo;
  }

  getUserById(id) {
    this.userInfo = this.activityData.filter(user => user.userID === id);
    return this.userInfo;
  }

  getAllAvgActivityByDate(activity, date) {
    let dateSpecificDatas = this.activityData.filter(loggedActivity =>
      loggedActivity.date === date)
    let totaledUpActivity = dateSpecificDatas.reduce((acc, loggedActivity) =>
      acc += loggedActivity[activity], 0);
    return Math.round(totaledUpActivity / dateSpecificDatas.length);
  }

  // if a.numSteps < b.numSteps
    // push the activity obj into the acc
  // else acc return [b]

  // if result.length >= 3 return result
  // else return noStreak

    // started function for real world date checker
  // compareDates(a, b) {
  //   let date = a.split('/')
  //   let month =
  //   let day =
  //   if(){}
  // }

  getStepIncreaseOverThreeDays(activity, id) {
    let activities = this.getUserById(id);
    let trend = activities.reduce((acc, day, index) => {
      if(acc.currentStreak.length === 0 ) {
        acc.currentStreak.push(day);
        return acc;
      }
      if(acc.currentStreak[acc.currentStreak.length - 1][activity] < day[activity]) {
        acc.currentStreak.push(day)
      } else {
        if(acc.currentStreak.length > 2) acc.streaks.push(acc.currentStreak);
        acc.currentStreak = [day];
      }
    return acc;
  }, {streaks: [], currentStreak: []})
  let streakDisplays = []
    trend.streaks.forEach(streak => {
      streakDisplays.push(streak[0].date)
      streakDisplays.push(streak[streak.length -1].date)
      streakDisplays.push(streak.length)
    })
    return streakDisplays
  }


}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}

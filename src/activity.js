class Activity {
  constructor(activityInfo, user) {
    this.activityInfo = activityInfo;
    this.strideLength = user.strideLength;
    this.dailyStepGoal = user.dailyStepGoal;
    this.date = {};
  }

  getActivityInfoByDate(date) {
    this.date = this.activityInfo.find(function (loggedActivity) {
      return loggedActivity.date === date
    })
  }

  getMilesWalked(date) {
    this.getActivityInfoByDate(date);
    return Math.round(this.date.numSteps * this.strideLength / 5280 * 10) / 10;
  }

  getDailyActivityStatForDate(activity, date) {
    this.getActivityInfoByDate(date);
    return this.date[activity];
  }

  getWeeklyActivityByMinutes(activity, date) {
    let dateIndex = this.activityInfo.findIndex((loggedActivity) =>
      loggedActivity.date === date);
    let weekArray = this.activityInfo.filter((loggedActivity, index) =>
      (index <= dateIndex && index >= (dateIndex - 6)));
    let average = weekArray.reduce((acc, loggedActivity) =>
      acc += loggedActivity[activity] / 7, 0);
    return Math.round(average);
  }

  findReachedStepGoalByDate(date) {
    this.getActivityInfoByDate(date);
    if (this.date.numSteps > this.dailyStepGoal) {
      return true;
    } else {
      return false;
    }
  }

  findDaysExceededStepGoal() {
    return this.activityInfo.reduce((acc, loggedActivity) => {
     if (loggedActivity.numSteps > this.dailyStepGoal) {
       acc.push(loggedActivity.date)
     }
     return acc;
   }, []);
  }

  findStairClimbingRecord() {
    return this.activityInfo.reduce((acc, loggedActivity) => {
     if (loggedActivity.flightsOfStairs > acc.flightsOfStairs) {
       acc = loggedActivity
     }
     return acc;
   })
  }

  getStepsWalkedByWeek(date) {
    this.getActivityInfoByDate(date);
    let todayIndex = this.activityInfo.findIndex(user => user.date === date);
    let stepsPerWeek = this.activityInfo.slice(todayIndex - 6, todayIndex + 1).map(user => user.numSteps)
    return stepsPerWeek;
  }

  getTotalStepsByWeek(date) {
    let stepsWalked = this.getStepsWalkedByWeek(date);
    return stepsWalked.reduce((acc, steps) => {
      acc += steps
    return acc;
    }, 0)
  }

  getStairsClimbedByWeek(date) {
      this.getActivityInfoByDate(date);
      let todayIndex = this.activityInfo.findIndex(user => user.date === date);
      let stepsPerWeek = this.activityInfo.slice(todayIndex - 6, todayIndex + 1).map(user => user.flightsOfStairs)
      return stepsPerWeek;
    }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}

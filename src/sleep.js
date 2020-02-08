class Sleep {
  constructor(sleepInfo) {
    this.sleepInfo = sleepInfo;
  }

  getAvgDailySleepHours(userID) {
    let userInstances = this.sleepInfo.filter(sleepInfo => sleepInfo.userID === userID);
    let totalUserSleepQuantity = userInstances.reduce((acc, user) => acc += user.hoursSlept, 0);
    return Math.floor((totalUserSleepQuantity / userInstances.length) * 10) / 10;
  }

  getAvgSleepQuality(userId) {
    let userSleep = this.sleepInfo.filter(user => user.userID === userId);
    let sleep = userSleep.reduce((quality, user) => {
      quality += user.sleepQuality / userSleep.length
      return quality
    }, 0)
    return Math.round(sleep);
    }

  getSleepHoursByDate(userID, date) {
    return this.sleepInfo.find(sleepInfo => sleepInfo.userID === userID && sleepInfo.date === date).hoursSlept;
    }

  getSleepQualityByDate(userId, date) {
    let userSleep = this.sleepInfo.filter(user => user.userID === userId);
    let sleepDate = userSleep.filter(userDate => userDate.date === date);
    let sleep = sleepDate.find(quality => {
      return quality.sleepQuality
    })
      return sleep.sleepQuality;
  }

  getSleepHoursByWeek(userID, date) {
    let userInstances = this.sleepInfo.filter(sleepInfo => sleepInfo.userID === userID);
    let specificInstance = userInstances.findIndex(sleepInfo => sleepInfo.date === date);
    let sleepHoursPerWeek = userInstances.slice(specificInstance - 6, specificInstance + 1).map(user => user.hoursSlept)
    return sleepHoursPerWeek;
  }

  getSleepQualityByWeek(userId, date) {
    let userSleep = this.sleepInfo.filter(user => user.userID === userId);
    let todayIndex = userSleep.findIndex(user => user.date === date);
    let sleepPerWeek = userSleep.slice(todayIndex - 6, todayIndex + 1).map(user => user.sleepQuality);
    return sleepPerWeek;
  }
}


if (typeof module !== 'undefined') {
  module.exports = Sleep;
}

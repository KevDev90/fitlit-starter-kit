class SleepRepository {
  constructor(sleepData) {
  this.sleepData = sleepData;
  this.userInfo;
  }

  getUserById(id) {
    this.userInfo = this.sleepData.filter(user => user.userID === id);
   return this.userInfo;
  }

  getAllAvgSleepQuality() {
    let avgSleepQuality = this.sleepData.reduce((sleepScore, user) => {
      sleepScore += user.sleepQuality / this.sleepData.length
      return sleepScore
    }, 0)
    return Number(avgSleepQuality.toFixed(2))
  }

  getAllUserIds() {
    return this.sleepData.reduce((acc, stat) => {
      if (!acc.includes(stat.userID)) {
        acc.push(stat.userID)
      }
      return acc
    }, []);
  }

  getSleepQualityAvgAboveThree(date) {
    let userIds = this.getAllUserIds()
    return userIds.reduce((finalAcc, id) => {
      let thisUsersStats = this.sleepData.reduce((acc, stat) => {
        if (stat.userID === id) {
          acc.push(stat)
        }
        return acc
      }, [])
      let index = thisUsersStats.findIndex(stat => stat.date === date);
      let thisWeek = thisUsersStats.slice(index - 6, index + 1);
      let sleepQualAvg = 0;
      let userId = 0;
      thisWeek.forEach(stat => {
        sleepQualAvg += stat.sleepQuality / 7;
        userId = stat.userID
      })
      if (sleepQualAvg > 3) {
        finalAcc.push(userId)
      }
      return finalAcc
    }, [])
  }

  getHighestDailySleepHours(date) {
    let hoursByDate = this.sleepData.filter(user => user.date === date)
    let mostHoursSlept = hoursByDate.sort((a, b) => {
      return b.hoursSlept - a.hoursSlept
    });
    if (mostHoursSlept[0].hoursSlept === mostHoursSlept[1].hoursSlept) {
      return mostHoursSlept[0].userID && mostHoursSlept[1].userID
    } else {
      return mostHoursSlept[0].userID
    }
  }

  getLowestDailySleepHours(date) {
    let hoursByDate = this.sleepData.filter(user => user.date === date)
    let leastHoursSlept = hoursByDate.sort((a, b) => {
      return a.hoursSlept - b.hoursSlept
    });
    if (leastHoursSlept[0].hoursSlept === leastHoursSlept[1].hoursSlept) {
      return leastHoursSlept[0].userID && leastHoursSlept[1].userID
    } else {
      return leastHoursSlept[0].userID
    }
  }


}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}

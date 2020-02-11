class User {
constructor(userInfo) {
  this.id = userInfo.id;
  this.name = userInfo.name;
  this.address = userInfo.address;
  this.email = userInfo.email;
  this.strideLength = userInfo.strideLength;
  this.dailyStepGoal = userInfo.dailyStepGoal;
  this.friends = userInfo.friends;
  this.totalWeeklySteps;
  this.friendNames;
  this.friendSteps;
}

  returnUserFirstName() {
    let firstName = this.name.split(' ');
    return firstName[0];
  }

  findFriendsNames(userData) {
    this.friendNames = [];
    this.friends.map(friend => {
      userData.forEach(person => {
        if(person.id === friend) {
          this.friendNames.push(person.name.split(' ')[0]);
        }
      })
    })
    return this.friendNames;
  }

  getFriendSteps(userData, activityData, date) {
    this.findFriendsNames(userData);
    this.friendSteps = this.friends.reduce((acc, friendId) => {
      let friendData = activityData.filter(data =>
        data.userID === friendId);
      let friendIndex = friendData.findIndex(data => data.date === date);
      let friendWeekData = friendData.slice(friendIndex - 6, friendIndex + 1);
      let totalWeekSteps = 0;
      friendWeekData.forEach(data => {
        totalWeekSteps += data.numSteps
      });
      let friend = this.friendNames.shift();
      acc.push({
        'friendName': friend,
        'weeklySteps': totalWeekSteps
      });
      return acc;
    }, [])
    return this.friendSteps;
  }

  findStepChallengeWinner() {
      this.friendSteps.sort((friend1, friend2) =>
      friend2.weeklySteps - friend1.weeklySteps);
  }
}


if (typeof module !== 'undefined') {
  module.exports = User;
}

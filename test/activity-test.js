const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/activity');
const sampleActivityData = require('../data/sampleActivityData');
const ActivityRepository = require('../src/activityRepository');
const User = require('../src/users');
const UserRepository = require('../src/userRepository');
const sampleUserData = require('../data/sampleUserData');

describe('Activity', () => {

  let activityRepository;
  let activity;
  let userRepository;
  let user;

beforeEach(() => {
   userRepository = new UserRepository(sampleUserData);
   let userInfo = userRepository.getUserData(3);
   user = new User(userInfo);
   activityRepository = new ActivityRepository(sampleActivityData);
   let activityInfo = activityRepository.getUserById(3);
   activity = new Activity(activityInfo, user);
  });

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should hold single users activity data', () => {
    expect(activity.activityInfo).to.eql([
      { userID: 3,
        date: '2019/06/15',
        numSteps: 7402,
        minutesActive: 116,
        flightsOfStairs: 33 },
      { userID: 3,
        date: '2019/06/16',
        numSteps: 12304,
        minutesActive: 152,
        flightsOfStairs: 8 },
      { userID: 3,
        date: '2019/06/17',
        numSteps: 4547,
        minutesActive: 97,
        flightsOfStairs: 5 },
      { userID: 3,
        date: '2019/06/18',
        numSteps: 2546,
        minutesActive: 274,
        flightsOfStairs: 26 },
      { userID: 3,
        date: '2019/06/19',
        numSteps: 10961,
        minutesActive: 188,
        flightsOfStairs: 17 },
      { userID: 3,
        date: '2019/06/20',
        numSteps: 5369,
        minutesActive: 129,
        flightsOfStairs: 46 },
      { userID: 3,
        date: '2019/06/21',
        numSteps: 7498,
        minutesActive: 199,
        flightsOfStairs: 13 },
      { userID: 3,
        date: '2019/06/22',
        numSteps: 11342,
        minutesActive: 53,
        flightsOfStairs: 17 },
      { userID: 3,
        date: '2019/06/23',
        numSteps: 4665,
        minutesActive: 219,
        flightsOfStairs: 9 },
      { userID: 3,
        date: '2019/06/24',
        numSteps: 1665,
        minutesActive: 219,
        flightsOfStairs: 9 },
      { userID: 3,
        date: '2019/06/25',
        numSteps: 4665,
        minutesActive: 219,
        flightsOfStairs: 9 },
      { userID: 3,
        date: '2019/06/26',
        numSteps: 14665,
        minutesActive: 219,
        flightsOfStairs: 9 }
    ]);
  });

  it('should be able to organize all activity info by a specific date', () => {
    activity.getActivityInfoByDate('2019/06/17');
    expect(activity.date).to.eql({
      userID: 3,
      date: '2019/06/17',
      numSteps: 4547,
      minutesActive: 97,
      flightsOfStairs: 5 });
    expect(activity.date.numSteps).to.equal(4547);
  });

  it('should calculate miles walked by the user on a given date', () => {
    expect(activity.getMilesWalked('2019/06/18')).to.equal(2.1);
  });

  it('should know how many minutes a user was active on a given date', () => {
    expect(activity.getDailyActivityByMinutes('minutesActive', '2019/06/17')).
      to.equal(97);
  });

  it('should calculate a users average mins of activity for the week', () => {
    expect(activity.getWeeklyActivityByMinutes('minutesActive', '2019/06/21')).
      to.equal(165);
    expect(activity.getWeeklyActivityByMinutes('minutesActive', '2019/06/23')).
      to.equal(166);
  });

  it('should calculate if a user exceeded goal on given date', () => {
    expect(activity.findReachedStepGoalByDate('2019/06/19')).to.equal(true);
    expect(activity.findReachedStepGoalByDate('2019/06/17')).to.equal(false);
  });

  it('should be able to find a users all time stair climbing record', () => {
    expect(activity.findStairClimbingRecord()).to.eql({
      "userID": 3,
      "date": "2019/06/20",
      "numSteps": 5369,
      "minutesActive": 129,
      "flightsOfStairs": 46
    });
  });

  it('should calculate just the dates a user exceeded step goal', () => {
    expect(activity.findDaysExceededStepGoal()).to.eql([
      '2019/06/15',
      '2019/06/16',
      '2019/06/19',
      '2019/06/20',
      '2019/06/21',
      '2019/06/22',
      '2019/06/26'
    ]);
  });

  it('should calculate a user’s total steps per week', () => {
    activity.getActivityInfoByDate('2019/06/22');
    expect(activity.getStepsWalkedByWeek('2019/06/22')).to.deep.equal([12304, 4547, 2546, 10961, 5369, 7498, 11342])
  })


})

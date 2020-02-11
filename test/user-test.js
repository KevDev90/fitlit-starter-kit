const chai = require('chai');
const expect = chai.expect;
const sampleUserData = require('../data/sampleUserData');
const User = require('../src/users');
const Activity = require('../src/activity');
const sampleActivityData = require('../data/sampleActivityData');
const ActivityRepository = require('../src/activityRepository');

describe('User', function() {

  let user;
  let userInfo;
  let activity;
  let activityInfo;

  beforeEach(function() {
    user = new User(sampleUserData[1]);
    activityRepository = new ActivityRepository(sampleActivityData);
    let activityInfo = activityRepository.getUserById(3);
    activity = new Activity(activityInfo, user);
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of a User', function() {
    expect(user).to.be.an.instanceOf(User);
  });

  it('should have an id', function() {
    expect(user.id).to.equal(2);
  });

  it('should have a name', function() {
    expect(user.name).to.equal('Jarvis Considine');
  });

  it('should have an address', function() {
    expect(user.address).to.equal('30086 Kathryn Port, Ciceroland NE 07273');
  });

  it('should have an email', function() {
    expect(user.email).to.equal('Dimitri.Bechtelar11@gmail.com');
  });

  it('should have a stride length', function() {
    expect(user.strideLength).to.equal(4.5);
  });

  it('should have a daily step goal', function() {
    expect(user.dailyStepGoal).to.equal(5000);
  });

  it('should have friends', function() {
    expect(user.friends).to.deep.equal([1, 4, 3, 5]);
  });

  it('should be able to return the user\'s first name', function() {
    expect(user.returnUserFirstName()).to.equal('Jarvis');
  });

  it('should be able to return a user\'s friend\'s first names', function() {
    user.getFriendSteps(sampleUserData, sampleActivityData, '2019/06/21');
    expect(user.findFriendsNames(sampleUserData)).to.deep.equal(['Luisa', 'Mae', 'Herminia', 'Erick'])
  });

  it('should be able to return a user\'s friends\' weekly steps', function() {
    expect(user.getFriendSteps(sampleUserData, sampleActivityData, '2019/06/21')).to.eql(
  [{ friendName: 'Luisa', weeklySteps: 58629 },
  { friendName: 'Mae', weeklySteps: 60963 },
  { friendName: 'Herminia', weeklySteps: 50627 },
  { friendName: 'Erick', weeklySteps: 54460 }])
});

  it('should be able to determine who of the user\'s friends had the most steps in a week', function() {
    user.getFriendSteps(sampleUserData, sampleActivityData, '2019/06/21');
    user.findStepChallengeWinner();
    activity.getTotalStepsByWeek('2019/06/21');
    expect(user.friendSteps[0].friendName).to.equal('Mae');
  });

});

//

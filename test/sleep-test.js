const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/sleep');
const sampleSleepData = require('../data/sampleSleepData');

describe('Sleep', () => {

  let sleep;

  beforeEach(() => {
    sleep = new Sleep(sampleSleepData);
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be able to calculate a user\'s average sleep quality over all time', () => {
    expect(sleep.getAvgSleepQuality(2)).to.equal(3);
  });

  it('should be able to calculate a user\'s sleep quality for a specified day', () => {
    expect(sleep.getSleepQualityByDate(2, '2019/06/17')).to.equal(3);
  });

  it('should be able to calculate a user\'s weekly sleep by date', () => {
    expect(sleep.getSleepQualityByWeek(2, '2019/06/22')).to.deep.equal([3.8, 3, 3.2, 2.5, 2.4, 4.8, 3.3]);
  });

  it('should calculate the average hours slept for a user', () => {
    expect(sleep.getAvgDailySleepHours(2)).to.equal(7.4);
  });
  it('should return hours slept when given a date and userID', () => {
    expect(sleep.getSleepHoursByDate(1, '2019/06/17')).to.equal(8);
  });
  it('should be able to return the weekly hours slept with a date and userID', () => {
    expect(sleep.getSleepHoursByWeek(2, '2019/06/22')).to.deep.equal([7.5, 5.7, 10.8, 9.6, 10.1, 4.3, 4.8]);
  });
});

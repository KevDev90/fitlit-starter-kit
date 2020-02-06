const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/hydration');
const sampleHydrationData = require('../data/sampleHydrationData');

describe('Hydration', () => {

  let hydration;

  beforeEach(() => {
    hydration = new Hydration(sampleHydrationData);
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be able to calculate a user\'s average daily hydration', () => {
    expect(hydration.getTotalDailyHydrationAvg(2)).to.equal(71);
  });

  it('should be able to calculate a user\'s daily hydration by date', () => {
    expect(hydration.getDailyHydration(2, '2019/06/15')).to.equal(75);
  });

  it('should be able to calculate a user\'s weekly hydration by date', () => {
    expect(hydration.getWeeklyHydration(2, '2019/06/22')).to.deep.equal([91, 96, 70, 76, 71, 27, 58]);
  });
});

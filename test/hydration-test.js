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
    expect(hydration.getTotalDailyHydrationAvg(2)).to.equal(72);
  });

  it('should be able to calculate a user\'s daily hydration by date', () => {
    expect(hydration.getDailyHydration(2, '2019/06/15')).to.equal(75);
  });

  it('should be able to calculate a user\'s weekly hydration by date', () => {
    expect(hydration.getDailyHydration(2, '2019/06/15')).to.deep.equal([
      {
        "date": "2019/06/15",
        "numOunces": 75
      },
      {
        "date": "2019/06/16",
        "numOunces": 91
      },
      {
        "date": "2019/06/17",
        "numOunces": 96
      },
      {
        "date": "2019/06/18",
        "numOunces": 70
      },
      {
        "date": "2019/06/19",
        "numOunces": 76
      },
      {
        "date": "2019/06/20",
        "numOunces": 71
      },
      {
        "date": "2019/06/21",
        "numOunces": 27
      }
    ]);
  });

});

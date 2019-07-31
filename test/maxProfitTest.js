const maxProfit = require('../maxProfit');
const assert = require('chai').assert;

describe('#maxProfit', () => {

  it("should return -1 when passed an array with length 1", () => {
    assert.equal(maxProfit([1]), -1);
  });

  it("should return 9 when passed an array [1, 10]", () => {
    assert.equal(maxProfit([1, 10]), 9);
  });

  it("should return 16 when passed [45, 24, 35, 31, 40, 38, 11]", () => {
    let testArr = [45, 24, 35, 31, 40, 38, 11];
    assert.equal(maxProfit(testArr), 16);
  });
})
const assert = require('chai').assert;
const countBottles = require('../poppin-bottles.js');

describe("#poppin-bottles", () => {
  
  it("should return 0 bottles for an investment of 1", () => {
    assert.equal(countBottles(1, 0, 0), 0);
  })

  it("should return 1 bottles for an investment of 2", () => {
    assert.equal(countBottles(2, 0, 0), 1);
  })

  it("should return 4 bottles for an investment of 4", () => {
    assert.equal(countBottles(4, 0, 0), 4);
  })
  
  it("should return 15 bottles for an investment of 10", () => {
    assert.equal(countBottles(10, 0, 0), 15);
  })
  
  it("should return 35 bottles for an investment of 20", () => {
    assert.equal(countBottles(20, 0, 0), 35);
  })
  
  it("should return 55 bottles for an investment of 30", () => {
    assert.equal(countBottles(30, 0, 0), 55);
  })
  
  it("should return 75 bottles for an investment of 40", () => {
    assert.equal(countBottles(40, 0, 0), 75);
  })
})
const assert = require('chai').assert;
const middle = require('../middle');

describe("middle", () => {
  it("should return [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
 
  it("should return [] for [8]", () => {
    assert.deepEqual(middle([8]), []);
  });

  it("should return [] for [8, 11]", () => {
    assert.deepEqual(middle([8, 11]), []);
  });

  it("should return [] for []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("should return [9] for [8, 9, 11]", () => {
    assert.deepEqual(middle([8, 9, 11]), [9]);
  });

  it("should return [11] for [8, 9, 11, 33, 21]", () => {
    assert.deepEqual(middle([8, 9, 11, 33, 21]), [11]);
  });

  it("should return [11] for [8, 9, 11, 33, 21]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14]), [7,8]);
  });

})
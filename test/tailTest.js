const assert = require('chai').assert;
const tail = require('../tail');

describe("tail", ()=> {
  it("should return 4 for ['Bipul', 'Madhu', 'Nanu', 'Bunu', 'Oguwa']", () => {
    assert.strictEqual(tail(['Bipul', 'Madhu', 'Nanu', 'Bunu', 'Oguwa']).length, ['Madhu', 'Nanu', 'Bunu', 'Oguwa'].length)
  })
})
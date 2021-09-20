const assert = require('chai').assert;
const tail = require('../tail');

describe("tail", ()=> {
  it("should return ['Madhu', 'Nanu', 'Bunu', 'Oguwa'] for ['Bipul', 'Madhu', 'Nanu', 'Bunu', 'Oguwa']", () => {
    assert.deepEqual(tail(['Bipul', 'Madhu', 'Nanu', 'Bunu', 'Oguwa']), ['Madhu', 'Nanu', 'Bunu', 'Oguwa'])
  })
})
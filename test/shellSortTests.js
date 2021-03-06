/* eslint-env mocha */
const path = require('path')
const shellSort = require(path.join(__dirname, '..', 'algorithms', 'shellSort.js'))
const expect = require('chai').expect
describe('Shell Sort Algorithm: shellSort(input)', () => {
  it('Should return an array which has been sorted from low to high values when given an array of numbers.', () => {
    expect(shellSort([10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 4, 4, 26]).toString()).to.eql([2, 3, 4, 4, 6, 8, 9, 10, 15, 26, 168, 186, 298].toString())
  })
})

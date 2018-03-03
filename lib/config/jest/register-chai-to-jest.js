/*
 * SOURCE: https://gist.github.com/pahund/3abcc5212431cef3dae455d5285b7bd7
 */

import chai from 'chai'

// Make sure chai and jasmine ".not" play nice together
const originalNot = Object.getOwnPropertyDescriptor(chai.Assertion.prototype, 'not').get
Object.defineProperty(chai.Assertion.prototype, 'not', {
  get () {
    Object.assign(this, this.assignedNot)
    return originalNot.apply(this)
  },
  set (newNot) {
    this.assignedNot = newNot
    return newNot
  },
})

// Combine both jest and chai matchers on expect
const jestExpect = global.expect

global.expect = actual => {
  const originalMatchers = jestExpect(actual)
  const chaiMatchers = chai.expect(actual)
  const combinedMatchers = Object.assign(chaiMatchers, originalMatchers)
  return combinedMatchers
}

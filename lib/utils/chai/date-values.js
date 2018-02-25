/* eslint eqeqeq: 0 */

import isDateObject from 'lodash.isdate'

(function (plugin) {
  module.exports = plugin
}(function (chai, utils) {
  chai.dateValues = chai.dateValues || {}

  chai.dateValues.haveDay = function (dateObj, date) {
    return isDateObject(dateObj) && dateObj.getDate() == date
  }

  chai.dateValues.haveMonth = function (dateObj, date) {
    return isDateObject(dateObj) && dateObj.getMonth() == date
  }

  chai.dateValues.haveYear = function (dateObj, date) {
    return isDateObject(dateObj) && dateObj.getFullYear() == date
  }

  const haveDayMethodWrapper = function (expected) {
    const actual = this._obj

    return this.assert(
      chai.dateValues.haveDay(actual, expected),
      `expected ${actual} to have day of ${expected}`,
      `expected ${actual} to not have day of ${expected}`
    )
  }

  const haveMonthMethodWrapper = function (expected) {
    const actual = this._obj

    return this.assert(
      chai.dateValues.haveMonth(actual, expected),
      `expected ${actual} to have month of ${expected}`,
      `expected ${actual} to not have month of ${expected}`
    )
  }

  const haveYearMethodWrapper = function (expected) {
    const actual = this._obj

    return this.assert(
      chai.dateValues.haveYear(actual, expected),
      `expected ${actual} to have full year of ${expected}`,
      `expected ${actual} to not have full year of ${expected}`
    )
  }

  chai.Assertion.addChainableMethod('haveDay', haveDayMethodWrapper)
  chai.Assertion.addChainableMethod('haveMonth', haveMonthMethodWrapper)
  chai.Assertion.addChainableMethod('haveYear', haveYearMethodWrapper)
}))

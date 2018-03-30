/* eslint eqeqeq: 0 */

import isDateObject from 'lodash.isdate'

(function (plugin) {
  module.exports = plugin
}(function (chai, utils) {
  chai.dateValues = chai.dateValues || {}

  chai.dateValues.haveYear = function (dateObj, date) {
    return isDateObject(dateObj) && dateObj.getFullYear() == date
  }

  chai.dateValues.haveMonth = function (dateObj, date) {
    return isDateObject(dateObj) && dateObj.getMonth() == date
  }

  chai.dateValues.haveDay = function (dateObj, date) {
    return isDateObject(dateObj) && dateObj.getDate() == date
  }

  chai.dateValues.haveHours = function (dateObj, date) {
    return isDateObject(dateObj) && dateObj.getHours() == date
  }

  chai.dateValues.haveMinutes = function (dateObj, date) {
    return isDateObject(dateObj) && dateObj.getMinutes() == date
  }

  chai.dateValues.haveSeconds = function (dateObj, date) {
    return isDateObject(dateObj) && dateObj.getSeconds() == date
  }

  chai.dateValues.haveMilliseconds = function (dateObj, date) {
    return isDateObject(dateObj) && dateObj.getMilliseconds() == date
  }

  const haveYearMethodWrapper = function (expected) {
    const actual = this._obj

    return this.assert(
      chai.dateValues.haveYear(actual, expected),
      `expected ${actual} to have full year of ${expected}`,
      `expected ${actual} to not have full year of ${expected}`
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

  const haveDayMethodWrapper = function (expected) {
    const actual = this._obj

    return this.assert(
      chai.dateValues.haveDay(actual, expected),
      `expected ${actual} to have day of ${expected}`,
      `expected ${actual} to not have day of ${expected}`
    )
  }

  const haveHoursMethodWrapper = function (expected) {
    const actual = this._obj

    return this.assert(
      chai.dateValues.haveHours(actual, expected),
      `expected ${actual} to have hours of ${expected}`,
      `expected ${actual} to not have hours of ${expected}`
    )
  }

  const haveMinutesMethodWrapper = function (expected) {
    const actual = this._obj

    return this.assert(
      chai.dateValues.haveMinutes(actual, expected),
      `expected ${actual} to have hours of ${expected}`,
      `expected ${actual} to not have hours of ${expected}`
    )
  }

  const haveSecondsMethodWrapper = function (expected) {
    const actual = this._obj

    return this.assert(
      chai.dateValues.haveSeconds(actual, expected),
      `expected ${actual} to have hours of ${expected}`,
      `expected ${actual} to not have hours of ${expected}`
    )
  }

  const haveMillisecondsMethodWrapper = function (expected) {
    const actual = this._obj

    return this.assert(
      chai.dateValues.haveMilliseconds(actual, expected),
      `expected ${actual} to have hours of ${expected}`,
      `expected ${actual} to not have hours of ${expected}`
    )
  }

  chai.Assertion.addChainableMethod('haveYear', haveYearMethodWrapper)
  chai.Assertion.addChainableMethod('haveMonth', haveMonthMethodWrapper)
  chai.Assertion.addChainableMethod('haveDay', haveDayMethodWrapper)
  chai.Assertion.addChainableMethod('haveHours', haveHoursMethodWrapper)
  chai.Assertion.addChainableMethod('haveMinutes', haveMinutesMethodWrapper)
  chai.Assertion.addChainableMethod('haveSeconds', haveSecondsMethodWrapper)
  chai.Assertion.addChainableMethod('haveMilliseconds', haveMillisecondsMethodWrapper)
}))

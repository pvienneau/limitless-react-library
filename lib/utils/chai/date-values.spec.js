import dateValues from './date-values'

(function (test) {
  const chai = require('chai')

  chai.use(dateValues)

  test(chai)
})(function (chai) {
  describe('DateValues', () => {
    describe('haveDay', () => {
      const actualDate = new Date(1998, 3, 2)

      it('should return true if date is correct', () => {
        expect(chai.dateValues.haveDay(actualDate, 2)).to.be.true
      })

      it('should return false if date is incorrect', () => {
        expect(chai.dateValues.haveDay(actualDate, 3)).to.be.false
      })
    })

    describe('haveMonth', () => {
      const actualDate = new Date(1998, 3, 2)

      it('should return true if date is correct', () => {
        expect(chai.dateValues.haveMonth(actualDate, 3)).to.be.true
      })

      it('should return false if date is incorrect', () => {
        expect(chai.dateValues.haveMonth(actualDate, 4)).to.be.false
      })
    })

    describe('haveYear', () => {
      const actualDate = new Date(1998, 3, 2)

      it('should return true if date is correct', () => {
        expect(chai.dateValues.haveYear(actualDate, 1998)).to.be.true
      })

      it('should return false if date is incorrect', () => {
        expect(chai.dateValues.haveYear(actualDate, 1997)).to.be.false
      })
    })
  })
})

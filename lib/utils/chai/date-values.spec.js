import dateValues from './date-values'

(function (test) {
  const chai = require('chai')

  chai.use(dateValues)

  test(chai)
})(function (chai) {
  describe('DateValues', () => {
    describe('haveYear', () => {
      const actualDate = new Date(1998, 3, 2)

      it('should return true if date is correct', () => {
        expect(chai.dateValues.haveYear(actualDate, 1998)).to.be.true
      })

      it('should return false if date is incorrect', () => {
        expect(chai.dateValues.haveYear(actualDate, 1997)).to.be.false
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

    describe('haveDay', () => {
      const actualDate = new Date(1998, 3, 2)

      it('should return true if date is correct', () => {
        expect(chai.dateValues.haveDay(actualDate, 2)).to.be.true
      })

      it('should return false if date is incorrect', () => {
        expect(chai.dateValues.haveDay(actualDate, 3)).to.be.false
      })
    })

    describe('haveHours', () => {
      const actualDate = new Date(1998, 3, 2, 4)

      it('should return true if date is correct', () => {
        expect(chai.dateValues.haveHours(actualDate, 4)).to.be.true
      })

      it('should return false if date is incorrect', () => {
        expect(chai.dateValues.haveHours(actualDate, 5)).to.be.false
      })
    })

    describe('haveMinutes', () => {
      const actualDate = new Date(1998, 3, 2, 4, 5)

      it('should return true if date is correct', () => {
        expect(chai.dateValues.haveMinutes(actualDate, 5)).to.be.true
      })

      it('should return false if date is incorrect', () => {
        expect(chai.dateValues.haveMinutes(actualDate, 6)).to.be.false
      })
    })

    describe('haveSeconds', () => {
      const actualDate = new Date(1998, 3, 2, 4, 5, 6)

      it('should return true if date is correct', () => {
        expect(chai.dateValues.haveSeconds(actualDate, 6)).to.be.true
      })

      it('should return false if date is incorrect', () => {
        expect(chai.dateValues.haveSeconds(actualDate, 7)).to.be.false
      })
    })

    describe('haveMilliseconds', () => {
      const actualDate = new Date(1998, 3, 2, 4, 5, 6, 7)

      it('should return true if date is correct', () => {
        expect(chai.dateValues.haveMilliseconds(actualDate, 7)).to.be.true
      })

      it('should return false if date is incorrect', () => {
        expect(chai.dateValues.haveMilliseconds(actualDate, 8)).to.be.false
      })
    })
  })
})

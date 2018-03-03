import doubleDigit from './double-digit'

describe('doubleDigit', () => {
  describe('integers', () => {
    it('should return a single-digit integer with two digits', () => {
      expect(doubleDigit(5)).to.equal('05')
    })

    it('should not affect a multi-digit integer', () => {
      expect(doubleDigit(551)).to.equal('551')
    })
  })

  describe('float', () => {
    it('should return a single-digit float with two digits', () => {
      expect(doubleDigit(5.01)).to.equal('05.01')
    })

    it('should not affect a multi-digit float', () => {
      expect(doubleDigit(551.01)).to.equal('551.01')
    })
  })
})

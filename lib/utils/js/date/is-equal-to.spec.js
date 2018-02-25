import isEqualTo from './is-equal-to'

describe('isEqualTo', () => {
  it('should return true if dates are equal', () => {
    expect(isEqualTo(new Date(), new Date())).to.be.true
  })

  it('should return false if dates are not equal', () => {
    const date1 = new Date()
    const date2 = new Date()
    date2.setDate(date1.getDate() + 1)

    expect(isEqualTo(date1, date2)).to.be.false
  })
})

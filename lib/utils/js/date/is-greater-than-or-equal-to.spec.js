import isGreaterThanOrEqualTo from './is-greater-than-or-equal-to'

describe('isGreaterThanOrEqualTo', () => {
  it('should return true if date is greater', () => {
    const date1 = new Date()
    const date2 = new Date()

    date1.setDate(date2.getDate() + 1)

    expect(isGreaterThanOrEqualTo(date1, date2)).to.be.true
  })

  it('should return true if dates are equal', () => {
    expect(isGreaterThanOrEqualTo(new Date(), new Date())).to.be.true
  })

  it('should return false if date is less', () => {
    const date1 = new Date()
    const date2 = new Date()

    date1.setDate(date2.getDate() - 1)

    expect(isGreaterThanOrEqualTo(date1, date2)).to.be.false
  })
})

import isLessThanOrEqualTo from './is-less-than-or-equal-to'

describe('isLessThanOrEqualTo', () => {
  it('should return true if date is less', () => {
    const date1 = new Date()
    const date2 = new Date()

    date1.setDate(date2.getDate() - 1)

    expect(isLessThanOrEqualTo(date1, date2)).to.be.true
  })

  it('should return true if dates are equal', () => {
    expect(isLessThanOrEqualTo(new Date(), new Date())).to.be.true
  })

  it('should return false if date is greater', () => {
    const date1 = new Date()
    const date2 = new Date()

    date1.setDate(date2.getDate() + 1)

    expect(isLessThanOrEqualTo(date1, date2)).to.be.false
  })
})

import isGreaterThan from './is-greater-than'

describe('isGreaterThan', () => {
  it('should return false if date is less', () => {
    const date1 = new Date()
    const date2 = new Date()

    date1.setDate(date2.getDate() - 1)

    expect(isGreaterThan(date1, date2)).to.be.false
  })

  it('should return false if dates are equal', () => {
    expect(isGreaterThan(new Date(), new Date())).to.be.false
  })

  it('should return true if date is greater', () => {
    const date1 = new Date()
    const date2 = new Date()

    date1.setDate(date2.getDate() + 1)

    expect(isGreaterThan(date1, date2)).to.be.true
  })
})

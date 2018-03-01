import getDateDiff from './get-date-diff'

describe('getDateDiff', () => {
  it('should return 0 if the dates are the same', () => {
    const date = new Date()

    expect(getDateDiff(date, date)).to.equal(0)
  })

  it('should return 1 if the second date is one day after the first date', () => {
    const firstDate = new Date()
    const secondDate = new Date()

    secondDate.setDate(secondDate.getDate() + 1)

    expect(getDateDiff(firstDate, secondDate)).to.equal(1)
  })

  it('should not return negate date diff count', () => {
    const firstDate = new Date()
    const secondDate = new Date()

    secondDate.setDate(secondDate.getDate() + 1)

    expect(getDateDiff(secondDate, firstDate)).to.equal(1)
  })
})

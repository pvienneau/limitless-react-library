import getWeekNumber from './get-week-number'

describe('getWeekNumber', () => {
  it('should return 1 on January the 1st', () => {
    const date = new Date(2018, 0, 1)

    expect(getWeekNumber(date)).to.equal(1)
  })

  it('should return 53 on December 31st', () => {
    const date = new Date(2018, 11, 31)

    expect(getWeekNumber(date)).to.equal(52)
  })
})

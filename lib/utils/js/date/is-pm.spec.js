import isPM from './is-pm'

describe('isPM', () => {
  it('should return false if the provided date is before 12:00:00 on any given day', () => {
    const date = new Date()
    date.setHours(7)

    expect(isPM(date)).to.be.false
  })

  it('should return true if the provided date is after 12:00:00 on any given day', () => {
    const date = new Date()
    date.setHours(18)

    expect(isPM(date)).to.be.true
  })

  it('should return true if the provided date is equal to 12:00:00 on any given day', () => {
    const date = new Date()
    date.setHours(12)

    expect(isPM(date)).to.be.true
  })
})

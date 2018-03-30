import getDate from './get-date'

describe('getDate', () => {
  let date

  beforeEach(() => {
    date = new Date(2014, 9, 8, 7, 6, 5, 4)
  })

  it('should maintain year', () => {
    expect(getDate(date)).to.haveYear(2014)
  })

  it('should maintain month', () => {
    expect(getDate(date)).to.haveMonth(9)
  })

  it('should maintain day', () => {
    expect(getDate(date)).to.haveDay(8)
  })

  it('should reset hours', () => {
    expect(getDate(date)).to.haveHours(0)
  })

  it('should reset minutes', () => {
    expect(getDate(date)).to.haveMinutes(0)
  })

  it('should reset seconds', () => {
    expect(getDate(date)).to.haveSeconds(0)
  })

  it('should reset milliseconds', () => {
    expect(getDate(date)).to.haveMilliseconds(0)
  })
})

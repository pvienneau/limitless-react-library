import getTimestamp from './get-timestamp'

describe('getTimestamp', () => {
  it('should return the correct timestamp', () => {
    const date = new Date()

    expect(getTimestamp(date)).to.equal(date.getTime())
  })
})

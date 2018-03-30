import isEpochTime from './is-epoch-time'
import { EPOCH_TIME } from 'constants/date'

describe('isEpochTime', () => {
  it('should return true if date is epoch time', () => {
    expect(isEpochTime(EPOCH_TIME)).to.be.true
  })

  it('should return false if date is not epoch time', () => {
    const date = new Date(EPOCH_TIME)
    date.setDate(date.getDate() + 1)

    expect(isEpochTime(date)).to.be.false
  })
})

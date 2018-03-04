import mod from './mod'

describe('mod', () => {
  it('should return the same number if below the mod bound', () => {
    expect(mod(5, 10)).to.equal(5)
  })

  it('should return the number minus the mod bound if number is greater than mod bonud', () => {
    expect(mod(25, 10)).to.equal(5)
  })

  it('should return the inverse difference between the number and mod bound if the number is negative', () => {
    expect(mod(-1, 10)).to.equal(9)
  })
})

import isTruthy from './is-truthy'

describe('isTruthy', () => {
  it('should return true is value is `true`', () => {
    expect(isTruthy(true)).to.be.true
  })

  it('should return true is value is truthy', () => {
    expect(isTruthy('Some Truthy Value')).to.be.true
  })

  it('should return false is value is `false`', () => {
    expect(isTruthy(false)).to.be.false
  })

  it('should return false is value is falsy', () => {
    expect(isTruthy('')).to.be.false
  })
})

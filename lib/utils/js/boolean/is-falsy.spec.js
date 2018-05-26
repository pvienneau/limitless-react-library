import isFalsy from './is-falsy'

describe('isFalsy', () => {
  it('should return true is value is `false`', () => {
    expect(isFalsy(false)).to.be.true
  })

  it('should return true is value is falsy', () => {
    expect(isFalsy('')).to.be.true
  })

  it('should return false is value is `true`', () => {
    expect(isFalsy(true)).to.be.false
  })

  it('should return false is value is truthy', () => {
    expect(isFalsy('Some Truthy Value')).to.be.false
  })
})

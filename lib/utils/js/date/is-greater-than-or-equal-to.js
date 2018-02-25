import isGreaterThan from './is-greater-than'
import isEqualTo from './is-equal-to'

export default function (...args) {
  return isGreaterThan(...args) || isEqualTo(...args)
}

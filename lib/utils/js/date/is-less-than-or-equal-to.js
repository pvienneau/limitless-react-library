import isLessThan from './is-less-than'
import isEqualTo from './is-equal-to'

export default function (...args) {
  return isLessThan(...args) || isEqualTo(...args)
}

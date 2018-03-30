import isDate from 'lodash.isdate'

import isAM from './is-am'

export default function (date) {
  if (!isDate(date)) return false

  return !isAM(date)
}

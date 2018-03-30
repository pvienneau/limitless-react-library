import { isDate } from 'lodash'

import getDate from './get-date'

export default function (date1, date2) {
  if (!isDate(date1) || !isDate(date2)) return false

  return getDate(date1).getTime() === getDate(date2).getTime()
}

import isDate from 'lodash.isdate'

import getDateDiff from './get-date-diff'

export default function (date) {
  if (!isDate(date)) return false

  const firstDayOfYear = new Date(date.getFullYear(), 0, 1)

  const dayCount = getDateDiff(firstDayOfYear, date)
  const weekCount = dayCount / 7

  return Math.max(1, Math.ceil(weekCount))
}

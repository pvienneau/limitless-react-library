import isDate from 'lodash.isdate'

const MILLISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000

export default function (date1, date2) {
  if (!isDate(date1) || !isDate(date2)) return false

  const timeDiff = Math.abs(date1.getTime() - date2.getTime())

  return Math.ceil(timeDiff / (MILLISECONDS_IN_A_DAY))
}

import isDate from 'lodash.isdate'

export default function (date) {
  if (!isDate(date)) return false

  return date.getHours() < 12
}

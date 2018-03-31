import { isDate } from 'lodash'

export default function (date) {
  if (!isDate(date)) return false

  return date.getTime()
}

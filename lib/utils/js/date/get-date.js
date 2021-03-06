import { isDate } from 'lodash'

export default function (date) {
  if (!isDate(date)) return false

  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

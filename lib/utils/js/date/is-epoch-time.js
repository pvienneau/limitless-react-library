import { EPOCH_TIME } from 'constants/date'
import isEqualTo from './is-equal-to'

export default function (date) {
  return isEqualTo(date, EPOCH_TIME)
}

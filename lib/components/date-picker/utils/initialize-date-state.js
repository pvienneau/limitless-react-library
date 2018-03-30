import { isDate } from 'lodash'
import { isEpochTime } from 'utils/js/date'
import { EPOCH_TIME } from 'constants/date'

export default function (props = {}) {
  const { date, currentDate } = props
  const selectedDates = [EPOCH_TIME, EPOCH_TIME]

  if (Array.isArray(date)) {
    if (isDate(date[0])) selectedDates[0] = new Date(date[0].getTime())
    if (isDate(date[1])) selectedDates[1] = new Date(date[1].getTime())
  } else if (date instanceof Date) {
    selectedDates[0] = new Date(date.getTime())
  }

  const currentDateState = isDate(currentDate) ? currentDate : new Date(selectedDates[0] && !isEpochTime(selectedDates[0]) ? selectedDates[0].getTime() : new Date().getTime())

  currentDateState.setDate(1)

  return {
    currentDate: currentDateState,
    selectedDates,
    isRange: Array.isArray(date),
    nextDateChangeIndex: selectedDates.length % 2,
  }
}

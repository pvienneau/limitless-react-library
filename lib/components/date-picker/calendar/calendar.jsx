import React from 'react'

import PropTypes from 'prop-types'
import map from 'lodash.map'
import chunk from 'lodash.chunk'
import slice from 'lodash.slice'
import now from 'lodash.now'
import noop from 'lodash.noop'
import isEqual from 'lodash.isequal'
import classNames from 'classnames'

import { Button } from 'components'
import { initializeDateState } from '../utils'
import { isLessThan, getWeekNumber, getDate } from 'utils/js/date'
import './calendar.scss'

const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurdsay', 'Friday', 'Saturday']
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default class Calendar extends React.Component {
  constructor (props) {
    super(props)

    this.state = initializeDateState(props)

    this.buildWeeks = this.buildWeeks.bind(this)
    this.onDateClick = this.onDateClick.bind(this)
    this.onNextMonthClickHandler = this.onNextMonthClickHandler.bind(this)
    this.onPreviousMonthClickHandler = this.onPreviousMonthClickHandler.bind(this)
    this.updateMonth = this.updateMonth.bind(this)
    this.isSelectedStartDate = this.isSelectedStartDate.bind(this)
    this.isSelectedEndDate = this.isSelectedEndDate.bind(this)
    this.isInSelectedDatesRange = this.isInSelectedDatesRange.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    const { currentDate, date } = this.props
    const { currentDate: nextCurrentDate, date: nextDate } = nextProps

    if (!isEqual(currentDate, nextCurrentDate) || !isEqual(date, nextDate)) {
      const { currentDate, selectedDates } = initializeDateState(nextProps)

      this.setState({
        currentDate,
        selectedDates,
      })
    }
  }

  onNextMonthClickHandler (e) {
    e.preventDefault()

    this.updateMonth(1)
  }

  onPreviousMonthClickHandler (e) {
    e.preventDefault()

    this.updateMonth(-1)
  }

  onDateClick (selectedDate) {
    const { onChange } = this.props

    return (e) => {
      e.preventDefault()

      onChange(selectedDate)
    }
  }

  updateMonth (changeValue) {
    const { onCurrentDateChange, currentDate } = this.props

    const nextCurrentDate = new Date(currentDate.getTime())
    nextCurrentDate.setMonth(nextCurrentDate.getMonth() + changeValue)

    onCurrentDateChange(nextCurrentDate)
  }

  buildWeeks () {
    const { currentDate } = this.state

    const firstDayOfMonth = new Date(currentDate.getTime())
    const lastDayOfMonth = new Date(currentDate.getTime())
    const firstDayOfCalendar = new Date(currentDate.getTime())

    firstDayOfMonth.setDate(1)
    lastDayOfMonth.setMonth(lastDayOfMonth.getMonth() + 1, 0)
    firstDayOfCalendar.setDate(1 - firstDayOfMonth.getDay())

    const days = []

    for (let ii = 0; ii < 6 * 7; ii++) {
      const day = getDate(firstDayOfCalendar)
      day.setDate(firstDayOfCalendar.getDate() + ii)

      days.push(day)
    }

    return chunk(days, 7)
  }

  isSelectedStartDate (date) {
    const { selectedDates } = this.state
    const selectedStartDate = selectedDates[0]

    return selectedStartDate && selectedStartDate.getMonth() === date.getMonth() && selectedStartDate.getDate() === date.getDate()
  }

  isSelectedEndDate (date) {
    const { selectedDates } = this.state
    const selectedEndDate = selectedDates[1]

    return selectedEndDate && selectedEndDate.getMonth() === date.getMonth() && selectedEndDate.getDate() === date.getDate()
  }

  isInSelectedDatesRange (date) {
    const { selectedDates } = this.state
    const [ selectedStartDate, selectedEndDate ] = selectedDates

    if (!(selectedStartDate instanceof Date && selectedEndDate instanceof Date)) return false

    return isLessThan(selectedStartDate, date) && isLessThan(date, selectedEndDate)
  }

  render () {
    const { className, showWeekNumbers } = this.props
    const { currentDate, selectedDates } = this.state
    const weeks = this.buildWeeks()

    return (
      <div className={classNames('Calendar', className, {
        'start-date-set': !!selectedDates[0],
        'end-date-set': !!selectedDates[1],
      })}>
        <div className="calendar-header">
          <Button
            className="button-previous-month"
            fill={false}
            icon="caret-left-32"
            onClick={this.onPreviousMonthClickHandler}
          />
          <div className="calendar-header-title">
            {slice(MONTHS[currentDate.getMonth()], 0, 3)} {currentDate.getFullYear()}
          </div>
          <Button
            className="button-next-month"
            fill={false}
            icon="caret-right-32"
            onClick={this.onNextMonthClickHandler}
          />
        </div>
        <div className="calendar-body">
          <div className="calendar-week">
            {
              showWeekNumbers && (
                <div className="calendar-day calendar-week-number">
                  <div
                    className="calendar-day-inner"
                  >
                    <span className="calendar-day-label">
                      W
                    </span>
                  </div>
                </div>
              )
            }
            {
              map(DAYS_OF_WEEK, (weekday, key) => (
                <div key={key} className="calendar-day calendar-weekday">
                  <div
                    className="calendar-day-inner"
                  >
                    <span className="calendar-day-label">
                      {weekday.substr(0, 2)}
                    </span>
                  </div>
                </div>
              ))
            }
          </div>
          {
            map(weeks, (week, k) => (
              <div key={k} className="calendar-week">
                {
                  showWeekNumbers && (
                    <div className="calendar-day calendar-week-number">
                      <div
                        className="calendar-day-inner"
                      >
                        <span className="calendar-day-label">
                          {getWeekNumber(week[0])}
                        </span>
                      </div>
                    </div>
                  )
                }
                {
                  map(week, (day, kk) => (
                    <div
                      key={`${currentDate.getMonth()}${k}${kk}`}
                      className={classNames('calendar-day', {
                        'out-of-month': currentDate.getMonth() !== day.getMonth(),
                        'start-date': this.isSelectedStartDate(day),
                        'end-date': this.isSelectedEndDate(day),
                        'in-range': this.isInSelectedDatesRange(day),
                      })}
                    >
                      <div className="calendar-day-inner">
                        <Button
                          className="calendar-day-label"
                          onClick={this.onDateClick(day)}
                        >
                          {day.getDate()}
                        </Button>
                      </div>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

Calendar.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  ]),
  showWeekNumbers: PropTypes.bool,
  currentDate: PropTypes.instanceOf(Date),
  onCurrentDateChange: PropTypes.func,
  onChange: PropTypes.func,
}

Calendar.defaultProps = {
  currentDate: now(),
  onCurrentDateChange: noop,
  onChange: noop,
  showWeekNumbers: false,
}

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import clickOutside from 'node/react-click-outside'
import dateFormat from 'dateformat'
import { assign, curry, merge, now , map, some, isArray, isFunction, chain, reject } from 'lodash'

import { InputGroup, Icon, Dropdown, Paper } from 'components'
import { Calendar } from './calendar'
import { Controls } from './controls'
import { Clock } from './clock'
import { initializeDateState } from './utils'
import { previousMonth, nextMonth, isLessThanOrEqualTo, isAM, isPM, isEqualTo, isEpochTime, getDate, getTimestamp } from 'utils/js/date'
import { EPOCH_TIME } from 'constants/date'
import './date-picker.scss'

class DatePicker extends React.Component {
  constructor (props) {
    super(props)

    const dateState = initializeDateState(props)

    this.state = {
      ...dateState,
      isOpen: false,
      savedDates: dateState.selectedDates,
    }

    this.onFocusHandler = this.onFocusHandler.bind(this)
    this.generateCalendar = this.generateCalendar.bind(this)
    this.onCurrentDateChange = this.onCurrentDateChange.bind(this)
    this.onSelectedDateChange = this.onSelectedDateChange.bind(this)
    this.onSelectedRangeChange = this.onSelectedRangeChange.bind(this)
    this.onSaveHandler = this.onSaveHandler.bind(this)
    this.onCancelHandler = this.onCancelHandler.bind(this)
    this.onStartDateHourChange = this.onStartDateHourChange.bind(this)
    this.onStartDateMinuteChange = this.onStartDateMinuteChange.bind(this)
    this.onStartDatePeriodChange = this.onStartDatePeriodChange.bind(this)
    this.onTimeChange = this.onTimeChange.bind(this)
    this.getValue = this.getValue.bind(this)
    this.setState = this.setState.bind(this)
  }

  setState (state, callback) {
    super.setState((prevState) => {
      const nextState = isFunction(state) ? state(prevState) : state

      if (nextState.selectedDates && isArray(nextState.selectedDates)) nextState.selectedDates.sort((a, b) => getTimestamp(a) - getTimestamp(b))

      return nextState
    }, callback)
  }

  onCurrentDateChange (currentDate) {
    this.setState({ currentDate })
  }

  onSelectedDateChange (date) {
    const { range } = this.props
    const { selectedDates } = this.state

    const newDate = getDate(date)

    this.setState(({ selectedDates: prevSelectedDates }) => {
      if (!range) return { selectedDates: [newDate], isOpen: false }

      if (selectedDates.length < 2) {
        const selectedDates = Object.assign([], prevSelectedDates)

        selectedDates.push(newDate)

        return {selectedDates}
      } else if (isEpochTime(prevSelectedDates[0]) || isLessThanOrEqualTo(newDate, prevSelectedDates[0])) {
        newDate.setHours(prevSelectedDates[0].getHours())
        newDate.setMinutes(prevSelectedDates[0].getMinutes())

        const selectedDates = assign([], prevSelectedDates, {
          0: newDate,
        })

        return {selectedDates}
      } else {
        newDate.setHours(prevSelectedDates[1].getHours())
        newDate.setMinutes(prevSelectedDates[1].getMinutes())

        const selectedDates = assign([], prevSelectedDates, {
          1: newDate,
        })

        return {selectedDates}
      }
    })
  }

  onSelectedRangeChange(dates) {
    this.setState({
      selectedDates: dates,
    })
  }

  onSaveHandler () {
    this.setState(({ selectedDates }) => ({
      isOpen: false,
      savedDates: selectedDates,
    }))
  }

  onCancelHandler () {
    this.setState(({ savedDates }) => ({
      isOpen: false,
      selectedDates: savedDates,
    }))
  }

  handleClickOutside () {
    this.setState({
      isOpen: false,
    })
  }

  onFocusHandler () {
    this.setState({
      isOpen: true,
    })
  }

  onStartDateHourChange (hours) {
    this.setState(({ selectedDates }) => {
      const nextSelectedDates = merge({}, selectedDates)

      nextSelectedDates[0].setHours(hours)

      return {
        selectedDates: nextSelectedDates,
      }
    })
  }

  onStartDateMinuteChange (minutes) {
    this.setState(({ selectedDates }) => {
      const nextSelectedDates = merge({}, selectedDates)

      nextSelectedDates[0].setMinutes(minutes)

      return {
        selectedDates: nextSelectedDates,
      }
    })
  }

  onStartDatePeriodChange (period) {
    this.setState(({ selectedDates }) => {
      const nextSelectedDates = merge({}, selectedDates)

      if (period === 'am' && isPM(nextSelectedDates[0])) {
        nextSelectedDates[0].setHours(nextSelectedDates[0].getHours() % 12)
      } else if (period === 'pm' && isAM(nextSelectedDates[0])) {
        nextSelectedDates[0].setHours(nextSelectedDates[0].getHours() + 12)
      }

      return {
        selectedDates: nextSelectedDates,
      }
    })
  }

  onTimeChange = curry((index, time) => {
    this.setState(({ selectedDates }) => {
      const nextSelectedDates = merge({}, selectedDates)
      const nextDate = new Date(selectedDates[index].getTime())

      nextDate.setHours(time.getHours())
      nextDate.setMinutes(time.getMinutes())

      nextSelectedDates[index] = nextDate

      return {
        selectedDates: nextSelectedDates
      }
    })
  })

  generateCalendar () {
    const { range, showWeekNumbers, showTime, timeIncrement, presets } = this.props
    const { currentDate, selectedDates } = this.state

    const sanitizedSelectedDates = map(selectedDates, date => !isEpochTime(date) ? date : undefined)
    const computedCurrentDate = !isEpochTime(selectedDates[0]) ? selectedDates[0] : currentDate

    return (
      <div className="datepicker-container">
        {
          !!range && (
            <Paper className="datepicker-box datepicker-box-controls">
              <Controls
                dates={sanitizedSelectedDates}
                onSave={this.onSaveHandler}
                onCancel={this.onCancelHandler}
                onChange={this.onSelectedRangeChange}
                presets={presets}
                showTime={showTime}
              />
            </Paper>
          )
        }

        <Paper className="datepicker-box datepicker-box-calendar datepicker-box-calendar-prev">
          <Calendar
            className="calendar-prev-month"
            currentDate={computedCurrentDate}
            date={sanitizedSelectedDates}
            range={range}
            onCurrentDateChange={this.onCurrentDateChange}
            onChange={this.onSelectedDateChange}
            showWeekNumbers={showWeekNumbers}
          />
          {showTime && (
            <Clock
              onChange={this.onTimeChange(0)}
              time={selectedDates[0]}
              timeIncrement={timeIncrement}
            />
          )}
        </Paper>

        {
          !!range && (
            <Paper className="datepicker-box datepicker-box-calendar datepicker-box-calendar-next">
              <Calendar
                className="calendar-next-month"
                currentDate={nextMonth(computedCurrentDate)}
                date={sanitizedSelectedDates}
                range={range}
                onCurrentDateChange={currentDate => this.onCurrentDateChange(previousMonth(currentDate))}
                onChange={this.onSelectedDateChange}
                showWeekNumbers={showWeekNumbers}
              />
              {showTime && (
                <Clock
                  onChange={this.onTimeChange(1)}
                  time={selectedDates[1]}
                  timeIncrement={timeIncrement}
                />
              )}
            </Paper>
          )
        }
      </div>
    )
  }

  getValue () {
    const { savedDates } = this.state

    const dates = reject(savedDates, isEpochTime)

    if (dates.length < 2) return ''

    return chain(dates)
      .map(date => dateFormat(date, 'mmmm dS, yyyy'))
      .join(' - ')
  }

  render () {
    const { className, position } = this.props
    const { isOpen } = this.state

    const datePickerClassNames = classNames('DatePicker', className, {
      [`position-${position}`]: position,
    })

    return (
      <div className={datePickerClassNames}>
        <Dropdown
          className="datepicker-dropdown"
          body={this.generateCalendar()}
          open={isOpen}
          position="bottom"
        >
          <InputGroup
            addons={{[position]: <Icon>calendar22</Icon>}}
            onFocus={this.onFocusHandler}
            value={this.getValue()}
            readOnly
          />
        </Dropdown>
      </div>
    )
  }
}

DatePicker.propTypes = {
  range: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    PropTypes.instanceOf(Date),
  ]),
  currentDate: PropTypes.instanceOf(Date),
  position: PropTypes.oneOf(['left', 'right']),
  showWeekNumbers: PropTypes.bool,
  showTime: PropTypes.bool,
  timeIncrement: PropTypes.number,
  presets: PropTypes.bool,
}

DatePicker.defaultProps = {
  range: false,
  currentDate: now(),
  position: 'left',
  showWeekNumbers: false,
  showTime: false,
}

export default clickOutside(DatePicker)

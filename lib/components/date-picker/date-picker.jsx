import React from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import clickOutside from 'node/react-click-outside'
import assign from 'lodash.assign'
import now from 'lodash.now'
import range from 'lodash.range'

import { InputGroup, Icon, Dropdown, Paper, Select } from 'components'
import { Calendar } from './calendar'
import { Controls } from './controls'
import { initializeDateState } from './utils'
import { previousMonth, nextMonth, isLessThanOrEqualTo } from 'utils/js/date'
import { doubleDigit } from 'utils/js/number'
import './date-picker.scss'

const HOURS_12 = range(1, 13)
const MINUTES_60 = range(0, 61).map(number => ({
  name: doubleDigit(number),
  value: number,
}))
const PERIODS = ['AM', 'PM']

class DatePicker extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false,
      ...initializeDateState(props),
    }

    this.onFocusHandler = this.onFocusHandler.bind(this)
    this.generateCalendar = this.generateCalendar.bind(this)
    this.onCurrentDateChange = this.onCurrentDateChange.bind(this)
    this.onSelectedDateChange = this.onSelectedDateChange.bind(this)
    this.onSaveHandler = this.onSaveHandler.bind(this)
    this.onCancelHandler = this.onCancelHandler.bind(this)
  }

  onCurrentDateChange (currentDate) {
    this.setState({ currentDate })
  }

  onSelectedDateChange (newDate) {
    const { range } = this.props
    const { selectedDates } = this.state

    this.setState(({ selectedDates: prevSelectedDates }) => {
      if (!range) return { selectedDates: [newDate] }

      if (selectedDates.length < 2) {
        const selectedDates = Object.assign([], prevSelectedDates)

        selectedDates.push(newDate)

        return {selectedDates}
      } else if (isLessThanOrEqualTo(newDate, prevSelectedDates[0])) {
        const selectedDates = assign([], prevSelectedDates, {
          0: newDate,
        })

        return {selectedDates}
      } else {
        const selectedDates = assign([], prevSelectedDates, {
          1: newDate,
        })

        return {selectedDates}
      }
    })
  }

  onSaveHandler () {
    this.setState({
      isOpen: false,
    })
  }

  onCancelHandler () {
    this.setState({
      isOpen: false,
    })
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

  generateCalendar () {
    const { range, showWeekNumbers } = this.props
    const { currentDate, selectedDates } = this.state

    return (
      <div className="datepicker-container">
        {
          !!range && (
            <Paper className="datepicker-box datepicker-box-controls">
              <Controls
                date={selectedDates}
                onSave={this.onSaveHandler}
                onCancel={this.onCancelHandler}
              />
            </Paper>
          )
        }

        <Paper className="datepicker-box datepicker-box-calendar">
          <Calendar
            className="calendar-prev-month"
            currentDate={currentDate}
            date={selectedDates}
            range={range}
            onCurrentDateChange={this.onCurrentDateChange}
            onChange={this.onSelectedDateChange}
          />
          <div className="datepicker-time-container">
            <Select
              name="start_date[time][hour]"
              options={HOURS_12}
              small
            />
            :
            <Select
              name="start_date[time][hour]"
              options={MINUTES_60}
              small
            />
            <Select
              name="start_date[time][hour]"
              options={PERIODS}
              small
            />
          </div>
        </Paper>

        {
          !!range && (
            <Paper className="datepicker-box datepicker-box-calendar">
              <Calendar
                className="calendar-next-month"
                currentDate={nextMonth(currentDate)}
                date={selectedDates}
                range={range}
                onCurrentDateChange={currentDate => this.onCurrentDateChange(previousMonth(currentDate))}
                onChange={this.onSelectedDateChange}
                showWeekNumbers={showWeekNumbers}
              />
            </Paper>
          )
        }
      </div>
    )
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
          body={this.generateCalendar()}
          open={isOpen}
          position="bottom"
        >
          <InputGroup
            addons={{[position]: <Icon>calendar22</Icon>}}
            onFocus={this.onFocusHandler}
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
  time: PropTypes.bool,
}

DatePicker.defaultProps = {
  range: false,
  currentDate: now(),
  position: 'left',
  showWeekNumbers: false,
  time: false,
}

export default clickOutside(DatePicker)

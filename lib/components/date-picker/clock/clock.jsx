import React, { Component } from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import { range } from 'lodash'

import { Select } from 'components'
import { isAM, isPM } from 'utils/js/date'
import { doubleDigit } from 'utils/js/number'
import { AM, PM } from 'constants/date'
import './clock.scss'

const PERIODS = [AM, PM]
const HOURS_12 = range(1, 13).map(number => ({
  name: doubleDigit(number),
  value: number,
}))

export default class Clock extends Component {
  constructor (props) {
    super(props)

    this.onHourChangeHandler = this.onHourChangeHandler.bind(this)
    this.onMinuteChangeHandler = this.onMinuteChangeHandler.bind(this)
    this.onPeriodChangeHandler = this.onPeriodChangeHandler.bind(this)
  }

  onHourChangeHandler (value) {
    const { onChange, time } = this.props

    const nextTime = new Date(time.getTime())
    nextTime.setHours(value)

    onChange(nextTime)
  }

  onMinuteChangeHandler (value) {
    const { onChange, time } = this.props

    const nextTime = new Date(time.getTime())
    nextTime.setMinutes(value)

    onChange(nextTime)
  }

  onPeriodChangeHandler (value) {
    const { onChange, time } = this.props

    let nextTime = new Date(time.getTime())

    switch (value) {
      case AM: {
        !isAM(value) && nextTime.setHours(nextTime.getHours() - 12)
        break
      }
      case PM: {
        !isPM(value) && nextTime.setHours(nextTime.getHours() + 12)
        break
      }
    }

    onChange(nextTime)
  }

  render () {
    const { className, time, timeIncrement } = this.props

    const minuteOptions = range(0, 61, timeIncrement).map(number => ({
      name: doubleDigit(number),
      value: number,
    }))

    return (
      <div className={classNames('Clock', className)}>
        <Select
          options={HOURS_12}
          onChange={this.onHourChangeHandler}
          value={time && time.getHours()}
          position="top"
          small
        />
        :
        <Select
          options={minuteOptions}
          onChange={this.onMinuteChangeHandler}
          value={time && time.getMinutes()}
          position="top"
          small
        />
        <Select
          options={PERIODS}
          onChange={this.onPeriodChangeHandler}
          value={isPM(time) ? 'pm' : 'am'}
          position="top"
          small
        />
      </div>
    )
  }
}

Clock.propTypes = {
  time: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  timeIncrement: PropTypes.number,
}

Clock.defaultProps = {
  timeIncrement: 5,
}

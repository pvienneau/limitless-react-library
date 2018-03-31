import React from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import { chain, noop, reject, isDate, isEqual } from 'lodash'
import dateFormat from 'dateformat'

import { Button, FormGroup, Icon, Menu } from 'components'
import { getDate, getTimestamp } from 'utils/js/date'
import './controls.scss'

const PRESETS = [
  {
    label: 'Today',
    callback: () => {
      const today = new Date()

      return [today, today]
    },
  },
  {
    label: 'Yesterday',
    callback: () => {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)

      return [yesterday, yesterday]
    },
  },
  {
    label: 'Last 7 days',
    callback: () => {
      const today = new Date()
      const lastWeek = new Date()

      lastWeek.setDate(lastWeek.getDate() - 6)

      return [lastWeek, today]
    },
  },
  {
    label: 'Last 30 days',
    callback: () => {
      const today = new Date()
      const monthAgo = new Date()

      monthAgo.setDate(monthAgo.getDate() - 30)

      return [monthAgo, today]
    },
  },
  {
    label: 'This Month',
    callback: () => {
      const startOfMonth = new Date()
      startOfMonth.setDate(1)

      const endOfMonth = new Date(startOfMonth.getTime())
      endOfMonth.setMonth(endOfMonth.getMonth() + 1)
      endOfMonth.setDate(endOfMonth.getDate() - 1)

      return [startOfMonth, endOfMonth]
    },
  },
  {
    label: 'Last Month',
    callback: () => {
      const startOfLastMonth = new Date()
      startOfLastMonth.setDate(1)
      startOfLastMonth.setMonth(startOfLastMonth.getMonth() - 1)

      const endOfLastMonth = new Date(startOfLastMonth.getTime())
      endOfLastMonth.setMonth(endOfLastMonth.getMonth() + 1)
      endOfLastMonth.setDate(0)

      return [startOfLastMonth, endOfLastMonth]
    },
  },
]

export default class Controls extends React.Component {
  constructor (props) {
    super(props)

    this.onSubmitHandler = this.onSubmitHandler.bind(this)
    this.onCancelHandler = this.onCancelHandler.bind(this)
  }

  onSubmitHandler (e) {
    const { onSave } = this.props

    e.preventDefault()

    onSave()
  }

  onCancelHandler (e) {
    const { onCancel } = this.props

    e.preventDefault()

    onCancel()
  }

  render () {
    const { className, dates, presets, onChange, onSave } = this.props

    const computedPresets = PRESETS.map(preset => {
      const selectedDatesTimestamps = chain(dates).map(getDate).map(getTimestamp).value()
      const presetDatesTimestamps = chain(preset.callback()).map(getDate).map(getTimestamp).value()

      return {
        active: isEqual(selectedDatesTimestamps, presetDatesTimestamps),
        ...preset,
      }
    })

    return (
      <div className={classNames('Controls', className)}>
        {
          presets && (
            <fieldset className="fieldset-presets">
              <Menu
                items={computedPresets}
                onClick={(e, { callback }) => {
                  const dates = callback()

                  onChange(dates)
                  onSave()
                }}
              />
            </fieldset>
          )
        }

        {
          !presets && (
            <fieldset className="fieldset-dates">
              <FormGroup
                type="text"
                name="start_date"
                label="Start date:"
                addons={{
                  right: <Icon>calendar</Icon>,
                }}
                readOnly
                value={dates[0] && dateFormat(dates[0], 'yyyy/mm/dd h:MM TT')}
              />

              <FormGroup
                type="text"
                name="end_date"
                label="End date:"
                addons={{
                  right: <Icon>calendar</Icon>,
                }}
                readOnly
                value={dates[1] && dateFormat(dates[1], 'yyyy/mm/dd h:MM TT')}
              />
            </fieldset>
          )
        }

        <fieldset className="fieldset-actions">
          <Button
            type="submit"
            primary
            fullWidth
            disabled={reject(dates, isDate).length}
            onClick={this.onSubmitHandler}
          >
            Submit
          </Button>

          <Button
            fullWidth
            onClick={this.onCancelHandler}
          >
            Cancel
          </Button>
        </fieldset>
      </div>
    )
  }
}

Controls.propTypes = {
  dates: PropTypes.oneOfType([PropTypes.instanceOf(Date)]),
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
  presets: PropTypes.bool,
}

Controls.defaultProps = {
  onSave: noop,
  onCancel: noop,
  onChange: noop,
  presets: false,
}

import React from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'

import './input.scss'

export default class Input extends React.Component {
  render () {
    const { className, disabled, readOnly, ...props } = this.props

    return (
      <div className={classNames('Input', className)}>
        <input
          {...props}
          ref={ref => { this._input = ref }}
          disabled={disabled}
          className={classNames({
            disabled,
            readOnly,
          })}
        />
      </div>
    )
  }
}

Input.propTypes = {
  type: PropTypes.oneOf([
    'date',
    'email',
    'hidden',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'url',
  ]),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

Input.defaultProps = {
  type: 'text',
  disabled: false,
  readOnly: false,
}

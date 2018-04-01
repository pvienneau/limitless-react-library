import React from 'react'

import classNames from 'classnames'
import PropTypes from 'prop-types'

import { Input } from 'components'
import './input-group.scss'

export default class InputGroup extends React.Component {
  render () {
    const { className, addons: { left: addonLeft, right: addonRight }, ...props } = this.props

    return (
      <div className={classNames('InputGroup', className)}>
        <div className="input-group-inner">
          {
            addonLeft && (
              <div className="input-group-addon input-group-addon-left">
                {addonLeft}
              </div>
            )
          }
          <Input
            className="input-group-input"
            {...props}
          />
          {
            addonRight && (
              <div className="input-group-addon input-group-addon-right">
                {addonRight}
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

InputGroup.propTypes = {
  addons: PropTypes.shape({
    left: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string,
      PropTypes.number,
    ]),
    right: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
}

InputGroup.defaultProps = {
  addons: {},
}

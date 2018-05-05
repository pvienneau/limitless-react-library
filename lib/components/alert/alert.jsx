import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { Button } from 'components'
import './alert.scss'

export default class Alert extends Component {
  constructor (props) {
    super(props)

    this.onDismissHandle = this.onDismissHandle.bind(this)

    this.state = {
      isVisible: true,
    }
  }

  onDismissHandle () {
    this.setState({
      isVisible: false,
    })
  }

  render () {
    const {
      className,
      children,
      primary,
      warning,
      info,
      success,
      danger,
      dismissable,
      bordered,
      solid,
    } = this.props
    const { isVisible } = this.state

    if (!isVisible) return null

    return (
      <div className="Alert">
        <div className={classNames('alert-container', className, {
          primary,
          warning,
          info,
          success,
          danger,
          bordered,
          solid,
        })}>
          <div className="alert-content">
            {children}
          </div>

          {
            dismissable && (
              <Button
                icon="cross"
                fill={false}
                onClick={this.onDismissHandle}
              />
            )
          }
        </div>
      </div>
    )
  }
}

Alert.propTypes = {
  primary: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  dismissable: PropTypes.bool,
  children: PropTypes.node,
  bordered: PropTypes.bool,
  solid: PropTypes.bool,
}

Alert.defaultProps = {
  primary: false,
  warning: false,
  info: false,
  success: false,
  danger: false,
  dismissable: false,
  bordered: false,
  solid: false,
}

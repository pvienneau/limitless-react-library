import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { findKey } from 'lodash'

import { Button, Icon } from 'components'
import { isTruthy } from 'utils/js/boolean'
import './alert.scss'

const THEME_TO_ICON = {
  primary: 'menu6',
  warning: 'warning2',
  info: 'info3',
  success: 'checkmark3',
  danger: 'blocked',
}

export default class Alert extends Component {
  constructor (props) {
    super(props)

    this.onDismissHandle = this.onDismissHandle.bind(this)
    this.buildIcon = this.buildIcon.bind(this)

    this.state = {
      isVisible: true,
    }
  }

  buildIcon () {
    const { primary, warning, info, success, danger } = this.props

    const themes = {
      primary,
      warning,
      info,
      success,
      danger,
    }

    const theme = findKey(themes, isTruthy)
    const icon = THEME_TO_ICON[theme]

    return (
      <Icon className="icon-left">
        {icon}
      </Icon>
    )
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
      icon,
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
          { icon && this.buildIcon() }

          <div className="alert-content">
            {children}
          </div>

          {
            dismissable && (
              <Button
                icon="cross2"
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
  icon: PropTypes.bool,
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
  icon: false,
}

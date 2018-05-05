import React from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'utils/react-router'
import isUndefined from 'lodash.isundefined'

import { Icon, Badge } from 'components'
import './button.scss'

export default class Button extends React.Component {
  render () {
    const {
      children,
      icon,
      fill,
      className,
      iconPosition,
      primary,
      danger,
      warning,
      success,
      info,
      rounded,
      labeled,
      flat,
      to,
      disabled,
      xlarge,
      large,
      small,
      mini,
      active,
      badge,
      fullWidth,
      ...props
    } = this.props

    const Element = to ? Link : 'button'
    const computedProps = {}

    if (disabled) computedProps.disabled = true

    return (
      <Element
        {...props}
        {...computedProps}
        to={to}
        className={classNames('Button', className, {
          'no-fill': !fill,
          'has-children': !!children,
          'has-icon': !!icon,
          [`icon-position-${iconPosition}`]: !!iconPosition && !!icon,
          primary,
          danger,
          warning,
          info,
          success,
          rounded,
          labeled,
          flat,
          disabled,
          xlarge,
          large,
          small,
          mini,
          active,
          'full-width': fullWidth,
        })}
      >
        <span className="inner">
          {
            icon && <Icon className="button-icon">{icon}</Icon>
          }
          {
            children && <span className="label">{children}</span>
          }
          {
            !isUndefined(badge) && <Badge className="button-badge">{badge}</Badge>
          }
        </span>
      </Element>
    )
  }
}

Button.propTypes = {
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func,
  fill: PropTypes.bool,
  primary: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  rounded: PropTypes.bool,
  labeled: PropTypes.bool,
  flat: PropTypes.bool,
  disabled: PropTypes.bool,
  xlarge: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  mini: PropTypes.bool,
  active: PropTypes.bool,
  badge: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  fullWidth: PropTypes.bool,
}

Button.defaultProps = {
  fill: true,
  iconPosition: 'left',
  primary: false,
  warning: false,
  info: false,
  success: false,
  danger: false,
  rounded: false,
  labeled: false,
  flat: false,
  disabled: false,
  xlarge: false,
  large: false,
  small: false,
  mini: false,
  active: false,
  fullWidth: false,
}

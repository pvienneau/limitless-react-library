import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import { KEY_ESCAPE } from 'utils/constants'
import { Icon, Button, Paper } from 'components'
import './popup.scss'

class Popup extends Component {
  constructor (props) {
    super(props)

    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.buildTitle = this.buildTitle.bind(this)
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleClickOutside, true)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleClickOutside, true)
  }

  handleClickOutside (e) {
    const { close, noBackdrop, noKeyClose } = this.props

    if (
      !noBackdrop &&
      !noKeyClose &&
      e.keyCode === KEY_ESCAPE
    ) close()
  }

  buildTitle () {
    const { title } = this.props

    if (!title) return null

    switch (typeof title) {
      case 'string':
      case 'number':
        return (
          <h5>
            {title}
          </h5>
        )
      default:
        return title
    }
  }

  render () {
    const {
      className,
      children,
      noBackdrop,
      icon,
      close,
      mini,
      small,
      large,
      full,
    } = this.props

    const modalClickHandler = noBackdrop ? noop : close

    return (
      (
        <div
          className={classNames('Popup', className, {
            backdrop: !noBackdrop,
            mini,
            small,
            large,
            full,
          })}
          onClick={modalClickHandler}
        >
          <Paper className="popup-inner">
            <div className="popup-header">
              {
                icon && (
                  <Icon>
                    {icon}
                  </Icon>
                )
              }

              <div className="title">
                {this.buildTitle()}
              </div>

              <Button
                className="button-close"
                fill={false}
                icon="cross2"
                onClick={close}
              />
            </div>

            <div className="popup-body">
              {children}
            </div>

            <div className="popup-footer">
              <Button fill={false} onClick={close}>Close</Button>

              <Button primary onClick={close}>Save changes</Button>
            </div>
          </Paper>
        </div>
      )
    )
  }
}

Popup.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.node,
  noBackdrop: PropTypes.bool,
  noKeyClose: PropTypes.bool,
  children: PropTypes.node,
  close: PropTypes.func,
  mini: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  full: PropTypes.bool,
}

Popup.defaultProps = {
  noBackdrop: false,
  close: noop,
  noKeyClose: false,
  mini: false,
  small: false,
  large: false,
  full: false,
}

export default Popup

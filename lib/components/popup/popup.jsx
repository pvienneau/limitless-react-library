import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import { Icon, Button, Paper } from 'components'
import './popup.scss'

const Popup = ({
  className,
  children,
  title,
  noBackdrop,
  icon,
  close,
}) => {
  const modalClickHandler = noBackdrop ? noop : close

  return (
    (
      <div
        className={classNames('Popup', className, {
          backdrop: !noBackdrop,
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
            {
              title && (
                <h5 className="title">
                  {title}
                </h5>
              )
            }
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

Popup.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  noBackdrop: PropTypes.bool,
  children: PropTypes.node,
  close: PropTypes.func,
}

Popup.defaultProps = {
  noBackdrop: false,
  close: noop,
}

export default Popup

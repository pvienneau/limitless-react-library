import React from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'

import './dropdown.scss'

class Dropdown extends React.Component {
  render () {
    const { children, body, className, open, position, ...props } = this.props

    return (
      <div className={classNames('Dropdown', className, `dropdown-position-${position}`, {
        'dropdown-open': open,
      })}>
        { children }
        { open && (
          <div className="dropdown-body">
            {body}
          </div>
        )}
      </div>
    )
  }
}

Dropdown.propTypes = {
  open: PropTypes.bool,
  position: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left',
  ]),
}

Dropdown.defaultProps = {
  open: false,
  position: 'bottom',
}

export default Dropdown

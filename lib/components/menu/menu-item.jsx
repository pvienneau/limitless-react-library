import React from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import isEmpty from 'lodash.isempty'

import { Button, DropdownMenu } from 'components'
import './menu-item.scss'

export default class MenuItem extends React.Component {
  constructor (props) {
    super(props)

    this.hasItems = this.hasItems.bind(this)
  }

  hasItems () {
    return !isEmpty(this.props.items)
  }

  render () {
    const { label, className, items, divider, active, header, highlight, children, ...props } = this.props

    const computedProps = {}
    let ButtonElement = Button

    if (this.hasItems()) {
      ButtonElement = DropdownMenu
      computedProps.items = items
      computedProps.position = 'right'
    }

    return (
      <div className={classNames('MenuItem', className, {
        divider,
        header,
        highlight,
        active,
      })}>
        {
          label && !header ? (
            <ButtonElement
              {...props}
              {...computedProps}
              fill={false}
              items={items}
            >
              <span className="menu-item-content">
                <span className="menu-item-label">
                  {label}
                </span>
                <span className="menu-item-secondary-label">
                  {children}
                </span>
              </span>
            </ButtonElement>
          ) : (
            <div>
              {label}
            </div>
          )
        }
      </div>
    )
  }
}

MenuItem.propTypes = {
  label: PropTypes.string,
}

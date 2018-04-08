import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import isEmpty from 'lodash.isempty'
import noop from 'lodash.noop'

import { hash } from 'utils/js'
import MenuItem from './menu-item'
import './menu.scss'

export default class Menu extends React.Component {
  constructor (props) {
    super(props)

    this.itemFactory = this.itemFactory.bind(this)
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler (item) {
    const { onClick: propOnClick } = this.props
    const { to, onClick: itemOnClick, items } = item

    const hasSubItems = !isEmpty(items)

    return function (e) {
      !to && e.preventDefault()

      itemOnClick && itemOnClick(e, item)
      !hasSubItems && propOnClick && propOnClick(e, item)
    }
  }

  itemFactory (item, index) {
    const { large, small, mini } = this.props
    const itemObj = typeof item === 'string' ? { label: item } : item

    return (
      <li key={hash(`${item.label}-${index}`)}>
        <MenuItem
          {...itemObj}
          onClick={this.onClickHandler(itemObj)}
          large={large}
          small={small}
          mini={mini}
        />
      </li>
    )
  }

  render () {
    const { items, title, className, onMouseOver } = this.props

    if (isEmpty(items)) return null

    return (
      <div
        className={classNames('Menu', className)}
        onMouseOver={onMouseOver}
      >
        {title && <div className="menu-title">{title}</div>}
        <ul>
          {items.map(this.itemFactory)}
        </ul>
      </div>
    )
  }
}

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape(...MenuItem.propTypes),
    ]),
  ),
  title: PropTypes.string,
  large: PropTypes.bool,
  small: PropTypes.bool,
  mini: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
}

Menu.defaultProps = {
  items: [],
  title: '',
  large: false,
  small: false,
  mini: false,
  onClick: noop,
  onMouseOver: noop,
}

import React from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import isEmpty from 'lodash.isempty'
import noop from 'lodash.noop'

import { hash } from 'utils/js'
import MenuItem from './menu-item'
import { Paper } from 'components'
import './menu.scss'

export default class Menu extends React.Component {
  constructor (props) {
    super(props)

    this.itemFactory = this.itemFactory.bind(this)
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler (item) {
    const { onClick } = this.props
    const { to } = item

    return function (e) {
      !to && e.preventDefault()

      item.onClick && item.onClick(e, item)
      onClick && onClick(e, item)
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
    const { items, title, className } = this.props

    if (isEmpty(items)) return null

    return (
      <Paper className={classNames('Menu', className)}>
        {title && <div className="menu-title">{title}</div>}
        <ul>
          {items.map(this.itemFactory)}
        </ul>
      </Paper>
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
}

Menu.defaultProps = {
  items: [],
  title: '',
  large: false,
  small: false,
  mini: false,
  onClick: noop,
}

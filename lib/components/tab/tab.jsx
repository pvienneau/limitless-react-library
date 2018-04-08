import React, { Component } from 'react'
import classNames from 'classNames'
import PropTypes from 'prop-types'
import { isEmpty, map, get, has, isFunction, tail, head } from 'lodash'

import { Button, DropdownMenu } from 'components'
import './tab.scss'

export default class Tab extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeTabIndex: [0],
    }

    this.buildTabHeaders = this.buildTabHeaders.bind(this)
    this.handleTabHeaderClick = this.handleTabHeaderClick.bind(this)
    this.getTabRender = this.getTabRender.bind(this)
  }

  handleTabHeaderClick (...indices) {
    return () => {
      this.setState({
        activeTabIndex: [...indices],
      })
    }
  }

  buildTabHeaders () {
    const { items } = this.props
    const { activeTabIndex } = this.state

    return map(items, ({ label, items }, index) => {
      const Element = !isEmpty(items) ? DropdownMenu : Button

      const computedProps = {}

      if (!isEmpty(items)) {
        computedProps.items = map(items, (item, ii) => ({
          ...item,
          onClick: this.handleTabHeaderClick(index, ii),
          active: activeTabIndex[1] === ii,
        }))
      } else {
        computedProps.onClick = this.handleTabHeaderClick(index)
        computedProps.position = 'bottom'
      }

      return (
        <Element
          key={index}
          {...computedProps}
          className={classNames('tab-header-item', {
            'tab-header-item-active': activeTabIndex[0] === index,
          })}
          transparent
        >
          {label}
        </Element>
      )
    })
  }

  getTabRender () {
    const { items } = this.props
    const { activeTabIndex } = this.state

    const recursiveGetItemAtIndex = (item, indices) => {
      console.warn(indices, item)

      const index = head(indices)
      const nextItem = get(item, index)

      console.warn(nextItem)

      if (has(indices, 1)) {
        return recursiveGetItemAtIndex(get(nextItem, 'items', nextItem), tail(indices))
      } else {
        return get(nextItem, 'render') || get(item, 'render')
      }
    }

    const render = recursiveGetItemAtIndex(items, activeTabIndex)

    return isFunction(render) ? render.call(this) : render
  }

  render () {
    const { className, rounded, justified, highlight } = this.props

    return (
      <div className={classNames('Tab', className)}>
        <div className={classNames('tab-header', {
          rounded: rounded,
          justified: justified,
          highlight: highlight,
        })}>
          {this.buildTabHeaders()}
        </div>
        <div className="tab-body">
          {this.getTabRender()}
        </div>
      </div>
    )
  }
}

Tab.propTypes = {
  items: PropTypes.array,
  justified: PropTypes.bool,
  rounded: PropTypes.bool,
  highlight: PropTypes.bool,
}

Tab.defaultProps = {
  items: [],
  justified: false,
  rounded: false,
  highlight: false,
}

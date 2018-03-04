import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import clickOutside from 'node/react-click-outside'
import merge from 'lodash.merge'
import isNumber from 'lodash.isnumber'
import noop from 'lodash.noop'

import { Dropdown, Button } from 'components'
import { Menu } from 'components/menu'
import { KEY_ENTER, KEY_UP, KEY_DOWN } from 'utils/constants'
import { mod } from 'utils/js/math'
import './dropdown-menu.scss'

class DropdownMenu extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false,
      highlightIndex: null,
    }

    this.buildMenu = this.buildMenu.bind(this)
    this.onClickHandler = this.onClickHandler.bind(this)
    this.onItemSelectHandler = this.onItemSelectHandler.bind(this)
    this.onToggleHandler = this.onToggleHandler.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.setState = this.setState.bind(this)
  }

  componentDidMount () {
    ReactDOM.findDOMNode(this._Dropdown).addEventListener('keydown', this.handleKeyDown, true)
  }

  componentWillUnmount () {
    ReactDOM.findDOMNode(this._Dropdown).removeEventListener('keydown', this.handleKeyDown, true)
  }

  handleKeyDown (e) {
    const { highlightIndex } = this.state
    const { items, onSelect } = this.props

    if (e.keyCode === KEY_ENTER && items[highlightIndex]) this.onItemSelectHandler(e, items[highlightIndex])

    if (!isNumber(highlightIndex)) {
      return this.setState({
        highlightIndex: 0,
      })
    }

    switch(e.keyCode) {
      case KEY_UP:
        return this.setState(({highlightIndex}) => ({
          highlightIndex: mod(highlightIndex - 1, items.length)
        }))
      case KEY_DOWN:
        return this.setState(({highlightIndex}) => ({
          highlightIndex: mod(highlightIndex + 1, items.length)
        }))
    }
  }

  setState (state, callback) {
    const { onToggle } = this.props
    const prevState = this.state

    super.setState(state, () => {
      const nextState = this.state

      callback && callback()

      if (prevState.isOpen !== nextState.isOpen) this.onToggleHandler()
    })
  }

  onToggleHandler () {
    const { onToggle } = this.props
    const { isOpen } = this.state

    this.setState({
      highlightIndex: null,
    })

    onToggle(isOpen)
  }

  handleClickOutside () {
    this.setState({
      isOpen: false,
    })
  }

  onItemSelectHandler (e, item) {
    const { onSelect } = this.props

    onSelect(e, item)
    this.setState({
      isOpen: false,
    })
    document.activeElement.blur()
  }

  buildMenu () {
    const { items } = this.props
    const { highlightIndex } = this.state
    const computedItems = merge([], items)

    if (computedItems[highlightIndex]) computedItems[highlightIndex].className = classNames(computedItems[highlightIndex].className, 'highlight')

    return <Menu
      ref={ref => this._Menu = ref}
      items={computedItems}
      onClick={this.onItemSelectHandler}
    />
  }

  onClickHandler (e, ...args) {
    const { onClick } = this.props

    e.preventDefault()

    this.setState(
      state => ({
        isOpen: !state.isOpen,
      }),
      () => onClick(e, ...args)
    )
  }

  render () {
    const { items, className, children, position, ...props } = this.props
    const { isOpen } = this.state

    return (
      <Dropdown
        {...props}
        ref={ref => this._Dropdown = ref}
        className={classNames('DropdownMenu', className)}
        body={this.buildMenu()}
        open={isOpen}
        position={position}
      >
        <Button
          {...props}
          onClick={this.onClickHandler}
          className={classNames('dropdown-button', `dropdown-button-position-${position}`)}
          fullWidth
        >
          <span className="dropdown-button-content">
            {children}
          </span>
        </Button>
      </Dropdown>
    )
  }
}

DropdownMenu.propTypes = {
  ...Dropdown.propTypes,
  items: Menu.propTypes.items,
  onToggle: PropTypes.func,
  onSelect: PropTypes.func,
  onClick: PropTypes.func,
}

DropdownMenu.defaultProps = {
  position: false,
  onSelect: noop,
  onToggle: noop,
  onClick: noop,
}

export default clickOutside(DropdownMenu)

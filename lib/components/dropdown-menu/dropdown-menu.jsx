import React from 'react'

import classNames from 'classnames'
import clickOutside from 'node/react-click-outside'

import { Dropdown, Button } from 'components'
import { Menu } from 'components/menu'
import './dropdown-menu.scss'

class DropdownMenu extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false,
    }

    this.buildMenu = this.buildMenu.bind(this)
    this.onClickHandler = this.onClickHandler.bind(this)
    this.onMenuClickHandler = this.onMenuClickHandler.bind(this)
  }

  handleClickOutside () {
    this.setState({
      isOpen: false,
    })
  }

  onMenuClickHandler (e, item) {
    const { onSelect } = this.props

    onSelect(e, item)
    this.setState({
      isOpen: false,
    })
  }

  buildMenu () {
    const { items } = this.props

    return <Menu
      items={items}
      onClick={this.onMenuClickHandler}
    />
  }

  onClickHandler (e, ...args) {
    const { onClick } = this.props

    e.preventDefault()

    this.setState(
      state => ({
        isOpen: !state.isOpen,
      }),
      () => {
        onClick && onClick(e, ...args)
      }
    )
  }

  render () {
    const { items, className, children, position, ...props } = this.props
    const { isOpen } = this.state

    return (
      <Dropdown
        {...props}
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
}

DropdownMenu.defaultProps = {
  position: false,
}

export default clickOutside(DropdownMenu)

import React from 'react'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import map from 'lodash.map'
import isObject from 'lodash.isobject'
import find from 'lodash.find'
import get from 'lodash.get'

import clickOutside from 'node/react-click-outside'
import { DropdownMenu } from 'components'
import './select.scss'

class Select extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false,
      value: null,
    }

    this.onInputClickHandler = this.onInputClickHandler.bind(this)
    this.buildOptionsForMenu = this.buildOptionsForMenu.bind(this)
    this.buildOptionsForSelect = this.buildOptionsForSelect.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.onInputFocusHandler = this.onInputFocusHandler.bind(this)
    this.onOptionSelect = this.onOptionSelect.bind(this)
  }

  handleClickOutside () {
    this.setState({
      isOpen: false,
    })
  }

  onInputClickHandler () {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }))
  }

  onInputFocusHandler (e) {
    e.preventDefault()

    this._Input._input.blur()
  }

  onOptionSelect (e, item) {
    const { value } = item

    this.setState({
      value,
      isOpen: false,
    })
  }

  buildOptionsForSelect () {
    const { options } = this.props

    return map(options, option => {
      if (typeof option !== 'object') {
        return {
          name: option,
        }
      }

      return {
        name: option.name || option.value,
        value: option.value || option.name,
      }
    })
  }

  buildOptionsForMenu () {
    const { options } = this.props
    const { value } = this.state

    return map(options, option => {
      if (!isObject(option)) {
        return {
          label: option,
          value: option,
          active: option === value,
        }
      }

      return {
        label: option.name || option.value,
        value: option.value || option.label,
        active: option.value === value,
      }
    })
  }

  render () {
    const { small, medium, className } = this.props
    const { value } = this.state

    const items = this.buildOptionsForMenu()
    const selectedItem = find(items, ['value', value])
    const label = get(selectedItem, 'label')

    return (
      <DropdownMenu
        items={items}
        className={classNames('Select', className, {
          small,
          medium,
        })}
        onSelect={this.onOptionSelect}
      >
        <label>
          {label}
        </label>
      </DropdownMenu>
    )
  }

  // render () {
  //   const { small, medium, className, onClick } = this.props
  //   const { isOpen, value } = this.state
  //
  //   const items = this.buildOptionsForMenu()
  //   const selectedItem = find(items, ['value', value])
  //   const label = get(selectedItem, 'label')
  //
  //   return (
  //     <div
  //       className={classNames('Select', className, {
  //         small,
  //         medium,
  //       })}
  //       onClick={coCall(onClick, this.onInputClickHandler)}
  //     >
  //       <div className="select-inner">
  //         <Input
  //           ref={ref => { this._Input = ref }}
  //           className="select-input"
  //           readOnly
  //           value={label}
  //           onFocus={this.onInputFocusHandler}
  //         />
  //         {
  //           isOpen &&
  //           (
  //             <Menu
  //               className="select-menu"
  //               items={items}
  //               onClick={this.onOptionSelect}
  //             />
  //           )
  //         }
  //       </div>
  //     </div>
  //   )
  // }
}

Select.propTypes = {
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ])
    ),
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ]),
  onClick: PropTypes.func,
  small: PropTypes.bool,
  medium: PropTypes.bool,
}

export default clickOutside(Select)

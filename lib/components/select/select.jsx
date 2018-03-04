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
      value: null,
    }

    this.buildOptionsForMenu = this.buildOptionsForMenu.bind(this)
    this.buildOptionsForSelect = this.buildOptionsForSelect.bind(this)
    this.onInputFocusHandler = this.onInputFocusHandler.bind(this)
    this.onOptionSelect = this.onOptionSelect.bind(this)
  }

  onInputFocusHandler (e) {
    e.preventDefault()

    this._Input._input.blur()
  }

  onOptionSelect (e, item) {
    const { value } = item

    this.setState({
      value,
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

export default Select

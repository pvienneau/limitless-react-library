import React from 'react'
import ReactDOM from 'react-dom'
import clickOutside from 'react-click-outside'
import hoistNonReactStatic from 'hoist-non-react-statics'
import PropTypes from 'prop-types'

import { KEY_ESCAPE } from 'utils/constants'

export default function (Component) {
  const ComputedComponent = clickOutside(Component)
  const componentName = ComputedComponent.displayName || ComputedComponent.name

  class EnhancedComponent extends React.Component {
    constructor (props) {
      super(props)

      this.handleClickOutside = this.handleClickOutside.bind(this)
    }

    componentDidMount () {
      document.addEventListener('keydown', this.handleClickOutside, true)
    }

    componentWillUnmount () {
      document.removeEventListener('keydown', this.handleClickOutside, true)
    }

    handleClickOutside (e) {
      if (e.keyCode === KEY_ESCAPE) {
        document.activeElement.blur()
        this.__wrappedInstance.handleClickOutside(e)
      }
    }

    render () {
      const { wrappedRef, ...rest } = this.props

      return (
        <ComputedComponent
          {...rest}
          wrappedRef={c => {
            this.__wrappedInstance = c
            this.__domNode = ReactDOM.findDOMNode(c)
            wrappedRef && wrappedRef(c)
          }}
        />
      )
    }
  }

  EnhancedComponent.displayName = `enhancedClickOutside(${componentName})`

  EnhancedComponent.propTypes = {
    wrappedRef: PropTypes.func,
  }

  return hoistNonReactStatic(EnhancedComponent, ComputedComponent)
}

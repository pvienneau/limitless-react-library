import React, { Component } from 'react'
import { uniqueId } from 'lodash'

import { Consumer } from './context'

export default class Popup extends Component {
  componentWillMount () {
    this._uid = uniqueId()
  }

  open () {
    this._open(this.props)
  }

  render () {
    return (
      <Consumer>
        {({ open }) => {
          this._open = open
        }}
      </Consumer>
    )
  }
}

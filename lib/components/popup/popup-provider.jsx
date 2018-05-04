import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'

import Popup from './popup'
import { Provider } from './context'

export default class PopupProvider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      popup: null,
    }

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleOpen (popup) {
    this.setState({
      popup,
    })
  }

  handleClose () {
    this.setState({
      popup: null,
    })
  }

  render () {
    const { children } = this.props
    const { popup } = this.state

    const store = {
      open: this.handleOpen,
    }

    return (
      <Provider value={store}>
        <div>
          {children}

          {
            !isEmpty(popup) && <Popup {...popup} close={this.handleClose} />
          }
        </div>
      </Provider>
    )
  }
}

PopupProvider.propTypes = {
  children: PropTypes.node,
}

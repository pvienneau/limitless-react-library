import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { fill } from 'lodash'

import './grid.scss'

export default class Grid extends Component {
  render () {
    const { className, columns, children } = this.props

    return (
      <div
        className={classNames('Grid', className)}
        style={{
          gridTemplateColumns: fill(Array(columns), `${(100 / columns).toFixed(4)}%`).join(' '),
        }}
      >
        {children}
      </div>
    )
  }
}

Grid.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.number,
  children: PropTypes.node,
}

Grid.defaultProps = {
  columns: 1,
}

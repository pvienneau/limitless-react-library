import React, { Component } from 'react'
import trimStart from 'lodash.trimstart'
import trim from 'lodash.trim'
import classNames from 'classnames'
import { Link as ReactRouterLink, withRouter } from 'react-router-dom'

class Link extends Component {
  render () {
    const {
      to,
      className,
      location,
      history,
      match,
      ...props
    } = this.props

    const computedTo = `/${trimStart(to, '/')}`
    const isCurrentPath = trim(to, '/') === trim(location.pathname, '/')

    return (
      <ReactRouterLink
        className={classNames(className, {
          current: isCurrentPath,
        })}
        to={computedTo}
        {...props}
      />
    )
  }
}

Link.propTypes = ReactRouterLink.propTypes

export default withRouter(Link)

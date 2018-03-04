import React from 'react'

import classNames from 'classnames'

import './paper.scss'

const Paper = ({
  className,
  children,
  ...props
}) => (
  <div
    {...props}
    className={classNames('Paper', className)}
  >
    {children}
  </div>
)

export default Paper

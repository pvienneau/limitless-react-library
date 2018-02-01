import React from 'react';

import classNames from 'classnames';

import './paper.scss';

export default ({
  className,
  children,
})  => (
  <div className={classNames('Paper', className)}>
    {children}
  </div>
)

import React from 'react';

import classNames from 'classnames';

import './paper.scss';

const Paper = ({
  className,
  children,
})  => (
  <div className={classNames('Paper', className)}>
    {children}
  </div>
)

export default Paper;

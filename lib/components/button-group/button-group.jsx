import React from 'react';

import classNames from 'classnames';

import './button-group.scss';

export default ({
  className,
  children,
}) => (
  <div className={classNames('ButtonGroup', className)}>
    <div className="button-group-inner">
      {children}
    </div>
  </div>
)

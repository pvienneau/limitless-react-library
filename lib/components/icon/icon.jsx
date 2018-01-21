import React from 'react';

import classNames from 'classnames';

import './icon.scss';

export default ({ children, className, ...props }) => (
    <span
      {...props}
      className={classNames('Icon', className, `icon-${children}`)}
    >
      <div className="inner" />
    </span>
);

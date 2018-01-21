import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import './tag.scss';

const Tag = ({
  children,
  className,
  primary = false,
  warning = false,
  info = false,
  success = false,
  danger = false,
}) => (
  <span className={classNames('Tag', className, {
    primary,
    warning,
    info,
    success,
    danger,
  })}>
    {children}
  </span>
)

Tag.propTypes = {
  primary: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
}

export default Tag;

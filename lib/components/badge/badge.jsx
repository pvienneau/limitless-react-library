import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import './badge.scss';

const Badge = ({
  children,
  primary,
  warning,
  info,
  success,
  danger,
}) => (
  <span className={classNames('Badge', {
    primary,
    warning,
    info,
    success,
    danger,
  })}>
    {children}
  </span>
);

Badge.propTypes = {
  primary: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
};

export default Badge;

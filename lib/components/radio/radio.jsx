import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import './radio.scss';

export default class Radio extends React.Component {
  render() {
    const {
      className,
      id,
      name,
      checked,
      primary,
      success,
      danger,
      info,
      warning,
      disabled,
      ...props
    } = this.props;

    return (
      <div className={classNames('Radio', classNames, {
        checked,
        primary,
        success,
        danger,
        warning,
        info,
        disabled,
      })}>
      <label
        className="radio-container"
      >
        <input
          {...props}
          type="radio"
        />
        {name}
      </label>
      </div>
    );
  }
}

Radio.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  primary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
};

Radio.defaultProps = {
  primary: false,
  success: false,
  danger: false,
  warning: false,
  info: false,
}

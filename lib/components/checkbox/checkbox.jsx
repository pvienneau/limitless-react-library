import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import './checkbox.scss';

export default class Checkbox extends React.Component {
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
      <div className={classNames('Checkbox', className, {
        checked,
        primary,
        success,
        danger,
        warning,
        info,
        disabled,
      })}>
        <label className="checkbox-label">
          <span className="checkbox-container">
            <input
              {...props}
              type="checkbox"
            />
          </span>
          {name}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
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

Checkbox.defaultProps = {
  primary: false,
  success: false,
  danger: false,
  warning: false,
  info: false,
}

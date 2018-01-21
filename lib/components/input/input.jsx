import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import './input.scss';

export default class Input extends React.Component {
  render () {
    const { className, disabled, readonly, ...props } = this.props;

    return (
      <div className={classNames('Input', className)}>
        <input
          {...props}
          disabled={disabled}
          className={classNames({
            disabled,
            readonly,
          })}
        />
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
}

Input.defaultProps = {
  type: PropTypes.oneOf([
    'date',
    'email',
    'hidden',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'url',
  ]),
  disabled: false,
  readonly: false,
}

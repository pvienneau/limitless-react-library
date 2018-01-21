import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import './textarea.scss';

export default class Textarea extends React.Component {
  render() {
    const { value, className, disabled, readOnly, resize, ...props } = this.props;

    return (
      <div className={classNames('Textarea', className)}>
        <textarea
          {...props}
          disabled={disabled}
          className={classNames({
            disabled,
            readOnly,
            'no-resize': !resize,
          })}
        >
          {value}
        </textarea>
      </div>
    );
  }
}

Textarea.propTypes = {
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  resize: PropTypes.bool,
};

Textarea.defaultProps = {
  disabled: false,
  readOnly: false,
  resize: false,
}

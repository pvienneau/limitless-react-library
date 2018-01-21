import React from 'react';

import classNames from 'classnames';

import { Input } from 'components';
import './form-group.scss';

export default class FormGroup extends React.Component {
  render() {
    const { className, label, name, ...props } = this.props;

    return (
      <div className={classNames('FormGroup', className)}>
        <label
          className="formgroup-label"
          htmlFor={name}
        >
          {label}
        </label>
        <Input
          {...props}
          id={name}
          className="formgroup-input"
        />
      </div>
    );
  }
}

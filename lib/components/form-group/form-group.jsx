import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import { InputGroup } from 'components/input-group';
import { Textarea } from 'components/textarea';
import { Select } from 'components/select';
import { DatePicker } from 'components/date-picker';
import './form-group.scss';

export default class FormGroup extends React.Component {
  constructor(props) {
    super(props);

    this.getFormElement = this.getFormElement.bind(this);
  }

  getFormElement() {
    const { type } = this.props;

    switch(type) {
      case 'textarea':
        return Textarea;
      case 'select':
        return Select;
      case 'date':
        return DatePicker;
    }

    return InputGroup;
  }

  render() {
    const { className, label, name, value, ...props } = this.props;
    const FormElement = this.getFormElement();

    return (
      <div className={classNames('FormGroup', className)}>
        <label
          className="formgroup-label"
          htmlFor={name}
        >
          {label}
        </label>
        <FormElement
          {...props}
          id={name}
          className="formgroup-input"
          defaultValue={value}
        />
      </div>
    );
  }
}

FormGroup.propTypes = {
  type: PropTypes.string.isRequired,
}

import React from 'react';

import map from 'lodash.map';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Checkbox } from 'components/checkbox';
import './checkbox-group.scss';

export default class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props);

    this.buildCheckboxElement = this.buildCheckboxElement.bind(this);
  }

  buildCheckboxElement() {
    const { options, value: initialValue, initialDisabled, name } = this.props;

    return map(options, option => {
      if (typeof option !== 'object') return (
        <Checkbox
          key={option}
          name={name}
          value={option}
          checked={initialValue === option}
          disabled={initialDisabled}
        />
      );

      const { value, disabled, ...props } = option;

      return (
        <Checkbox
          {...props}
          key={value}
          value={value}
          checked={initialValue === value}
          disabled={disabled || initialDisabled}
        />
      );
    })
  }

  render() {
    const { className, options, inline, label, ...props } = this.props;

    return (
      <div
        {...props}
        className={classNames('CheckboxGroup', className, {
          inline,
        })}
      >
        {
          label && (
            <label
              className="checkbox-group-title"
            >
              {label}
            </label>
          )
        }
        {this.buildCheckboxElement()}
      </div>
    );
  }
}

CheckboxGroup.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      ...Checkbox.PropTypes,
    }),
  ),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
}

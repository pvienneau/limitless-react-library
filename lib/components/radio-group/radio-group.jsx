import React from 'react';

import map from 'lodash.map';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Radio } from 'components/radio';
import './radio-group.scss';

export default class RadioGroup extends React.Component {
  constructor(props) {
    super(props);

    this.buildRadioElement = this.buildRadioElement.bind(this);
  }

  buildRadioElement() {
    const { options, value: initialValue, initialDisabled, name } = this.props;

    return map(options, option => {
      if (typeof option !== 'object') return (
        <Radio
          key={option}
          name={name}
          value={option}
          checked={initialValue === option}
          disabled={initialDisabled}
        />
      );

      const { value, disabled, ...props } = option;

      return (
        <Radio
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
        className={classNames('RadioGroup', className, {
          inline,
        })}
      >
        {
          label && (
            <label
              className="radio-group-title"
            >
              {label}
            </label>
          )
        }
        {this.buildRadioElement()}
      </div>
    );
  }
}

RadioGroup.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      ...Radio.PropTypes,
    }),
  ),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
}

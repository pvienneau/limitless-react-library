import React from 'react';

import map from 'lodash.map';
import includes from 'lodash.includes';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Toggle } from 'components/toggle';
import './toggle-group.scss';

export default class ToggleGroup extends React.Component {
  constructor(props) {
    super(props);

    this.buildToggleElement = this.buildToggleElement.bind(this);
  }

  buildToggleElement() {
    const { options, value: initialValues, initialDisabled, name } = this.props;

    return map(options, option => {

      if (typeof option !== 'object') return (
        <Toggle
          key={option}
          name={name}
          value={option}
          checked={includes(initialValues, option)}
          disabled={initialDisabled}
        />
      );

      const { value, disabled, ...props } = option;

      return (
        <Toggle
          {...props}
          key={value}
          value={value}
          checked={includes(initialValues, value)}
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
        className={classNames('ToggleGroup', className, {
          inline,
        })}
      >
        {
          label && (
            <label
              className="toggle-group-title"
            >
              {label}
            </label>
          )
        }
        {this.buildToggleElement()}
      </div>
    );
  }
}

ToggleGroup.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      ...Toggle.PropTypes,
    }),
  ),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
}

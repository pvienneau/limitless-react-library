import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Checkbox } from 'components';
import './toggle.scss';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);

    const { checked } = this.props;

    this.state = {
      isChecked: checked,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler() {
    const { disabled } = this.props;

    if (disabled) return;

    this.setState(({ isChecked }) => ({
      isChecked: !isChecked,
    }));
  }

  render() {
    const { className, disabled, name, large, small, mini, ...props } = this.props;
    const { isChecked } = this.state;

    return (
      <label className={classNames('Toggle', className, {
        checked: isChecked,
        disable: disabled,
        large,
        small,
        mini,
      })}>
        <Checkbox
          {...props}
          className='toggle-checkbox'
          checked={isChecked}
          disabled={disabled}
          name={name}
          onChange={this.onChangeHandler}
        />
      </label>
    );
  }
}

Toggle.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  primary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  mini: PropTypes.bool,
};

Toggle.defaultProps = {
  checked: false,
  primary: false,
  success: false,
  danger: false,
  warning: false,
  info: false,
  large: false,
  small: false,
  mini: false,
};

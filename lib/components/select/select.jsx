import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import map from 'lodash.map';
import clickOutside from 'react-click-outside';

import { coCall } from 'utils/js';
import { Input, Menu } from 'components';
import './select.scss';

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.onInputFocus = this.onInputFocus.bind(this);
    this.buildOptionsForMenu = this.buildOptionsForMenu.bind(this);
    this.buildOptionsForSelect = this.buildOptionsForSelect.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.buildElements = this.buildElements.bind(this);
  }

  handleClickOutside() {
    this.setState({
      isOpen: false,
    });
  }

  onInputFocus() {
    this.setState({
      isOpen: true,
    });
  }

  buildOptionsForSelect() {
    const { options } = this.props;

    return map(options, option => {
      if (typeof option !== 'object')
        return {
          name: option,
        };

      return {
        name: option.name || option.value,
        value: option.value || option.name,
      };
    });
  }

  buildOptionsForMenu() {
    const { options } = this.props;

    return map(options, option => {
      if (typeof option !== 'object')
        return {
          label: option,
        };

      return {
        label: option.name || option.value
      };

    });
  }

  buildElements() {
    const { multiple, onFocus } = this.props;
    const { isOpen, value } = this.state;

    let element;

    if (multiple) {
      element = (
        <select multiple>
          {
            map(this.buildOptionsForSelect(), ({
              name,
              value,
            }) => (
              <option
                key={value || name}
                value={value}
              >
                {name || value}
              </option>
            ))
          }
        </select>
      );
    } else {
      element = (
        <div>
          <Input
            className="select-input"
            readOnly
            value={value}
            onFocus={coCall(onFocus, this.onInputFocus)}
          />
          {
            isOpen &&
            (
              <Menu className="select-menu" items={this.buildOptionsForMenu()} />
            )
          }
        </div>
      );
    }

    return (
      <div className="select-inner">
        {element}
      </div>
    );
  }

  render() {
    const { multiple, className } = this.props;

    return (
      <div
        className={classNames('Select', className, {
          multiple,
        })}
      >
        {this.buildElements()}
      </div>
    );
  }
}

Select.propTypes = {
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ])
    ),
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ])
}

export default clickOutside(Select);

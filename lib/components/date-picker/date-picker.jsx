import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import clickOutside from 'react-click-outside';

import { InputGroup, Icon, Dropdown, Calendar } from 'components';
import './date-picker.scss';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }

    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  handleClickOutside() {
    console.log('click outside');
    this.setState({
      isOpen: false,
    });
  }

  onFocusHandler() {
    this.setState({
      isOpen: true,
    });
  }

  render() {
    const { className, ...props } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={classNames('DatePicker', className)}>
          <Dropdown
            body={<Calendar />}
            open={isOpen}
            position="bottom"
          >
            <InputGroup
              addons={{left: <Icon>calendar22</Icon>}}
              onFocus={this.onFocusHandler}
            />
          </Dropdown>
      </div>
    );
  }
}

export default clickOutside(DatePicker);

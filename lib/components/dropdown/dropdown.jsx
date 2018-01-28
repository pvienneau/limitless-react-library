import React from 'react';

import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';
import clickOutside from 'react-click-outside';
import classNames from 'classnames';

import { Button, Icon } from 'components';
import './dropdown.scss';

class Dropdown extends React.Component {
    static propTypes = {
      onClick: PropTypes.func,
    };

    constructor(props) {
      super(props);

      this.state = {
        isOpen: false,
      };

      this.onClickHandler = this.onClickHandler.bind(this);
      this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    handleClickOutside() {
      this.setState({
        isOpen: false,
      });
    }

    onClickHandler(e, ...args) {
      const { onClick } = this.props;

      this.setState(
        state => ({
            isOpen: !state.isOpen,
        }),
        () => {
          onClick && onClick(e, ...args);
        }
      );
    }

    render() {
      const { children, onClick, body, className, position, ...props } = this.props;
      const { isOpen } = this.state;

      return (
        <div className={classNames('Dropdown', className, `dropdown-position-${position}`, {
          'dropdown-open': isOpen,
        })}>
          <Button
          {...props}
          onClick={this.onClickHandler}
          className="dropdown-button"
          >
              <span className="dropdown-button-content">
                {children}
              </span>
          </Button>
          { isOpen && (
            <div className="dropdown-body">
              {body}
            </div>
          )}
        </div>
      );
    }
}

Dropdown.propTypes = {
  position: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left',
  ]),
}

Dropdown.defaultProps = {
  position: 'bottom',
}

export default clickOutside(Dropdown);

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
      const { children, onClick, body, className, ...props } = this.props;
      const { isOpen } = this.state;

      return (
        <div className="Dropdown">
          <Button
          {...props}
          onClick={this.onClickHandler}
          className={classNames('dropdown-button', className)}
          >
              {children}
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

export default clickOutside(Dropdown);

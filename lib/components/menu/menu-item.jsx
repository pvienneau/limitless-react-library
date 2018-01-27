import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import isEmpty from 'lodash.isempty';

import { Menu } from 'components/menu';
import { Button } from 'components';
import './menu-item.scss';

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
    this.hasItems = this.hasItems.bind(this);

    this.state = {
      isOpen: false,
    }
  }

  static propTypes = {
    label: PropTypes.string,
  };

  onClickHandler(e) {
    const { onClick, items } = this.props;

    if (onClick) onClick(e);

    if (this.hasItems())
      this.setState(({ isOpen }) => ({
        isOpen: !isOpen
      }));
  }

  hasItems() {
    return !isEmpty(this.props.items);
  }

  render() {
    const { label, className, items, divider, active, header, highlight, children, ...props } = this.props;
    const { isOpen } = this.state;

    // const buttonIcon = this.hasItems() && (isOpen ? 'point-down' : 'point-right')
    const showSubItems = this.hasItems() && isOpen;

    return (
      <div className={classNames('MenuItem', className, {
        active: active || isOpen,
        divider,
        header,
        highlight,
      })}>
        {
          label && !header ? (
            <Button
              {...props}
              onClick={this.onClickHandler}
              fill={false}
            >
              <span className="menu-item-content">
                <span className="menu-item-label">
                  {label}
                </span>
                <span className="menu-item-secondary-label">
                  {children}
                </span>
              </span>
            </Button>
          ) : (
            <div>
              {label}
            </div>
          )
        }
        {showSubItems && (
          <Menu items={items} />
        )}
      </div>
    );
  }
}

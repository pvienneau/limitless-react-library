import React from 'react';

import classNames from 'classnames';

import { Dropdown } from 'components';
import { Menu } from 'components/menu';

export default class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);

    this.buildMenu = this.buildMenu.bind(this);
  }

  buildMenu() {
      const { items } = this.props;

      return <Menu items={items} />;
  }

  render() {
    const { items, className, ...props } = this.props;

    return (
      <Dropdown
        {...props}
        className={classNames('DropdownMenu', className)}
        body={this.buildMenu()}
      />
    )
  }
}

DropdownMenu.propTypes = {
  ...Dropdown.propTypes,
  items: Menu.propTypes.items,
};

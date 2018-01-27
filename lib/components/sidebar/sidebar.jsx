import React from 'react';

import classNames from 'classnames';

import { Menu, Button, Avatar } from 'components';
import { menusFixture } from 'utils/spec/fixtures/menu';
import './sidebar.scss';

export default class Sidebar extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={classNames('Sidebar', className)}>
        <div className="sidebar-header">
          <div className="sidebar-avatar" />
          <div>
            <div className="sidebar-title">
              Victoria Baker
            </div>
            Santa Ana, CA
          </div>
          <Button icon="cog" />
        </div>
        <Menu
          className="sidebar-menu"
          title="Main"
          items={menusFixture.items}
        />
      </div>
    );
  }
}

import React from 'react'

import classNames from 'classnames'

import { Menu, Button, Avatar } from 'components'
import { menusFixture } from 'utils/spec/fixtures/menu'
import './sidebar.scss'

export default class Sidebar extends React.Component {
  render () {
    const { className } = this.props

    return (
      <div className={classNames('Sidebar', className)}>
        <div className="sidebar-header">
          <Avatar
            className="sidebar-avatar"
            image="http://demo.interface.club/limitless/layout_1/LTR/default/assets/images/demo/users/face16.jpg"
          />
          <div>
            <div className="sidebar-title">
              Victoria Baker
            </div>
            Santa Ana, CA
          </div>
          <Button
            fill={false}
            icon="cog"
          />
        </div>
        <Menu
          className="sidebar-menu"
          title="Main"
          items={menusFixture.items}
        />
      </div>
    )
  }
}

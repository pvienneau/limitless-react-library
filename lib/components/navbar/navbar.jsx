import React from 'react'

import { Button, ButtonGroup, Badge, DropdownMenu, Avatar } from 'components'
import { Tag } from 'components/tag'
import './Navbar.scss'

export default class Navbar extends React.Component {
  render () {
    return (
      <div className="Navbar">
        <div className="navbar-sidebar">
          <Button
            icon="svg"
            fill={false}
          >
            LIMITLESS
          </Button>
        </div>

        <div className="navbar-content">
          <ButtonGroup>
            <Button
              icon="menu"
            />

            <Button
              icon="loop"
              badge={9}
            />

            <Tag success>
              Online
            </Tag>
          </ButtonGroup>

          <ButtonGroup>
            <Button
              icon="users"
            />

            <Button
              icon="bubbles4"
              badge={2}
            />

            <DropdownMenu
              items={[
                'My profile',
                'My balanced',
                {
                  label: 'Messages',
                  children: <Badge info>58</Badge>,
                },
                {
                  divider: true,
                  label: 'Account settings',
                },
                'Logout',
              ]}
            >
              <Avatar
                mini
                image="http://demo.interface.club/limitless/layout_1/LTR/default/assets/images/demo/users/face16.jpg"
              />
              Victoria
            </DropdownMenu>
          </ButtonGroup>
        </div>
      </div>
    )
  }
}

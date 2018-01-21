import React from 'react';

import { Menu, Button } from 'components';

import { menusFixture } from 'utils/spec/fixtures/menu';
import { Container, Header, Avatar, Title } from './sidebar.styled';

export default class Sidebar extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Avatar />
          <div>
            <Title>Victoria Baker</Title>
            Santa Ana, CA
          </div>
          <Button icon="cog" />
        </Header>
        <Menu title="Main" items={menusFixture.items} />
      </Container>
    );
  }
}

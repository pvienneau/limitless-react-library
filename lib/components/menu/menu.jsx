import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import { hash } from 'utils/js';

import MenuItem from './menu-item';
import { Container, MenuList, Title } from './menu.styled';

export default class Menu extends React.Component {
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape(...MenuItem.propTypes)),
    };

    static defaultProps = {
        items: [],
    };

    itemFactory(item, index) {
        return <MenuItem key={hash(`${item.label}-${index}`)} {...item} />;
    }

    render() {
        const { items, title, className } = this.props;

        return (
          <Container className={classNames('Menu', className)}>
            {title && <Title>{title}</Title>}
            <MenuList>
              {items.map(this.itemFactory)}
            </MenuList>
          </Container>
        );
    }
}

import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import isEmpty from 'lodash.isempty';
import isObject from 'lodash.isobject';

import { hash } from 'utils/js';
import MenuItem from './menu-item';
import './menu.scss';

export default class Menu extends React.Component {
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape(...MenuItem.propTypes)),
    };

    static defaultProps = {
        items: [],
    };

    itemFactory(item, index) {
        const itemObj = typeof item === 'string' ? { label: item } : item;

        return (
          <li key={hash(`${item.label}-${index}`)}>
            <MenuItem {...itemObj} />
          </li>
        );
    }

    render() {
        const { items, title, className } = this.props;

        if(isEmpty(items)) return null;

        return (
          <div className={classNames('Menu', className)}>
            {title && <div className="menu-title">{title}</div>}
            <ul>
              {items.map(this.itemFactory)}
            </ul>
          </div>
        );
    }
}

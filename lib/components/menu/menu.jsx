import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import isEmpty from 'lodash.isempty';
import isObject from 'lodash.isobject';

import { hash } from 'utils/js';
import MenuItem from './menu-item';
import { Paper } from 'components';
import './menu.scss';

export default class Menu extends React.Component {
    static propTypes = {
        items: PropTypes.arrayOf(
          PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape(...MenuItem.propTypes),
          ]),
        ),
        large: PropTypes.bool,
        small: PropTypes.bool,
        mini: PropTypes.bool,
    };

    static defaultProps = {
        items: [],
        large: false,
        small: false,
        mini: false,
    };

    constructor(props) {
      super(props);

      this.itemFactory = this.itemFactory.bind(this);
    }

    itemFactory(item, index) {
        const { large, small, mini } = this.props;
        const itemObj = typeof item === 'string' ? { label: item } : item;

        return (
          <li key={hash(`${item.label}-${index}`)}>
            <MenuItem
              {...itemObj}
              large={large}
              small={small}
              mini={mini}
            />
          </li>
        );
    }

    render() {
        const { items, title, className } = this.props;

        if(isEmpty(items)) return null;

        return (
          <Paper className={classNames('Menu', className)}>
            {title && <div className="menu-title">{title}</div>}
            <ul>
              {items.map(this.itemFactory)}
            </ul>
          </Paper>
        );
    }
}

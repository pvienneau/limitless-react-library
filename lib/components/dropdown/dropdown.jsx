import React from 'react';

import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';

import { Button, Icon } from 'components';
import { Menu } from 'components/menu';
import './dropdown.scss';

export default class Dropdown extends React.Component {
    static propTypes = {
        items: Menu.propTypes.items,
        onClick: PropTypes.func,
    };

    static defaultProps = {
      items: [],
    }

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(e, ...args) {
        const { onClick, items } = this.props;

        this.setState(
            state => ({
                isOpen: !isEmpty(items) && !state.isOpen,
            }),
            () => {
                onClick && onClick(e, ...args);
            }
        );
    }

    buildMenu() {
        const { items } = this.props;

        if (!this.state.isOpen) return null;

        return <Menu items={items} />;
    }

    render() {
        const { children, onClick, ...props } = this.props;

        return (
            <div className="Dropdown">
                <Button
                  {...this.props}
                  onClick={this.onClickHandler}
                >
                    {children}
                </Button>
                {this.buildMenu()}
            </div>
        );
    }
}

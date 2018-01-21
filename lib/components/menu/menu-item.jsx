import React from 'react';

import PropTypes from 'prop-types';

import { Container, Button } from './menu-item.styled';

export default class MenuItem extends React.Component {
    static propTypes = {
        label: PropTypes.string,
    };

    render() {
        const { label, ...props } = this.props;

        return (
            <Container>
                <Button fill={false} {...props}>{label}</Button>
            </Container>
        );
    }
}

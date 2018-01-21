import styled, { css } from 'styled-components';
import { darken } from 'polished';
import PropTypes from 'prop-types';
import theme from 'theme';

import { Icon as IconContainer } from 'components/icon';

function getButtonTheme(props) {
    if (props.primary) return 'primary';
    if (props.success) return 'success';
    if (props.warning) return 'warning';
    if (props.info) return 'info';
    return 'default';
}

export const Container = styled.button.attrs({
    theme: getButtonTheme,
})`
    display: inline-block;
    vertical-align: middle;
    border-radius: 3px;
    background-color: ${props => theme.colors.bg[props.theme]};
    color: ${props => theme.colors.fg[props.theme]};
    border: 1px solid ${props => darken(0.1, theme.colors.bg[props.theme])};
    outline: none;
    font: inherit;
    min-width: 100px;
    height: 36px;
    padding: 7px 10px;
    cursor: pointer;

    transition: 200ms ease-in-out;
    transition-property: background-color, border-color, color;

    :hover {
        background-color: ${props =>
            darken(0.075, theme.colors.bg[props.theme])};
        border-color: ${props => darken(0.2, theme.colors.bg[props.theme])};
    }

    ${({fill}) => !fill && css`
      &, &:hover {
        ${'' /* height: 36px;
        width: 36px; */}
        min-height: 0;
        min-width: 0;
        border-radius: 0;

        background-color: transparent;
        color: inherit;
        border-color: transparent;
        outline: none;
      }

      ${Icon} {
        font-size: 16px;
        width: 16px;
        height: 16px;
        line-height: 16px;
      }
    `};
`;

Container.propTypes = {
  fill: PropTypes.bool,
}

Container.defaultProps = {
  fill: false,
}

export const Inner = styled.span`
    display: flex;
    justify-content: center;
`;

export const Label = styled.span`
    ${({children}) => children && css`
      margin-left: 7px;
    `}
`;

export const Icon = styled(IconContainer)`
    color: inherit;
`;

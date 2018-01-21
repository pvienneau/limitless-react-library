import styled from 'styled-components'

import { Button as ButtonComponent } from 'components'
import {
  Container as ButtonContainer,
  Inner as ButtonInner
} from 'components/button/button.styled.jsx'

export const Container = styled.li`
    display: block;
    height: 36px;
    margin-left: -20px;
    margin-right: -20px;
`;

export const Button = styled(ButtonComponent)`
  width: 100%;
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;

  &:hover, &:focus {
    background-color: #334550;
  }

  &.active, &:active {
    &, &:focus, &:hover {
      background-color: #26a69a;
    }
  }

  ${ButtonInner} {
    justify-content: flex-start;
  }
`

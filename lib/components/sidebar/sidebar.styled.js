import styled from 'styled-components';
import { UNITS } from 'styles/const';

export const Container = styled.div`
  width: ${UNITS.SIDEBAR_WIDTH}px;
  background-color: #263238;
  color: white;
`;

export const Header = styled.div`
  width: 100%;
  min-height: 80px;
  padding: 20px;
  font-size: 12px;

  display: flex;
  justify-content: space-between;
`

export const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
`

export const Avatar = styled.div`
  width: 36px;
  height: 36px;

  border-radius: 100%;
  overflow: hidden;
  background-image: url(${({url}) => url});
  background-size: cover;
  background-color: red;
`

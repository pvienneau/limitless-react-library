import styled from 'styled-components';

import { Sidebar as SidebarComponent } from 'components';

export const Container = styled.div`
  display: flex;
`;

export const Sidebar = styled(SidebarComponent)``;

export const View = styled.div`
  flex-grow: 1;
  padding: 25px;
`

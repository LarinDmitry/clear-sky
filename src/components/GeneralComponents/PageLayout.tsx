import React, {FC} from 'react';
import {Outlet} from 'react-router';
import styled from 'styled-components';

const PageLayout: FC = () => (
  <Wrapper>
    <Outlet />
  </Wrapper>
);

const Wrapper = styled.div`
  height: 100vh;
  overflow: auto;
  background-color: ${({theme}) => theme.colors.gray050};
`;

export default PageLayout;

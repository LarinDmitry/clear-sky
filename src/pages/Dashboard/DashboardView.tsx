import React, {useEffect} from 'react';
import {useLocation} from 'react-router';
import styled from 'styled-components';
import ReactGA from 'react-ga4';
import Bars from './components/Bars';
import Tops from './components/Tops';
import Charts from './components/Charts';

const DashboardView = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({hitType: 'dashboard', page: location.pathname});
  }, []);

  return (
    <Wrapper>
      <Bars />
      <Tops />
      <Charts />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  padding: 1rem 1rem 1.5rem;
  display: grid;
  grid-template-rows: calc(15% - 2rem) calc(58% - 2rem) auto;
  grid-row-gap: 1rem;
  background-color: ${({theme}) => theme.colors.gray000};

  @media ${({theme}) => theme.breakpoints.maxTb} {
    height: 100%;
    grid-template-rows: repeat(3, auto);
  }
`;

export default DashboardView;

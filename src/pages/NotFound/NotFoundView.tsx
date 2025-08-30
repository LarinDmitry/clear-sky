import React, {useEffect} from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga4';
import {useLocation, useNavigate} from 'react-router';
import Button from '@mui/material/Button';
import {useAppSelector} from 'services/hooks';
import {selectUserConfiguration} from 'store/userSlice';
import {localization} from './NotFoundUtils';
import {font_body_1_reg, font_header_4_bold, mediumWeight} from 'theme/fonts';

const NotFoundView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {language} = useAppSelector(selectUserConfiguration);

  useEffect(() => {
    ReactGA.send({hitType: '404', page: location.pathname});
  }, []);

  const {NO_DATA, SUB_INFO, MAIN} = localization(language);

  return (
    <Wrapper>
      <Number>404</Number>
      <Title>{NO_DATA}</Title>
      <SubTitle>{SUB_INFO}</SubTitle>
      <BackBtn onClick={() => navigate('/main')}>{MAIN}</BackBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.gray000};
  border-radius: 24px;
`;

const Number = styled.div`
  ${mediumWeight};
  font-size: 4.75rem;
  color: ${({theme}) => theme.colors.blue090};
  margin-top: 1.25rem;
`;

const Title = styled.div`
  ${font_header_4_bold};
  margin-top: 1rem;
`;

const SubTitle = styled.div`
  ${font_body_1_reg};
  color: ${({theme}) => theme.colors.gray070};
  text-align: center;
  margin-top: 0.5rem;
`;

const BackBtn = styled(Button)`
  &.MuiButton-root {
    width: 8rem;
    border-radius: 20px;
    background-color: ${({theme}) => theme.colors.blue060};
    color: ${({theme}) => theme.colors.gray000};
    margin-top: 2.5rem;

    &:hover {
      background-color: ${({theme}) => theme.colors.blue060};
    }
  }
`;

export default NotFoundView;

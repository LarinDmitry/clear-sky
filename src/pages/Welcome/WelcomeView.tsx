import React, {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router';
import ReactGA from 'react-ga4';
import styled, {keyframes} from 'styled-components';
import LanguageSelector from 'components/GeneralComponents/LanguageSelector';
import Button from '@mui/material/Button';
import {useAppSelector} from 'services/hooks';
import {welcomeTitleStyles} from 'services/GlobalStyled';
import {selectUserConfiguration} from 'store/userSlice';
import {localization} from './WelcomeUtils';
import Background from 'assets/images/background.webp';
import {font_body_2_reg, font_header_6_bold} from 'theme/fonts';

const WelcomeView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {language} = useAppSelector(selectUserConfiguration);

  useEffect(() => {
    ReactGA.send({hitType: 'welcome', page: location.pathname});
  }, []);

  const {WELCOME, COME} = localization(language);

  return (
    <Wrapper>
      <LanguageSelector language={language} />
      <Content>
        <Title>{WELCOME}</Title>
        <Inside variant="contained" onClick={() => navigate('/dashboard')}>
          {COME}
        </Inside>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  padding: 1rem;
  background: url(${Background}) center center / cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  perspective: 800px;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
`;

const Title = styled.h1`
  ${welcomeTitleStyles};
`;

const Inside = styled(Button)`
  &.MuiButtonBase-root {
    ${font_body_2_reg};
    color: rgb(61, 64, 70);
    background: rgb(227, 191, 114);
    border-radius: 30px;
    padding: 0.75rem 2rem;
    ${font_header_6_bold};
    text-transform: uppercase;
    box-shadow: 0 4px 6px rgb(142, 147, 143);
    transition: all 0.3s ease;

    &:hover {
      box-shadow:
        0 6px 10px rgba(0, 0, 0, 0.5),
        0 0 20px rgb(227, 191, 114);
      transform: translateY(-3px);
    }

    &:active {
      transform: translateY(1px);
      box-shadow:
        0 3px 6px rgba(0, 0, 0, 0.2),
        0 0 15px rgb(227, 191, 114);
    }
  }
`;

export default WelcomeView;

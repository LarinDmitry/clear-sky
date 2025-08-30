import React, {Fragment, useEffect, useMemo} from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga4';
import BackBtn from 'components/GeneralComponents/BackBtn';
import DamageGrow from './components/DamageGrow';
import DamageDecrease from './components/DamageDecrease';
import TopPlayers from './components/TopPlayers';
import ZeroDamage from './components/ZeroDamage';
import Djinni from './components/Djinni';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';
import {useAppSelector} from 'services/hooks';
import {selectUserConfiguration} from 'store/userSlice';
import {localization} from './StatisticUtils';
import {globalLocalization} from 'services/GlobalUtils';
import Info from 'assets/icons/hint.svg';
import {font_body_2_bold} from 'theme/fonts';
import {useLocation} from 'react-router';

const StatisticView = () => {
  const {language} = useAppSelector(selectUserConfiguration);
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({hitType: 'statistic', page: location.pathname});
  }, []);

  const {
    TOP_PLAYERS,
    DAMAGE_DECREASE,
    ZERO_DAMAGE,
    JINNI_COEF,
    FORMULA,
    WHERE,
    COUNT,
    DAMAGE,
    AVERAGE_DAMAGE,
    AVERAGE_COUNT,
    SMALL,
    MEDIUM,
    HARD,
  } = localization(language);
  const {GROW} = globalLocalization(language);

  const arrValues = useMemo(
    () => [
      {title: GROW, value: <DamageGrow />},
      {title: TOP_PLAYERS, value: <TopPlayers />},
      {title: DAMAGE_DECREASE, value: <DamageDecrease />},
      {title: ZERO_DAMAGE, value: <ZeroDamage />},
      {
        title: (
          <Fragment>
            {JINNI_COEF}
            <Tooltip
              title={
                <List>
                  <li>
                    {FORMULA}
                    <Formula>
                      G=
                      <span>
                        <div>
                          Σ<sub>i=1</sub>
                          <sup className="top-el">n</sup>
                        </div>
                        <div>
                          Σ<sub>j=1</sub>
                          <sup className="top-el">n</sup>|x<sub>i</sub> - x<sub>j</sub>|
                        </div>
                      </span>
                      /
                      <span>
                        2n<sup>2</sup>μ, {WHERE}:
                      </span>
                    </Formula>
                    <List>
                      <li>
                        <b>n</b> {COUNT}
                      </li>
                      <li>
                        <b>
                          x<sub>i</sub>
                        </b>
                        {DAMAGE} <i>i</i>.
                      </li>
                      <li>
                        <b>μ</b> {AVERAGE_DAMAGE} (<i>{AVERAGE_COUNT}</i>).
                      </li>
                    </List>
                    <li>{SMALL}</li>
                    <li>{MEDIUM}</li>
                    <li>{HARD}</li>
                  </li>
                </List>
              }
            >
              <Hint>
                <Info />
              </Hint>
            </Tooltip>
          </Fragment>
        ),
        value: <Djinni />,
      },
    ],
    [
      GROW,
      TOP_PLAYERS,
      DAMAGE_DECREASE,
      ZERO_DAMAGE,
      JINNI_COEF,
      FORMULA,
      WHERE,
      COUNT,
      DAMAGE,
      AVERAGE_DAMAGE,
      AVERAGE_COUNT,
      SMALL,
      MEDIUM,
      HARD,
    ]
  );

  return (
    <Wrapper>
      <BackBtn />
      {arrValues.map(({title, value}, idx) => (
        <Fragment key={idx}>
          <Title>{title}</Title>
          {value}
        </Fragment>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  overflow: auto;
  padding: 1rem 1rem 1.5rem;
`;

const Title = styled.div`
  ${font_body_2_bold};
  margin: 1rem;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  padding: 0 0 0 1rem;

  & + li {
    margin: 0.5rem 0;
  }
`;

const Hint = styled(SvgIcon)`
  &.MuiSvgIcon-root {
    cursor: pointer;
    fill: ${({theme}) => theme.colors.blue090};
    height: 1rem;
    width: 1rem;
    margin-left: 0.5rem;
    animation: pulse 5s infinite;
  }
`;

const Formula = styled.div`
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    margin: 0.2rem 0;
    display: flex;

    .top-el {
      position: relative;
      right: 14px;
    }
  }
`;

export default StatisticView;

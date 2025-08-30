import React, {useCallback, useReducer, useMemo, useEffect} from 'react';
import styled from 'styled-components';
import {useLocation} from 'react-router';
import ReactGA from 'react-ga4';
import BackBtn from 'components/GeneralComponents/BackBtn';
import MuiInput from '@mui/material/Input';
import SvgIcon from '@mui/material/SvgIcon';
import {useAppSelector} from 'services/hooks';
import {selectUserConfiguration} from 'store/userSlice';
import {stateReducer} from 'services/GlobalUtils';
import {localization, sliderInitialState} from './BossHPUtils';
import Arrow from 'assets/icons/arrow_full.svg';
import {font_header_5_bold, font_header_6_bold} from 'theme/fonts';

// TODO нужны актуальные значения
const bossHPValues = Array.from({length: 200}, (_, i) => (i + 1) * 100).reverse();

const BossHPView = () => {
  const {language} = useAppSelector(selectUserConfiguration);
  const location = useLocation();
  const [state, stateDispatch] = useReducer(stateReducer, sliderInitialState);

  useEffect(() => {
    ReactGA.send({hitType: 'calculator', page: location.pathname});
  }, []);

  const updateValue = useCallback((key: string, newValue: number) => {
    stateDispatch({[key]: Math.min(key === 'bossLevel' ? 200 : 100, Math.max(1, newValue))});
  }, []);

  const {hpLevel, bossLevel} = state;

  const {CALCULATOR, BOSS_LEVEL, HP_LEVEL, HP_REMAINING} = localization(language);

  const arrValues = useMemo(
    () => [
      {key: 'bossLevel', title: BOSS_LEVEL, value: bossLevel, max: 200, endAdornment: 'lvl'},
      {key: 'hpLevel', title: HP_LEVEL, value: hpLevel, max: 100, endAdornment: '%'},
    ],
    [BOSS_LEVEL, HP_LEVEL, bossLevel, hpLevel]
  );

  return (
    <Wrapper>
      <BackBtn />
      <Content>
        <Title>{CALCULATOR}</Title>
        {arrValues.map(({key, title, value, max, endAdornment}) => (
          <Slider key={key}>
            <Label>
              <div>{title}</div>
              <Input
                value={value}
                size="small"
                onChange={({target: {value}}) => updateValue(key, Number(value))}
                inputProps={{min: 1, max, type: 'number'}}
                endAdornment={endAdornment}
              />
            </Label>
            <Value>
              <Icon onClick={() => updateValue(key, value - 1)}>
                <Arrow />
              </Icon>
              <Range
                type="range"
                min="1"
                max={max}
                value={value}
                onChange={({target: {value}}) => updateValue(key, Number(value))}
              />
              <Icon rotate={180} onClick={() => updateValue(key, value + 1)}>
                <Arrow />
              </Icon>
            </Value>
          </Slider>
        ))}
        <Text>
          {HP_REMAINING} {(bossHPValues[bossLevel - 1] * hpLevel) / 100} / {bossHPValues[bossLevel - 1]}
        </Text>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  padding: 1rem 1rem 1.5rem;
  align-items: center;
  gap: 1rem;
`;

const Content = styled.div`
  height: calc(100% - 4px);
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.div`
  ${font_header_5_bold};
`;

const Slider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Input = styled(MuiInput)`
  width: 2.75rem;

  input {
    padding: 0;
    cursor: pointer;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

const Value = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Text = styled.div`
  ${font_header_6_bold};
`;

const Range = styled.input.attrs({type: 'range'})`
  appearance: none;
  width: 250px;
  height: 24px;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 24px;
    border-radius: 20px;
    background: linear-gradient(to right, rgb(176, 193, 255), rgb(76, 110, 245) 100%);
    box-shadow: 0 0 0 5px rgba(72, 99, 235, 0.1);
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 28px;
    height: 28px;
    background: rgb(176, 193, 255);
    border-radius: 50%;
    border: 2px solid rgb(76, 110, 245);
    margin-top: -2px;
    cursor: pointer;
    transition: 0.2s ease;
  }
`;

const Icon = styled(SvgIcon)<{rotate?: number}>`
  &.MuiSvgIcon-root {
    width: 1.25em;
    height: 1.25em;
    cursor: pointer;
    ${({rotate}) => rotate && `transform: rotate(${rotate}deg)`};
    fill: ${({theme}) => theme.colors.gray100};
    border-radius: 50%;
    border: 2px solid rgba(72, 99, 235, 0.9);
    background-color: rgb(182, 193, 252);
  }
`;

export default BossHPView;

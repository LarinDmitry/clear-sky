import en from './localization/EN';
import uk from './localization/UK';
import ru from './localization/RU';
import {LocalizationObjProps} from 'services/GlobalUtils';

export interface SliderInitialStateProps {
  bossLevel: number;
  hpLevel: number;
}

const localizationObj = {en, uk, ru} as LocalizationObjProps;
export const localization = (language: string) => localizationObj[language];

export const sliderInitialState: SliderInitialStateProps = {
  bossLevel: 200,
  hpLevel: 100,
};

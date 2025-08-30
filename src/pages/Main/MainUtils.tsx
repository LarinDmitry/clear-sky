import en from './localization/EN';
import uk from './localization/UK';
import ru from './localization/RU';
import {LocalizationObjProps} from 'services/GlobalUtils';
import X from 'assets/images/quality/x.png';
import B from 'assets/images/quality/b+.png';
import A_Low from 'assets/images/quality/a-.png';
import A from 'assets/images/quality/a.png';
import A_High from 'assets/images/quality/a+.png';
import S from 'assets/images/quality/s.png';
import SS from 'assets/images/quality/ss.png';
import SSS from 'assets/images/quality/sss.png';
import Aspen from 'assets/images/heroes/aspen.png';
import Vulkan from 'assets/images/heroes/vulkan.png';
import Mokman from 'assets/images/heroes/mokman.png';
import Vesa from 'assets/images/heroes/vesa.png';
import Nataly from 'assets/images/heroes/nataly.png';
import Williams from 'assets/images/heroes/williams.png';

const localizationObj = {en, uk, ru} as LocalizationObjProps;
export const localization = (language: string) => localizationObj[language];

export const backgroundColor = [
  'rgb(255, 99, 132)',
  'rgb(54, 162, 235)',
  'rgb(255, 206, 86)',
  'rgb(75, 192, 192)',
  'rgb(153, 102, 255)',
  'rgb(255, 159, 64)',
  'rgb(255, 99, 132)',
  'rgb(54, 162, 235)',
  'rgb(255, 206, 86)',
  'rgb(75, 192, 192)',
  'rgb(153, 102, 255)',
  'rgb(255, 159, 64)',
  'rgb(255, 99, 132)',
  'rgb(54, 162, 235)',
  'rgb(255, 206, 86)',
  'rgb(75, 192, 192)',
  'rgb(153, 102, 255)',
  'rgb(255, 159, 64)',
  'rgb(255, 99, 132)',
  'rgb(54, 162, 235)',
];

export const hoverBackgroundColor = [
  'rgb(255, 69, 132)',
  'rgb(54, 132, 235)',
  'rgb(255, 176, 86)',
  'rgb(75, 162, 192)',
  'rgb(153, 72, 255)',
  'rgb(255, 129, 64)',
  'rgb(255, 69, 132)',
  'rgb(54, 132, 235)',
  'rgb(255, 176, 86)',
  'rgb(75, 162, 192)',
  'rgb(153, 72, 255)',
  'rgb(255, 129, 64)',
  'rgb(255, 69, 132)',
  'rgb(54, 132, 235)',
  'rgb(255, 176, 86)',
  'rgb(75, 162, 192)',
  'rgb(153, 72, 255)',
  'rgb(255, 129, 64)',
  'rgb(255, 69, 132)',
  'rgb(54, 132, 235)',
];

export const qualityImages: {[key: string]: string} = {
  '': X,
  'b+': B,
  'a-': A_Low,
  a: A,
  'a+': A_High,
  s: S,
  ss: SS,
  sss: SSS,
};

export const heroImages: {[key: string]: string} = {
  aspen: Aspen,
  mokman: Mokman,
  nataly: Nataly,
  vesa: Vesa,
  vulkan: Vulkan,
  williams: Williams,
};

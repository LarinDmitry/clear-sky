import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '../theme';

export default () => [
  useMediaQuery(theme.breakpoints.maxTb), // isMobile
  useMediaQuery(theme.breakpoints.maxLtg), // isTablet
  useMediaQuery(theme.breakpoints.minLtg), // isLaptop
];

export interface ThemeColors {
  blue100: string;
  blue090: string;
  blue080: string;
  blue070: string;
  blue060: string;
  blue050: string;

  orange100: string;
  orange090: string;
  orange080: string;
  orange070: string;
  orange060: string;
  orange050: string;

  red100: string;
  red090: string;
  red080: string;
  red070: string;
  red060: string;
  red050: string;

  green100: string;
  green090: string;
  green080: string;
  green070: string;
  green060: string;
  green050: string;

  gray100: string;
  gray090: string;
  gray080: string;
  gray070: string;
  gray060: string;
  gray050: string;
  gray000: string;

  dark100: string;
  dark090: string;
  dark080: string;
  dark070: string;
  dark060: string;
  dark050: string;
}

export interface ThemeBreakpoints {
  maxXs: string;
  maxSm: string;
  maxTb: string;
  maxMd: string;
  maxLt: string;
  maxLtg: string;
  maxLg: string;
  maxXl: string;
  minXs: string;
  minSm: string;
  minTb: string;
  minMd: string;
  minLt: string;
  minLtg: string;
  minLg: string;
  minXl: string;
}

export interface AppTheme {
  colors: ThemeColors;
  breakpoints: ThemeBreakpoints;
}

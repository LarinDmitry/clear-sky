import 'styled-components';
import type {AppTheme} from 'theme/types';

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default src as string;
}

declare module '*.jpg' {
  const path: string;
  export default path;
}

declare module '*.png' {
  const path: string;
  export default path;
}

declare module '*.webp' {
  const path: string;
  export default path;
}

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}

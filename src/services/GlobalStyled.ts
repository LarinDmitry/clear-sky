import {css} from 'styled-components';
import {font_header_1_bold, font_body_3_bold} from 'theme/fonts';

export const PlugCellStyles = css`
  ${font_body_3_bold};
  border-radius: 4px;
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding: 1rem;
`;

export const welcomeTitleStyles = css`
  ${font_header_1_bold};
  color: ${({theme}) => theme.colors.gray000};
  background: linear-gradient(to right, rgb(141, 252, 253), rgb(201, 254, 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  animation: glow 2s infinite alternate;

  @keyframes glow {
    0% {
      text-shadow:
        0 0 5px rgb(141, 252, 253),
        0 0 10px rgb(201, 254, 255);
    }
    100% {
      text-shadow:
        0 0 10px rgb(141, 252, 253),
        0 0 20px rgb(201, 254, 255);
    }
  }
`;

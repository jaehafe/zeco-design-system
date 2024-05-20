import styled from '@emotion/styled';
import { SerializedStyles, css } from '@emotion/react';

import { TagColor, Variants } from './Tag';
import { FONT_STYLES } from '../../styles/common.style';

export const Container = styled.div<{
  customStyles?: SerializedStyles;
  variants?: Variants;
  tagColor?: TagColor;
}>`
  ${({ customStyles }) => customStyles}

  width: fit-content;

  ${({ variants, tagColor, theme }) => {
    let width, padding, backgroundColor, color, borderRadius, fontStyle;

    switch (variants) {
      case 'rectangle':
        padding = '4px 8px';
        width = '50px';
        borderRadius = '1px';
        fontStyle = FONT_STYLES.CAPTION_R12;

        if (tagColor === 'red') {
          backgroundColor = theme.colors.red1;
          color = theme.colors.red6;
        }
        if (tagColor === 'blue') {
          backgroundColor = theme.colors.blue3;
          color = theme.colors.blue5;
        }
        if (tagColor === 'green') {
          backgroundColor = theme.colors.green300;
          color = theme.colors.green500;
        }

        break;

      case 'circle':
        padding = '1px 6px';
        backgroundColor = theme.colors.green300;
        color = theme.colors.green500;

        borderRadius = '100px';
        fontStyle = FONT_STYLES.BODY1_R14;

        break;

      default:
        break;
    }

    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${width};
      padding: ${padding};

      background-color: ${backgroundColor};
      color: ${color};
      border-radius: ${borderRadius};
      ${fontStyle}
    `;
  }}
`;

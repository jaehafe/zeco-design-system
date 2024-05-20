import styled from '@emotion/styled';
import { ButtonSizes, ButtonVariants } from './Button';
import { css } from '@emotion/react';
import { FONT_STYLES } from '../../styles/common.style';

export const BUTTON_SIZE = {
  xxl: {
    width: '345px',
    height: '56px',
  },
  xl: {
    width: '209px',
    height: '48px',
  },
  lg: {
    padding: '12px 16px',
  },
  md: {
    padding: '9px 12px',
  },
};

export const Container = styled.button<{
  variants?: ButtonVariants;
  type?: 'submit' | 'button';
  size?: ButtonSizes;
  isLoading?: boolean;
  disabled?: boolean;
  width?: string | number;
  height?: string | number;
  rightIcon?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7.5px;

  background-color: ${({ theme }) => theme.colors.gray1};
  // size가 md 일 때만, BODY1_R14
  ${({ size }) => (size === 'md' ? FONT_STYLES.BODY1_R14 : FONT_STYLES.BODY1_R16)}

  ${({ theme, variants, size, disabled }) => {
    let backgroundColor,
      color,
      border,
      hoverBackgroundColor,
      hoverColor,
      disabledBackgroundColor,
      disabledColor,
      width,
      height,
      padding,
      outline;

    switch (variants) {
      case 'primary':
        backgroundColor = theme.colors.green500;
        color = theme.colors.white;
        hoverBackgroundColor = theme.colors.greenGray3;
        disabledBackgroundColor = theme.colors.gray5;
        disabledColor = theme.colors.gray7;
        break;

      case 'secondary':
        backgroundColor = theme.colors.green300;
        color = theme.colors.green500;
        hoverBackgroundColor = theme.colors.greenGray1;
        hoverColor = theme.colors.greenGray3;
        disabledBackgroundColor = theme.colors.gray5;
        disabledColor = theme.colors.gray7;
        break;

      case 'outline':
        backgroundColor = theme.colors.white;
        color = theme.colors.gray11;
        outline = `1px solid ${theme.colors.gray6}`;
        disabledBackgroundColor = theme.colors.gray5;
        disabledColor = theme.colors.gray7;
        break;

      case 'delete':
        backgroundColor = theme.colors.red2;
        color = theme.colors.red6;
        hoverBackgroundColor = theme.colors.red3;
        hoverColor = theme.colors.red6;
        disabledBackgroundColor = theme.colors.gray5;
        disabledColor = theme.colors.gray7;
        break;

      case 'white':
        backgroundColor = theme.colors.white;
        color = theme.colors.green500;
        hoverColor = theme.colors.greenGray2;
        backgroundColor = theme.colors.transparent;
        break;

      default:
        backgroundColor = theme.colors.green500;
        color = theme.colors.white;
        hoverBackgroundColor = theme.colors.greenGray3;
        disabledBackgroundColor = theme.colors.gray5;
        disabledColor = theme.colors.gray7;
        outline = 'none';
        break;
    }

    /** size xxl, xl 인 경우 */
    if (size === 'xxl' || size === 'xl') {
      width = BUTTON_SIZE[size].width;
      height = BUTTON_SIZE[size].height;
    } else if (size === 'lg' || size === 'md') {
      padding = BUTTON_SIZE[size].padding;
      width = 'fit-content';
    }

    return css`
      border-radius: 4px;
      background-color: ${backgroundColor};
      color: ${color};
      border: ${border};
      width: ${width};
      height: ${height};
      padding: ${padding};
      outline: ${outline};

      /** hover */
      &:hover {
        background-color: ${hoverBackgroundColor};
        color: ${hoverColor};
        ${variants === 'outline' && !disabled ? `outline: 1px solid ${theme.colors.gray8};` : ''}
      }

      /* 비활성화 */
      &:disabled {
        background-color: ${disabledBackgroundColor};
        color: ${disabledColor};

        cursor: not-allowed;
      }
    `;
  }}
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

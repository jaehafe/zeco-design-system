import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '../../styles/theme.style';

import { TabSize, TabVariants } from './Tab';
import { FONT_STYLES } from '../../styles/common.style';

export const Container = styled.div<{ variants: TabVariants; size: TabSize }>`
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 8px;
  overflow: hidden;

  ${({ variants, size }) => {
    switch (`${variants}-${size}`) {
      case 'main-md':
        return css`
          border: 1px solid ${theme.colors.gray4};
          ${FONT_STYLES.BODY1_R14}
          background-color: ${theme.colors.gray2};
        `;

      default:
        return css`
          border: 1px solid ${theme.colors.gray4};
          ${FONT_STYLES.BODY1_R14}
        `;
    }
  }}
`;

export const InputWrapper = styled.label<{
  disabled?: boolean;
  checked?: boolean;
  variants: TabVariants;
  size?: TabSize;
  isLast?: boolean;
}>`
  width: 153px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  text-align: center;
  transform: translateZ(0);
  display: flex;
  align-items: center;

  ${({ isLast }) =>
    isLast &&
    css`
      border-right: none !important;
    `}

  ${({ checked }) =>
    checked &&
    css`
      border-bottom: 1.2px solid ${theme.colors.blue5};
    `}

  ${({ variants, size, checked, disabled }) => {
    switch (`${variants}-${size}`) {
      case 'main-md':
        return css`
          padding: 8px 32px;
          border-right: 1px solid ${theme.colors.gray4};
          ${FONT_STYLES.BODY1_R14}
          background-color: ${disabled ? theme.colors.gray5 : checked ? theme.colors.white : theme.colors.gray2};
          &:hover {
            background-color: ${disabled ? theme.colors.gray5 : checked ? '' : theme.colors.gray4};
          }
        `;

      default:
        return css`
          padding: 8px 32px;
          width: 153px 32px;
          border-right: 1px solid ${theme.colors.primary550};
          background-color: ${checked ? theme.colors.primary500 : theme.colors.gray50};
          color: ${checked ? theme.colors.gray50 : theme.colors.gray800};
          &:hover {
            background-color: ${theme.colors.blueGray100};
          }
        `;
    }
  }}

  & input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  & span {
    ${({ variants, size, checked }) => {
      switch (`${variants}-${size}`) {
        case 'main-md':
          return css`
            ${FONT_STYLES.BODY1_R14}
            color: ${checked ? theme.colors.gray11 : theme.colors.gray9};
            &:hover {
              background-color: ${checked ? '' : theme.colors.blueGray100};
            }
          `;

        default:
          return css`
            ${FONT_STYLES.BODY1_R14}
            color:${checked ? theme.colors.gray50 : theme.colors.gray800};
            &:hover {
              background-color: ${theme.colors.blueGray100};
            }
          `;
      }
    }}
  }
`;

import styled from '@emotion/styled';
import { FONT_STYLES } from '../../styles/common.style';
import { ToastVariants } from './Toast';
import { css } from '@emotion/react';

export const Container = styled.div<{ variants?: ToastVariants }>`
  z-index: ${({ theme }) => theme.zIndex.toast};
  position: relative;
  padding: 16px 48px 16px 24px;
  /* min-width: 380px; */
  width: 420px;
  /* max-width: 420px; */
  min-height: 48px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  border-radius: 6px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);

  ${({ variants, theme }) => {
    let border, backgroundColor;

    switch (variants) {
      case 'success':
        border = `1px solid ${theme.colors.gray3}`;
        backgroundColor = theme.colors.white;
        break;

      case 'error':
        border = `1px solid ${theme.colors.red2}`;
        backgroundColor = theme.colors.red1;
        break;

      case 'warning':
        border = `1px solid ${theme.colors.yellow3}`;
        backgroundColor = theme.colors.yellow1;
        break;

      case 'zebWarning':
        border = `1px solid ${theme.colors.yellow3}`;
        backgroundColor = theme.colors.yellow1;
        break;

      case 'info':
        border = `1px solid ${theme.colors.green300}`;
        backgroundColor = theme.colors.green100;
        break;

      default:
        border = `1px solid ${theme.colors.gray3}`;
        backgroundColor = theme.colors.white;
        break;
    }

    return css`
      border: ${border};
      background-color: ${backgroundColor};
    `;
  }}
  ${FONT_STYLES.H4}
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const TitleWrapper = styled.div<{ variants: ToastVariants }>`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .title {
    ${({ variants, theme }) => {
      let color;

      switch (variants) {
        case 'success':
          color = `${theme.colors.gray11}`;
          break;

        case 'info':
          color = `${theme.colors.green500}`;
          break;

        case 'warning':
          color = `${theme.colors.yellow6}`;

          return css`
            ${FONT_STYLES.H4}
            color: ${color};
          `;

        case 'zebWarning':
          color = `${theme.colors.yellow6}`;
          return css`
            ${FONT_STYLES.H3}
            color: ${color};
          `;

        case 'error':
          color = `${theme.colors.red6}`;
          break;

        default:
          color = `${theme.colors.gray11}`;
          break;
      }

      return css`
        ${FONT_STYLES.H4}
        line-height: 120%;
        color: ${color};
      `;
    }}
  }
  .subTitle {
    ${FONT_STYLES.BODY1_R14}
    color: ${({ theme }) => theme.colors.yellow6};
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const HeaderIconWrapper = styled.div`
  display: flex;
`;
export const CloseButton = styled.div<{ isVisible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  position: absolute;
  top: 16px;
  right: 24px;
`;

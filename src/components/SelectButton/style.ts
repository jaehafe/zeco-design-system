import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { FONT_STYLES } from '../../styles/common.style';
import { DisplayDirectionType } from './SelectButton';

export const Label = styled.span<{ isChecked?: boolean; displayDirection: DisplayDirectionType }>`
  ${({ displayDirection }) => {
    switch (displayDirection) {
      case 'row':
        return css`
          ${FONT_STYLES.BODY1_R14};
        `;

      case 'column':
        return css`
          ${FONT_STYLES.BODY1_R16};
        `;

      default:
        return css`
          ${FONT_STYLES.BODY1_R16};
        `;
    }
  }}

  color: ${({ theme, isChecked }) => (isChecked ? theme.colors.green500 : theme.colors.gray11)};
`;

export const Container = styled.div<{ displayDirection?: DisplayDirectionType }>`
  width: 100%;

  display: flex;
  flex-direction: ${({ displayDirection }) => displayDirection === 'column' && 'column'};
  align-items: center;
  gap: 16px;

  overflow: hidden;
`;

export const Wrapper = styled.div<{
  disabled?: boolean;
  isChecked?: boolean;
  displayDirection?: DisplayDirectionType;
}>`
  padding: ${({ displayDirection }) => (displayDirection === 'row' ? '12px 0' : '20px 0')};

  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 16px;

  width: ${({ displayDirection }) => displayDirection === 'column' && '100%'};

  background-color: ${({ theme, isChecked }) => (isChecked ? theme.colors.green200 : theme.colors.gray3)};
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme, isChecked }) => (isChecked ? theme.colors.greenGray1 : theme.colors.gray5)};

    span {
      color: ${({ theme, isChecked }) => (isChecked ? theme.colors.greenGray3 : theme.colors.gray9)};
    }
  }

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
    `}

  transition: all 0.3s;
`;
export const InputWrapper = styled.label<{
  disabled?: boolean;
  checked?: boolean;

  isLast?: boolean;
}>`
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

  & input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

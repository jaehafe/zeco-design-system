import styled from '@emotion/styled';
import { SerializedStyles, css } from '@emotion/react';
import { FONT_STYLES, INPUT_AUTOFILL_BACKGROUND_TRANSPARENT } from '../../styles/common.style';
import { InputHeightVariants, InputWidthVariants } from './Input';
import { ANIMATION } from '../../styles/animations';

export const Container = styled.div<{ customStyles?: SerializedStyles }>`
  ${({ customStyles }) => customStyles}

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    /* -moz-appearance: textfield; */
    appearance: textfield;
  }

  input {
    /* -webkit-appearance : none;
    -moz-appearance:none; */
    /* appearance:none; */
    border: none;

    &:hover {
      border: none;
    }
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input {
    outline: none;
  }
`;

export const Wrapper = styled.div<{
  widthVariants?: InputWidthVariants;
  heightVariants?: InputHeightVariants;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  width?: string | number;
  height?: string | number;
  value?: boolean;
  unit?: boolean;
}>`
  padding: 0 14px;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ unit }) => unit && '12px'};

  // border 적용 우선순위: disabled > error > value
  border: 1px solid ${({ theme, error }) => (error ? theme.colors.red6 : theme.colors.gray6)};
  ${ANIMATION.TRANSITION}

  border-radius: 4px;
  background-color: ${({ theme, disabled, readOnly }) =>
    readOnly ? theme.colors.gray1 : disabled ? theme.colors.gray2 : theme.colors.white};

  ${({ width, height, widthVariants, heightVariants }) => {
    let containerWidth, containerHeight;

    if (width) {
      containerWidth = typeof width === 'number' ? `${width}px` : width;
    } else {
      switch (widthVariants) {
        case 'lg':
          containerWidth = '492px';
          break;
        case 'md':
          containerWidth = '345px';
          break;

        default:
          containerWidth = '492px';
          break;
      }
    }

    if (height) {
      containerHeight = typeof height === 'number' ? `${height}px` : height;
    } else {
      switch (heightVariants) {
        case 'lg':
          containerHeight = '48px';
          break;
        case 'md':
          containerHeight = '40px';
          break;
        case 'sm':
          containerHeight = '32px';
          break;
        default:
          containerHeight = '48px';
          break;
      }
    }

    return css`
      width: ${containerWidth};
      height: ${containerHeight};
    `;
  }}

  &:hover {
    border: 1px solid
      ${({ theme, readOnly, disabled, error }) => {
        if (error) {
          return css`
            ${theme.colors.red6}
          `;
        }
        if (readOnly || disabled) {
          return css`
            ${theme.colors.gray6}
          `;
        } else {
          return css`
            ${theme.colors.green500}
          `;
        }
      }};
  }

  &:focus-within {
    border: 1px solid
      ${({ theme, error, readOnly }) =>
        readOnly ? theme.colors.gray6 : error ? theme.colors.red6 : theme.colors.green500};

    box-shadow: ${({ disabled, readOnly, error, theme }) => {
      if (disabled || readOnly) {
        return '';
      }
      if (error) {
        return theme.colors.red6BoxShadow;
      } else {
        return theme.colors.green500BoxShadow;
      }
    }};

    ${ANIMATION.TRANSITION}
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InputWrapper = styled.div<{
  disabled?: boolean;
  error?: boolean;
  readOnly?: boolean;
  customInputStyles?: SerializedStyles;
}>`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;

  & input {
    ${FONT_STYLES.BODY1_R16}

    width: 100%;
    height: 100%;
    background-color: ${({ theme, disabled, readOnly }) => {
      if (readOnly) {
        return css`
          ${theme.colors.gray1}
        `;
      }
      if (disabled) {
        return css`
          ${theme.colors.gray2}
        `;
      } else {
        return css`
          ${theme.colors.white}
        `;
      }
    }};
    color: ${({ theme, disabled }) => (disabled ? theme.colors.gray7 : theme.colors.gray11)};

    &::placeholder {
      ${FONT_STYLES.BODY1_R16}
      color: ${({ theme }) => theme.colors.gray7};
    }
    &:hover,
    &:focus {
      outline: none;
    }

    ${({ customInputStyles }) => customInputStyles}
  }

  ${(props) => INPUT_AUTOFILL_BACKGROUND_TRANSPARENT(props.theme.colors.white)}
`;
export const IconWrapper = styled.div`
  min-width: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FillEmptyIcon = styled.div`
  width: 14px;
  height: 14px;
`;

export const Unit = styled.span<{ readOnly?: boolean; disabled?: boolean }>`
  ${FONT_STYLES.BODY1_R14}
  color: ${({ theme, readOnly, disabled }) => {
    if (disabled) {
      return theme.colors.gray7;
    }
    if (readOnly) {
      return theme.colors.gray10;
    }

    return theme.colors.gray10;
  }};

  width: 100%;
  text-align: end;
`;

export const ErrorWrapper = styled.div`
  ${FONT_STYLES.BODY1_R14}
  margin-top: 4px;

  display: flex;
  gap: 4px;
  color: ${({ theme }) => theme.colors.red6};
  align-items: center;
`;

export const ErrorSpan = styled.span`
  color: ${({ theme }) => theme.colors.red6};
`;

export const ClearIconWrapper = styled.div`
  width: 16px;
  display: flex;
  align-items: center;
`;

import styled from '@emotion/styled';
import { FONT_STYLES } from '../../styles/common.style';

export const Container = styled.div<{
  value?: string;
  disabled?: boolean;
}>`
  ${FONT_STYLES.BODY1_R16}

  display: flex;
  align-items: center;
  padding: 8px 16px;

  background-color: ${({ theme, disabled }) => (disabled ? theme.colors.gray2 : theme.colors.white)};
  border: 1px solid ${({ theme, disabled }) => (disabled ? theme.colors.gray6 : theme.colors.gray6)};
  border-radius: 4px;

  &:focus-within {
    border: 1px solid ${({ theme, disabled }) => (disabled ? theme.colors.gray2 : theme.colors.green500)};
    box-shadow: ${({ disabled }) => (disabled ? '' : '0 0 0 2px rgba(8, 132, 110, 0.3)')};
    transition: all 0.2s;
  }

  &:hover {
    border: 1px solid ${({ theme, disabled }) => (disabled ? theme.colors.gray6 : theme.colors.gray8)};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
  transition: all 0.2s;

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
      cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
    }
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Wrapper = styled.div<{ disabled?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  background-color: ${({ theme, disabled }) => (disabled ? theme.colors.gray2 : theme.colors.white)};
`;

export const LeftWrapper = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;

  background-color: ${({ theme, disabled }) => (disabled ? theme.colors.gray2 : theme.colors.white)};

  & input {
    width: 100%;

    color: ${({ theme, disabled }) => disabled && theme.colors.gray7};

    &:hover,
    &:focus {
      outline: none;
    }

    &::placeholder {
      ${({ theme, disabled }) => disabled && theme.colors.gray7};
    }
  }
`;

export const RightIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

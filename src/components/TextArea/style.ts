import styled from '@emotion/styled';
import theme from '../../styles/theme.style';
import { FONT_STYLES, SCROLL_BAR } from '../../styles/common.style';
import { ANIMATION } from '../../styles/animations';

export const Container = styled.div<{
  width?: string | number;
  height?: string | number;
  isLengthOver?: boolean;
  isError?: boolean;
  isReadOnly?: boolean;
  resize?: boolean;
}>`
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.gray6};

  // focused
  &:focus-within {
    border: 1px solid
      ${({ theme, isError, isReadOnly }) => {
        if (isReadOnly) return theme.colors.gray6;
        if (isError) return theme.colors.red6;

        return theme.colors.green500;
      }};

    box-shadow: ${({ isError, theme, isReadOnly }) => {
      if (isReadOnly) return 'none';
      if (isError) return theme.colors.red6BoxShadow;

      return theme.colors.green500BoxShadow;
    }};
  }

  ${ANIMATION.TRANSITION}

  // hover
  &:hover {
    border: 1px solid
      ${({ theme, isError, isReadOnly }) => {
        if (isReadOnly) return theme.colors.gray6;
        if (isError) return theme.colors.red6;

        return theme.colors.green500;
      }};
  }

  // textarea
  textarea {
    background-color: ${({ isReadOnly }) => {
      if (isReadOnly) return theme.colors.gray1;

      return theme.colors.white;
    }};

    width: 100%;
    height: 100%;
    border-width: 0;
    :focus {
      outline: none;
    }
    padding: 10px;

    ::placeholder {
      ${FONT_STYLES.BODY1_R16}
      color: ${({ theme }) => theme.colors.gray7};
    }

    /* ${SCROLL_BAR.TABLE(theme)} */
    resize: ${({ resize }) => !resize && 'none'};
  }
`;

export const TextArea = styled.textarea<{ resize?: boolean }>``;

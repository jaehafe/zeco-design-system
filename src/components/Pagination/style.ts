import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FONT_STYLES } from '../../styles/common.style';

export const Container = styled.div``;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  &:svg {
    ${FONT_STYLES.BODY1_R16}
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.green400};
  }
`;

export const PaginationLeftArrowWrapper = styled.div`
  margin-right: 2px;
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;

  & svg {
    padding: 2px;
    &:hover {
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.green200};
    }
  }
`;
export const PaginationRightArrowWrapper = styled.div`
  margin-left: 2px;
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;

  & svg {
    padding: 2px;
    &:hover {
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.green200};
    }
  }
`;

export const PageButton = styled.button<{ isCurrentPage?: boolean }>`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  user-select: none;

  ${FONT_STYLES.BODY1_R16}
  color: ${({ theme }) => theme.colors.green500};

  &:hover {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.green200};
  }

  ${({ isCurrentPage, theme }) =>
    isCurrentPage &&
    css`
      color: ${theme.colors.green500};
      border-radius: 50%;
      background-color: ${theme.colors.green300};

      &:hover {
        background-color: ${theme.colors.green400};
      }
    `}
`;

import styled from '@emotion/styled';
import { FONT_STYLES } from '../../styles/common.style';

export const StepContainer = styled.div<{ widthSize?: string | number }>`
  display: flex;
  justify-content: space-between;
  min-width: ${({ widthSize }) => (typeof widthSize === 'number' ? `${widthSize}px` : `${widthSize}`)};
`;

export const StepItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  width: 0;

  // default step bar track
  &::before {
    position: absolute;
    content: '';
    border-bottom: 3px solid ${({ theme }) => theme.colors.gray6};
    width: 100%;
    top: 8.5px;
    left: -50%;
    transition: all 0.5s;
  }

  &:first-of-type::before {
    content: none;
  }

  &.active {
    transition: all 0.5s;
    & .step-counter {
      background-color: ${({ theme }) => theme.colors.green500};
      transition: all 0.5s;
    }
    &::before {
      border-bottom-color: ${({ theme }) => theme.colors.green500};
      transition: all 0.5s;
    }
    & .step-counter {
      color: ${({ theme }) => theme.colors.white};
    }
    & .step-description {
      color: ${({ theme }) => theme.colors.gray11};
      transition: all 0.5s;
    }
  }
`;

export const StepCounter = styled.div`
  margin-bottom: 6px;
  position: relative;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ccc;
  ${FONT_STYLES.H4};
  color: ${({ theme }) => theme.colors.gray8};
`;

export const StepDescription = styled.p`
  ${FONT_STYLES.H4};
  color: ${({ theme }) => theme.colors.gray7};
  margin-top: 10px;
  min-width: 102px;
  word-break: keep-all;
  white-space: pre-wrap;
  text-align: center;
`;

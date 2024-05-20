import { FONT_STYLES } from '../../styles/common.style';

import styled from '@emotion/styled';

export const TooltipContainer = styled.div<{ isValidContent?: boolean | undefined }>`
  .tooltip-content {
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: ${({ theme }) => theme.zIndex.tooltip};
    background-color: ${({ theme }) => theme.colors.gray10};
    color: ${({ theme }) => theme.colors.white};
    padding: 8px 6px;
    border-radius: 6px;

    ${FONT_STYLES.CAPTION_R12};
  }

  display: ${({ isValidContent }) => !isValidContent && 'none'};
`;

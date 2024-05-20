import styled from "@emotion/styled";

export const HoverCardContainer = styled.div`
  .RadixHoverCardContent {
    padding: 24px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray4};
    border-radius: 6px;
    z-index: ${({ theme }) => theme.zIndex.tooltip};
  }
`;

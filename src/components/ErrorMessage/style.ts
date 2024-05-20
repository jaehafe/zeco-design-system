import { FONT_STYLES } from '../../styles/common.style';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ErrorMessage = styled.span`
  ${FONT_STYLES.BODY1_R14}
  color: ${({ theme }) => theme.colors.red6};
`;

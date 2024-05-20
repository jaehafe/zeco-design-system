import styled from '@emotion/styled';
import { ANIMATION } from '../..//styles/animations';

export const Container = styled.div`
  .popover-content {
    z-index: 10;
    animation: ${ANIMATION.DROPDOWN_SLIDE_IN} 0.13s ease-in;
  }
`;

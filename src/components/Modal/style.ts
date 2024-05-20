import styled from '@emotion/styled';
import { ANIMATION } from '../../styles/animations';

export const BackdropContainer = styled.div<{ secondModal?: boolean }>`
  z-index: ${({ theme, secondModal }) => (secondModal ? theme.zIndex.secondBackDrop : theme.zIndex.modal)};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ secondModal }) => (secondModal ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.5)')};

  ${ANIMATION.BACKDROP_IN}
`;

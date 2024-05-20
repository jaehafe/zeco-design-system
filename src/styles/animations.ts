import { css, keyframes } from "@emotion/react";

const DROPDOWN_SLIDE_IN = keyframes`
  from {
    transform: translateY(-5px); 
    opacity: 0;
  }
  to {
    transform: translateY(0); 
    opacity: 1;
  }
`;

const DROPDOWN_SLIDE_OUT = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-5px); 
    opacity: 0;
  }
`;

const BACKDROP_SLOW = keyframes`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`;

const MODAL_SLOW = keyframes`
  0% {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
  }

  100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
  }
`;

const BACKDROP_IN = css`
  animation: 500ms cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal none running ${BACKDROP_SLOW};
`;

const MODAL_IN = css`
  animation: 150ms cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal none running ${MODAL_SLOW};
`;

const TOAST_CLOSE_BUTTON_ANIMATION = css`
  opacity: 1;
  transition: opacity 0.3s ease;
`;

const TRANSITION = css`
  transition: all 0.3s;
`;

export const ANIMATION = {
  DROPDOWN_SLIDE_IN,
  DROPDOWN_SLIDE_OUT,

  BACKDROP_IN,
  MODAL_IN,

  // toast
  TOAST_CLOSE_BUTTON_ANIMATION,
  TRANSITION,
};

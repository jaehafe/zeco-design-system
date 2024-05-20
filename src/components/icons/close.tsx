import styled from "@emotion/styled";
import React, { SVGProps } from "react";

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <SVGWrapper
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      cursor="pointer"
      {...props}
    >
      <path
        d="M13.1541 12L18.9578 5.28129C19.0551 5.16963 18.9733 5 18.8229 5H17.0586C16.9547 5 16.8552 5.04509 16.7867 5.12239L12 10.6644L7.21332 5.12239C7.147 5.04509 7.0475 5 6.94138 5H5.17705C5.02671 5 4.9449 5.16963 5.04218 5.28129L10.8459 12L5.04218 18.7187C5.02039 18.7436 5.00641 18.774 5.0019 18.8064C4.99739 18.8388 5.00254 18.8717 5.01674 18.9014C5.03094 18.931 5.0536 18.956 5.08201 18.9735C5.11043 18.991 5.14341 19.0002 5.17705 19H6.94138C7.04529 19 7.14479 18.9549 7.21332 18.8776L12 13.3356L16.7867 18.8776C16.853 18.9549 16.9525 19 17.0586 19H18.8229C18.9733 19 19.0551 18.8304 18.9578 18.7187L13.1541 12Z"
        fill={props.fill || "#38383B"}
      />
    </SVGWrapper>
  );
};

export default CloseIcon;

const SVGWrapper = styled.svg`
  &:hover {
    background-color: ${({ theme }) => theme.colors.green300};
    border-radius: 50%;
  }
`;

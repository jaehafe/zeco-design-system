import React, { SVGProps } from "react";

/**
 * @기본은 아래를 향하고 있습니다.
 */
const DropdownArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      cursor={"pointer"}
      {...props}
    >
      <g transform={props.rotate ? `rotate(${props.rotate} 12 12)` : ""}>
        <path
          d="M21.3292 6H2.67083C2.1112 6 1.79871 6.58871 2.14529 6.99062L11.4745 17.7686C11.7415 18.0771 12.2557 18.0771 12.5255 17.7686L21.8547 6.99062C22.2013 6.58871 21.8888 6 21.3292 6Z"
          fill={props.color || "#38383B"}
        />
      </g>
    </svg>
  );
};

export default DropdownArrowIcon;

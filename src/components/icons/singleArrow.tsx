import React, { SVGProps } from "react";

const SingleArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      cursor={"pointer"}
      {...props}
    >
      <g transform={props.rotate ? `rotate(${props.rotate} 6 6)` : ""}>
        <path
          d="M8.83986 2.06621V1.03094C8.83986 0.941211 8.73674 0.891658 8.6671 0.946568L2.6296 5.66219C2.5783 5.70209 2.53679 5.75317 2.50824 5.81154C2.47969 5.86992 2.46484 5.93404 2.46484 5.99902C2.46484 6.06401 2.47969 6.12813 2.50824 6.18651C2.53679 6.24488 2.5783 6.29596 2.6296 6.33585L8.6671 11.0515C8.73808 11.1064 8.83986 11.0568 8.83986 10.9671V9.93184C8.83986 9.86621 8.80906 9.80327 8.75817 9.76309L3.93674 5.99969L8.75817 2.23496C8.80906 2.19478 8.83986 2.13184 8.83986 2.06621Z"
          fill={props.color || "#222222"}
        />
      </g>
    </svg>
  );
};

export default SingleArrowIcon;

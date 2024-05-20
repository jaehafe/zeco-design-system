import React, { SVGProps } from "react";

const FilledRadioCircleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      cursor="pointer"
      {...props}
    >
      <path
        d="M12 2C6.47768 2 2 6.47768 2 12C2 17.5223 6.47768 22 12 22C17.5223 22 22 17.5223 22 12C22 6.47768 17.5223 2 12 2ZM12 20.3036C7.41518 20.3036 3.69643 16.5848 3.69643 12C3.69643 7.41518 7.41518 3.69643 12 3.69643C16.5848 3.69643 20.3036 7.41518 20.3036 12C20.3036 16.5848 16.5848 20.3036 12 20.3036Z"
        fill={props.fill || "#38383B"}
      />
      <circle cx="12" cy="12" r="6" fill={props.fill || "#38383B"} />
    </svg>
  );
};

export default FilledRadioCircleIcon;

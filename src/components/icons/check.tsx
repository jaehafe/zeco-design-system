import React, { SVGProps } from "react";

const CheckSVG = (props: SVGProps<SVGSVGElement>) => {
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
        d="M21.8035 4H20.0904C19.8502 4 19.6222 4.11183 19.4752 4.30318L9.3702 17.2826L4.52481 11.0575C4.45151 10.9632 4.35808 10.8869 4.25153 10.8344C4.14499 10.7819 4.0281 10.7545 3.90963 10.7544H2.19647C2.03226 10.7544 1.94158 10.9457 2.04206 11.0749L8.75503 19.6981C9.06874 20.1006 9.67166 20.1006 9.98782 19.6981L21.9579 4.31809C22.0584 4.19135 21.9677 4 21.8035 4Z"
        fill={props.color || "#38383B"}
      />
    </svg>
  );
};

export default CheckSVG;

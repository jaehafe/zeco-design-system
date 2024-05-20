import React, { SVGProps } from "react";

const BorderSquareIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M21.8576 1.28906H2.14328C1.66917 1.28906 1.28613 1.6721 1.28613 2.14621V21.8605C1.28613 22.3346 1.66917 22.7176 2.14328 22.7176H21.8576C22.3317 22.7176 22.7147 22.3346 22.7147 21.8605V2.14621C22.7147 1.6721 22.3317 1.28906 21.8576 1.28906ZM20.7861 20.7891H3.2147V3.21763H20.7861V20.7891Z"
        fill={props.color || "#38383B"}
      />
    </svg>
  );
};

export default BorderSquareIcon;

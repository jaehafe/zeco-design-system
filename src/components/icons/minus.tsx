import React, { SVGProps } from 'react';

const MinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
    cursor={'pointer'}
  >
    <path
      d="M21.7826 11H2.21739C2.09783 11 2 11.1184 2 11.2632V13.2368C2 13.3816 2.09783 13.5 2.21739 13.5H21.7826C21.9022 13.5 22 13.3816 22 13.2368V11.2632C22 11.1184 21.9022 11 21.7826 11Z"
      fill={props.color || '#38383B'}
    />
  </svg>
);

export default MinusIcon;

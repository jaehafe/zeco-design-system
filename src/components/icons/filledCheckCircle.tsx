import theme from '../../styles/theme.style';
import React, { SVGProps } from 'react';

export interface FilledCheckCircleIconProps extends SVGProps<SVGSVGElement> {
  $filled?: boolean;
}

const FilledCheckCircleIcon = ({ $filled, ...props }: FilledCheckCircleIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 13 13"
      fill="none"
      cursor="pointer"
      {...props}
    >
      {$filled ? (
        <>
          <path
            d="M11.8337 5.99984C11.8337 9.2215 9.22199 11.8332 6.00033 11.8332C2.77866 11.8332 0.166992 9.2215 0.166992 5.99984C0.166992 2.77818 2.77866 0.166504 6.00033 0.166504C9.22199 0.166504 11.8337 2.77818 11.8337 5.99984Z"
            fill={props.color || '#08846E'}
          />
          <path
            d="M8.39536 4.42347L5.51606 8.41566C5.47582 8.47183 5.42276 8.51759 5.3613 8.54917C5.29984 8.58074 5.23174 8.59721 5.16264 8.59721C5.09354 8.59721 5.02544 8.58074 4.96398 8.54917C4.90252 8.51759 4.84947 8.47183 4.80922 8.41566L3.10434 6.05316C3.05239 5.9807 3.10434 5.87952 3.19321 5.87952H3.83442C3.97387 5.87952 4.10649 5.94652 4.18852 6.06136L5.16196 7.41214L7.31118 4.43167C7.39321 4.3182 7.52446 4.24984 7.66528 4.24984H8.30649C8.39536 4.24984 8.44731 4.35101 8.39536 4.42347Z"
            fill="white"
          />
        </>
      ) : (
        <>
          <path
            d="M11.8337 5.99984C11.8337 9.2215 9.22199 11.8332 6.00033 11.8332C2.77866 11.8332 0.166992 9.2215 0.166992 5.99984C0.166992 2.77818 2.77866 0.166504 6.00033 0.166504C9.22199 0.166504 11.8337 2.77818 11.8337 5.99984Z"
            fill={props.color || theme.colors.black}
          />
          <path
            d="M8.39536 4.42347L5.51606 8.41566C5.47582 8.47183 5.42276 8.51759 5.3613 8.54917C5.29984 8.58074 5.23174 8.59721 5.16264 8.59721C5.09354 8.59721 5.02544 8.58074 4.96398 8.54917C4.90252 8.51759 4.84947 8.47183 4.80922 8.41566L3.10434 6.05316C3.05239 5.9807 3.10434 5.87952 3.19321 5.87952H3.83442C3.97387 5.87952 4.10649 5.94652 4.18852 6.06136L5.16196 7.41214L7.31118 4.43167C7.39321 4.3182 7.52446 4.24984 7.66528 4.24984H8.30649C8.39536 4.24984 8.44731 4.35101 8.39536 4.42347Z"
            fill="white"
          />
        </>
      )}
    </svg>
  );
};

export default FilledCheckCircleIcon;

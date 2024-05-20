import React from 'react';

const SortingArrowIcon = ({ upColor, downColor }: { upColor?: string; downColor?: string }) => {
  return (
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_637_4894)">
        <path
          d="M10.7652 8.16675L4.23479 8.16675C4.03892 8.16675 3.92955 8.39569 4.05085 8.55199L7.31606 12.7434C7.40952 12.8634 7.58948 12.8634 7.68394 12.7434L10.9491 8.55199C11.0705 8.39569 10.9611 8.16675 10.7652 8.16675Z"
          fill={downColor || '#38383B'}
        />
        <path
          d="M4.23479 5.8335L10.7652 5.8335C10.9611 5.8335 11.0705 5.60455 10.9491 5.44825L7.68394 1.25681C7.59048 1.13684 7.41052 1.13684 7.31606 1.25681L4.05085 5.44825C3.92955 5.60455 4.03892 5.8335 4.23479 5.8335Z"
          fill={upColor || '#38383B'}
        />
      </g>
      <defs>
        <clipPath id="clip0_637_4894">
          <rect width="14" height="14" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SortingArrowIcon;

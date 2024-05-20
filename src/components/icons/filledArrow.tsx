import React from 'react';

const FilledArrow = ({ isShow }: IFilledArrow) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: isShow ? 'rotate(180deg)' : 'rotate(0deg)',
    }}
  >
    <path
      d="M14.2201 4L1.78121 4C1.40812 4 1.19979 4.39248 1.43084 4.66042L7.65029 11.8457C7.82831 12.0514 8.1711 12.0514 8.35102 11.8457L14.5705 4.66042C14.8015 4.39248 14.5932 4 14.2201 4Z"
      fill="#38383B"
    />
  </svg>
);

export default FilledArrow;

interface IFilledArrow {
  isShow?: boolean;
}

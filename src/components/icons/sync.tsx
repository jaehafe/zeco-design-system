import React, { SVGProps } from "react";

const SyncIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      cursor="pointer"
      {...props}
    >
      <path
        d="M2.22258 6.8915C2.23646 6.28456 2.36146 5.69567 2.59618 5.1415C2.83646 4.57206 3.1809 4.06234 3.61979 3.62206C4.05868 3.18178 4.56978 2.83734 5.13923 2.59706C5.72811 2.34845 6.35311 2.22206 6.99894 2.22206C7.64477 2.22206 8.26976 2.34845 8.85726 2.59706C9.42507 2.83684 9.9407 3.185 10.3753 3.62206C10.5128 3.75956 10.642 3.90539 10.7614 4.05817L9.92531 4.71095C9.90876 4.72375 9.89617 4.74095 9.88897 4.76059C9.88177 4.78023 9.88026 4.8015 9.88461 4.82196C9.88897 4.84241 9.89901 4.86123 9.91358 4.87623C9.92815 4.89124 9.94665 4.90183 9.96697 4.90678L12.4072 5.504C12.4767 5.52067 12.5447 5.46789 12.5447 5.39706L12.5558 2.88456C12.5558 2.7915 12.4489 2.73873 12.3767 2.79706L11.5934 3.40956C10.5253 2.04289 8.8642 1.1665 6.99755 1.1665C3.81562 1.1665 1.22675 3.7165 1.16703 6.88595C1.16666 6.90077 1.16926 6.91552 1.17467 6.92932C1.18009 6.94312 1.18822 6.9557 1.19857 6.96632C1.20893 6.97693 1.2213 6.98536 1.23497 6.99112C1.24863 6.99688 1.26331 6.99984 1.27814 6.99984H2.11147C2.17258 6.99984 2.22119 6.95123 2.22258 6.8915ZM12.7225 6.99984H11.8892C11.8281 6.99984 11.7795 7.04845 11.7781 7.10817C11.7642 7.71511 11.6392 8.304 11.4045 8.85817C11.1642 9.42761 10.8197 9.93873 10.3809 10.3776C9.93788 10.8224 9.41121 11.1752 8.83125 11.4154C8.25128 11.6557 7.62948 11.7788 7.00171 11.7776C6.37415 11.7788 5.75257 11.6557 5.17284 11.4154C4.5931 11.1751 4.06668 10.8224 3.62396 10.3776C3.48646 10.2401 3.35729 10.0943 3.23785 9.9415L4.07395 9.28873C4.0905 9.27593 4.10309 9.25872 4.11029 9.23908C4.11749 9.21945 4.119 9.19818 4.11465 9.17772C4.11029 9.15726 4.10026 9.13845 4.08569 9.12344C4.07112 9.10844 4.05261 9.09785 4.03229 9.09289L1.59202 8.49567C1.52258 8.479 1.45453 8.53178 1.45453 8.60261L1.4448 11.1165C1.4448 11.2096 1.55175 11.2623 1.62397 11.204L2.4073 10.5915C3.47535 11.9568 5.13645 12.8332 7.0031 12.8332C10.1864 12.8332 12.7739 10.2818 12.8336 7.11373C12.834 7.0989 12.8314 7.08416 12.826 7.07035C12.8206 7.05655 12.8124 7.04397 12.8021 7.03336C12.7917 7.02274 12.7794 7.01431 12.7657 7.00855C12.752 7.0028 12.7373 6.99983 12.7225 6.99984Z"
        fill={props.color || "#fff"}
      />
    </svg>
  );
};

export default SyncIcon;

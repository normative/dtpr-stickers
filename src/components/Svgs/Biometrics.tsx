/* eslint-disable react/prop-types */
import React from 'react';

interface Props {
  size: number,
  fill: string,
  x: number,
  y: number,
}

function Biometrics({
  size, fill = '#000000', x, y,
}: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" x={x} y={y} data-export-svg>
      <g id="dtpr_icons-/-tech-/-biometrics" stroke="none" strokeWidth="1">
        <g id="baseline-fingerprint-24px-(2)" transform="translate(1.50000, 1.50000)">
          <path fill={fill} d="M14.8416667,3.725 C14.775,3.725 14.7083333,3.70833333 14.65,3.675 C13.05,2.85 11.6666667,2.5 10.0083333,2.5 C8.35833333,2.5 6.79166667,2.89166667 5.36666667,3.675 C5.16666667,3.78333333 4.91666667,3.70833333 4.8,3.50833333 C4.69166667,3.30833333 4.76666667,3.05 4.96666667,2.94166667 C6.51666667,2.1 8.21666667,1.66666667 10.0083333,1.66666667 C11.7833333,1.66666667 13.3333333,2.05833333 15.0333333,2.93333333 C15.2416667,3.04166667 15.3166667,3.29166667 15.2083333,3.49166667 C15.1333333,3.64166667 14.9916667,3.725 14.8416667,3.725 L14.8416667,3.725 Z M2.91666667,8.1 C2.83333333,8.1 2.75,8.075 2.675,8.025 C2.48333333,7.89166667 2.44166667,7.63333333 2.575,7.44166667 C3.4,6.275 4.45,5.35833333 5.7,4.71666667 C8.31666667,3.36666667 11.6666667,3.35833333 14.2916667,4.70833333 C15.5416667,5.35 16.5916667,6.25833333 17.4166667,7.41666667 C17.55,7.6 17.5083333,7.86666667 17.3166667,8 C17.125,8.13333333 16.8666667,8.09166667 16.7333333,7.9 C15.9833333,6.85 15.0333333,6.025 13.9083333,5.45 C11.5166667,4.225 8.45833333,4.225 6.075,5.45833333 C4.94166667,6.04166667 3.99166667,6.875 3.24166667,7.925 C3.175,8.04166667 3.05,8.1 2.91666667,8.1 L2.91666667,8.1 Z M8.125,18.1583333 C8.01666667,18.1583333 7.90833333,18.1166667 7.83333333,18.0333333 C7.10833333,17.3083333 6.71666667,16.8416667 6.15833333,15.8333333 C5.58333333,14.8083333 5.28333333,13.5583333 5.28333333,12.2166667 C5.28333333,9.74166667 7.4,7.725 10,7.725 C12.6,7.725 14.7166667,9.74166667 14.7166667,12.2166667 C14.7166667,12.45 14.5333333,12.6333333 14.3,12.6333333 C14.0666667,12.6333333 13.8833333,12.45 13.8833333,12.2166667 C13.8833333,10.2 12.1416667,8.55833333 10,8.55833333 C7.85833333,8.55833333 6.11666667,10.2 6.11666667,12.2166667 C6.11666667,13.4166667 6.38333333,14.525 6.89166667,15.425 C7.425,16.3833333 7.79166667,16.7916667 8.43333333,17.4416667 C8.59166667,17.6083333 8.59166667,17.8666667 8.43333333,18.0333333 C8.34166667,18.1166667 8.23333333,18.1583333 8.125,18.1583333 Z M14.1,16.6166667 C13.1083333,16.6166667 12.2333333,16.3666667 11.5166667,15.875 C10.275,15.0333333 9.53333333,13.6666667 9.53333333,12.2166667 C9.53333333,11.9833333 9.71666667,11.8 9.95,11.8 C10.1833333,11.8 10.3666667,11.9833333 10.3666667,12.2166667 C10.3666667,13.3916667 10.9666667,14.5 11.9833333,15.1833333 C12.575,15.5833333 13.2666667,15.775 14.1,15.775 C14.3,15.775 14.6333333,15.75 14.9666667,15.6916667 C15.1916667,15.65 15.4083333,15.8 15.45,16.0333333 C15.4916667,16.2583333 15.3416667,16.475 15.1083333,16.5166667 C14.6333333,16.6083333 14.2166667,16.6166667 14.1,16.6166667 L14.1,16.6166667 Z M12.425,18.3333333 C12.3916667,18.3333333 12.35,18.325 12.3166667,18.3166667 C10.9916667,17.95 10.125,17.4583333 9.21666667,16.5666667 C8.05,15.4083333 7.40833333,13.8666667 7.40833333,12.2166667 C7.40833333,10.8666667 8.55833333,9.76666667 9.975,9.76666667 C11.3916667,9.76666667 12.5416667,10.8666667 12.5416667,12.2166667 C12.5416667,13.1083333 13.3166667,13.8333333 14.275,13.8333333 C15.2333333,13.8333333 16.0083333,13.1083333 16.0083333,12.2166667 C16.0083333,9.075 13.3,6.525 9.96666667,6.525 C7.6,6.525 5.43333333,7.84166667 4.45833333,9.88333333 C4.13333333,10.5583333 3.96666667,11.35 3.96666667,12.2166667 C3.96666667,12.8666667 4.025,13.8916667 4.525,15.225 C4.60833333,15.4416667 4.5,15.6833333 4.28333333,15.7583333 C4.06666667,15.8416667 3.825,15.725 3.75,15.5166667 C3.34166667,14.425 3.14166667,13.3416667 3.14166667,12.2166667 C3.14166667,11.2166667 3.33333333,10.3083333 3.70833333,9.51666667 C4.81666667,7.19166667 7.275,5.68333333 9.96666667,5.68333333 C13.7583333,5.68333333 16.8416667,8.60833333 16.8416667,12.2083333 C16.8416667,13.5583333 15.6916667,14.6583333 14.275,14.6583333 C12.8583333,14.6583333 11.7083333,13.5583333 11.7083333,12.2083333 C11.7083333,11.3166667 10.9333333,10.5916667 9.975,10.5916667 C9.01666667,10.5916667 8.24166667,11.3166667 8.24166667,12.2083333 C8.24166667,13.6333333 8.79166667,14.9666667 9.8,15.9666667 C10.5916667,16.75 11.35,17.1833333 12.525,17.5083333 C12.75,17.5666667 12.875,17.8 12.8166667,18.0166667 C12.775,18.2083333 12.6,18.3333333 12.425,18.3333333 L12.425,18.3333333 Z" id="Shape" />
        </g>
      </g>
    </svg>
  );
}

export default Biometrics;

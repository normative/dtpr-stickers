import React from 'react';
import { SVGProps } from 'common/types';

function Health({
  fill = '#000000', transform,
}: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" data-export-icon>
      <defs>
        <polygon id="path-health-1" points="0 0 17.9999 0 17.9999 18 0 18" />
      </defs>
      <g id="dtpr_icons-/-purpose-/-health" stroke="none" strokeWidth="1" transform={transform}>
        <g id="Group-3" strokeWidth="1" fillRule="evenodd" transform="translate(3.000000, 3.000000)">
          <mask id="mask-health-2" fill="white">
            <use xlinkHref="#path-health-1" />
          </mask>
          <path fill={fill} d="M16.7139,6 L11.9999,6 L11.9999,1.286 C11.9999,0.576 11.4249,0 10.7139,0 L7.2859,0 C6.5749,0 5.9999,0.576 5.9999,1.286 L5.9999,6 L1.2859,6 C0.5749,6 -0.0001,6.576 -0.0001,7.286 L-0.0001,10.714 C-0.0001,11.424 0.5749,12 1.2859,12 L5.9999,12 L5.9999,16.714 C5.9999,17.424 6.5749,18 7.2859,18 L10.7139,18 C11.4249,18 11.9999,17.424 11.9999,16.714 L11.9999,12 L16.7139,12 C17.4249,12 17.9999,11.424 17.9999,10.714 L17.9999,7.286 C17.9999,6.576 17.4249,6 16.7139,6" id="Fill-1" mask="url(#mask-health-2)" />
        </g>
      </g>
    </svg>
  );
}

export default Health;

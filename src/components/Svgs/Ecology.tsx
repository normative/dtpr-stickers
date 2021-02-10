import React from 'react';
import { SVGProps } from 'common/types';

function Ecology({
  fill = '#000000', transform,
}: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" data-export-icon>
      <defs>
        <polygon id="path-eco-1" points="0 0 18 0 18 17.99995 0 17.99995" />
      </defs>
      <g id="dtpr_icons-/-purpose-/-ic_black-/-ecology" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform={transform}>
        <g id="Group-3" transform="translate(3.000000, 3.000000)">
          <mask id="mask-eco-2" fill="white">
            <use xlinkHref="#path-eco-1" />
          </mask>
          <path d="M17.979,0.4107 C17.969,0.1997 17.8,0.0307 17.589,0.0207 C17.197,0.0007 7.938,-0.4143 3.89,3.6337 C1.371,6.1527 1.049,10.0507 2.925,12.9227 L0.293,15.5547 C-0.098,15.9447 -0.098,16.5787 0.293,16.9697 L1.031,17.7067 C1.421,18.0977 2.055,18.0977 2.446,17.7067 L5.078,15.0747 C7.95,16.9507 11.847,16.6297 14.367,14.1097 C18.415,10.0617 18,0.8037 17.979,0.4107" id="Fill-1" fill={fill} mask="url(#mask-eco-2)" />
        </g>
      </g>
    </svg>
  );
}

export default Ecology;

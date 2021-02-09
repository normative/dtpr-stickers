import React from 'react';
import { SVGProps } from 'common/types';

function PurposeWater({
  fill = '#000000', transform,
}: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" data-export-icon>
      <defs>
        <polygon id="path-1" points="0.0004 0 13.5074 0 13.5074 17.9999 0.0004 17.9999" />
      </defs>
      <g id="dtpr_icons-/-purpose-/-PurposeWater" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform={transform}>
        <g id="Group-3" strokeWidth="1" fillRule="evenodd" transform="translate(5.000000, 3.000000)">
          <mask id="mask-2" fill="white">
            <use xlinkHref="#path-1" />
          </mask>
          <path fill={fill} d="M6.5024,0.0869 C6.2364,0.3269 0.0004,6.0269 0.0004,11.2459 C0.0004,14.9699 3.0294,17.9999 6.7534,17.9999 C10.4784,17.9999 13.5074,14.9699 13.5074,11.2459 C13.5074,6.0269 7.2714,0.3269 7.0054,0.0869 C6.8574,-0.0291 6.6494,-0.0291 6.5024,0.0869" id="Fill-1" mask="url(#mask-2)" />
        </g>
      </g>
    </svg>
  );
}

export default PurposeWater;

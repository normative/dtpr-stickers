import React from 'react';
import { SVGProps } from 'common/types';

function Toggle({
  fill = '#000000', transform,
}: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" data-export-icon>
      <defs>
        <polygon id="path-toggle-1" points="0.0001 0.0002 18 0.0002 18 9 0.0001 9" />
      </defs>
      <g id="dtpr_icons-/-purpose-/-toggle" stroke="none" strokeWidth="1" transform={transform}>
        <g id="Group-3" strokeWidth="1" transform="translate(3.000000, 7.000000)">
          <mask id="mask-toggle-2" fill="white">
            <use xlinkHref="#path-toggle-1" />
          </mask>
          <path fill={fill} d="M13.5,1.8 C14.994,1.8 16.2,3.006 16.2,4.5 C16.2,5.994 14.994,7.2 13.5,7.2 C12.006,7.2 10.8,5.994 10.8,4.5 C10.8,3.006 12.006,1.8 13.5,1.8 M4.5,9 L13.5,9 C15.984,9 18,6.984 18,4.5 C18,2.016 15.984,0 13.5,0 L4.5,0 C2.016,0 0,2.016 0,4.5 C0,6.984 2.016,9 4.5,9" id="Fill-1" mask="url(#mask-toggle-2)" />
        </g>
      </g>
    </svg>
  );
}

export default Toggle;

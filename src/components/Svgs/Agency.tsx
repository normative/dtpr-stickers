import React from 'react';
import { SVGProps } from 'common/types';

function Agency({
  fill = '#000000', transform,
}: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" data-export-icon>
      <defs>
        <polygon id="path-agency-1" points="0.0414 0 4.9999 0 4.9999 4.9583 0.0414 4.9583" />
        <polygon id="path-agency-3" points="0 0.1274 16.8729 0.1274 16.8729 17 0 17" />
      </defs>
      <g id="dtpr_icons-/-purpose-/-agency" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform={transform}>
        <g id="Group-7" strokeWidth="1" fillRule="evenodd" transform="translate(2.000000, 2.000000)">
          <g id="Group-3" transform="translate(15.000000, 0.000000)">
            <mask id="mask-agency-2" fill="white">
              <use xlinkHref="#path-agency-1" />
            </mask>
            <path d="M4.6204,1.2953 L3.7044,0.3793 C3.1984,-0.1267 2.3794,-0.1267 1.8734,0.3793 L0.0414,2.2113 L2.7894,4.9583 L4.6204,3.1273 C5.1264,2.6213 5.1264,1.8013 4.6204,1.2953" id="Fill-1" fill={fill} mask="url(#mask-agency-2)" />
          </g>
          <g id="Group-6" transform="translate(0.000000, 3.000000)">
            <mask id="mask-agency-4" fill="white">
              <use xlinkHref="#path-agency-3" />
            </mask>
            <path d="M1.5149,12.7374 C1.3719,12.8794 1.2659,13.0524 1.2029,13.2434 L0.0069,16.8294 C-0.0271,16.9304 0.0699,17.0274 0.1709,16.9934 L3.7559,15.7984 C3.9479,15.7344 4.1199,15.6274 4.2629,15.4854 L16.8729,2.8744 L14.1249,0.1274 L1.5149,12.7374 Z" id="Fill-4" fill={fill} mask="url(#mask-agency-4)" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Agency;

import React from 'react';
import { SVGProps } from 'common/types';

function Entry({
  fill = '#000000', transform,
}: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" data-export-icon>
      <defs>
        <polygon id="path-entry-1" points="0 0 17.8419 0 17.8419 18 0 18" />
      </defs>
      <g id="dtpr_icons-/-purpose-/-entry" stroke="none" strokeWidth="1" transform={transform}>
        <g id="dtpr_icons-/-purpose-/-ic_white-/-entry" transform="translate(0.000000, -1.000000)">
          <g id="Group-3" strokeWidth="1" fillRule="evenodd" transform="translate(3.000000, 3.000000)">
            <mask id="mask-entry-2" fill="white">
              <use xlinkHref="#path-entry-1" />
            </mask>
            <path fill={fill} d="M8.8419,0 C4.4479,0 0.7899,3.148 -0.0001,7.312 L8.8419,7.312 L8.8419,5.676 C8.8419,5.139 9.4859,4.877 9.8669,5.246 L13.1939,8.572 C13.4319,8.812 13.4319,9.181 13.1939,9.419 L9.8549,12.745 C9.4859,13.127 8.8419,12.864 8.8419,12.328 L8.8419,10.688 L-0.0001,10.688 C0.7899,14.852 4.4479,18 8.8419,18 C13.8129,18 17.8419,13.971 17.8419,9 C17.8419,4.029 13.8129,0 8.8419,0" id="Fill-1" mask="url(#mask-entry-2)" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Entry;

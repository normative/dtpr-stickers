import React from 'react';
import { SVGProps } from 'common/types';

function Energy({
  fill = '#000000', transform,
}: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" data-export-icon>
      <defs>
        <polygon id="path-energy-1" points="0 0 12 0 12 22 0 22" />
      </defs>
      <g id="dtpr_icons-/-purpose-/-energy" stroke="none" strokeWidth="1" transform={transform}>
        <g id="dtpr_icons-/-purpose-/-ic_white-/-energy" transform="translate(0.000000, -1.500000)">
          <g id="Group-3" strokeWidth="1" fillRule="evenodd" transform="translate(6.000000, 1.000000)">
            <mask id="mask-energy-2" fill="white">
              <use xlinkHref="#path-energy-1" />
            </mask>
            <path fill={fill} d="M11.5337,9 L6.9997,9 L6.9997,0.467 C6.9997,-0.016 6.3567,-0.181 6.1257,0.243 L0.0577,12.312 C-0.1123,12.621 0.1127,13 0.4667,13 L4.9997,13 L4.9997,21.533 C4.9997,22.016 5.6437,22.18 5.8747,21.757 L11.9427,9.688 C12.1117,9.378 11.8877,9 11.5337,9" id="Fill-1" mask="url(#mask-energy-2)" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Energy;

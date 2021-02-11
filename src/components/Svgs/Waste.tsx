import React from 'react';
import { SVGProps } from 'common/types';

function Waste({
  fill = '#000000', transform,
}: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" data-export-icon>
      <defs>
        <polygon id="path-waste-1" points="0 0.9959 15 0.9959 15 3.9999 0 3.9999" />
      </defs>
      <g id="dtpr_icons-/-purpose-/-waste" stroke="none" strokeWidth="1" transform={transform}>
        <g id="Group-6" strokeWidth="1" transform="translate(5.000000, 2.000000)">
          <path d="M1.5,17.0044 C1.5,18.1084 2.396,19.0044 3.5,19.0044 L11.5,19.0044 C12.605,19.0044 13.5,18.1084 13.5,17.0044 L13.5,5.0044 L1.5,5.0044 L1.5,17.0044 Z" id="Fill-1" fill={fill} />
          <g id="Group-5" transform="translate(0.000000, 0.004500)" fill={fill}>
            <mask id="mask-waste-2" fill="white">
              <use xlinkHref="#path-waste-1" />
            </mask>
            <path d="M14.0576,1.9999 L13.1256,1.9999 L13.1256,1.9389 C13.1256,1.4179 12.7026,0.9959 12.1816,0.9959 L2.8186,0.9959 C2.2976,0.9959 1.8746,1.4179 1.8746,1.9389 L1.8746,1.9999 L0.9426,1.9999 C0.4226,1.9999 -0.0004,2.4219 -0.0004,2.9429 L-0.0004,3.0569 C-0.0004,3.5779 0.4226,3.9999 0.9426,3.9999 L14.0576,3.9999 C14.5786,3.9999 15.0006,3.5779 15.0006,3.0569 L15.0006,2.9429 C15.0006,2.4219 14.5786,1.9999 14.0576,1.9999" id="Fill-3" mask="url(#mask-waste-2)" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Waste;

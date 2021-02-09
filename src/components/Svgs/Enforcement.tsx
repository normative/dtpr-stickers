import React from 'react';
import { SVGProps } from 'common/types';

function Enforcement({
  fill = '#000000', transform,
}: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" data-export-icon>
      <defs>
        <polygon id="path-enf-1" points="0.711 0 7.75125 0 7.75125 7.0399 0.711 7.0399" />
        <polygon id="path-enf-3" points="0 0.001 10.9946 0.001 10.9946 2 0 2" />
      </defs>
      <g id="dtpr_icons-/-purpose-/-enforcement" stroke="none" strokeWidth="1" transform={transform}>
        <g id="Group-11" strokeWidth="1" fillRule="evenodd" transform="translate(2.000000, 0.500000)" fill={fill}>
          <path fill={fill} d="M19.6611,16.9668 L5.8251,3.1308 L3.1661,5.7888 L17.0021,19.6248 C17.3931,20.0158 18.0261,20.0158 18.4161,19.6248 L19.6611,18.3798 C20.0511,17.9888 20.0511,17.3568 19.6611,16.9668" id="Fill-1" />
          <g id="Group-5" transform="translate(6.000000, 0.000000)">
            <mask fill="white" id="mask-enf-2">
              <use xlinkHref="#path-enf-1" />
            </mask>
            <path fill={fill} d="M7.458,5.0879 C7.849,4.6979 7.849,4.0659 7.458,3.6749 L4.076,0.2929 C3.686,-0.0981 3.053,-0.0981 2.663,0.2929 L0.711,2.2439 L5.506,7.0399 L7.458,5.0879 Z" id="Fill-3" mask="url(#mask-enf-2)" />
          </g>
          <path d="M3.7109,13.4219 C4.1009,13.8129 4.7339,13.8129 5.1249,13.4219 L7.0759,11.4709 L2.2799,6.6749 L0.3289,8.6269 C-0.0611,9.0169 -0.0611,9.6499 0.3289,10.0399 L3.7109,13.4219 Z" id="Fill-6" />
          <g id="Group-10" transform="translate(0.000000, 18.000000)">
            <mask fill="white" id="mask-enf-4">
              <use xlinkHref="#path-enf-3" />
            </mask>
            <path fill={fill} d="M9.9946,0.001 L0.9996,0.001 C0.4476,0.001 -0.0004,0.448 -0.0004,1.001 C-0.0004,1.553 0.4476,2 0.9996,2 L9.9946,2 C10.5466,2 10.9946,1.553 10.9946,1.001 C10.9946,0.448 10.5466,0.001 9.9946,0.001" id="Fill-8" mask="url(#mask-enf-4)" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Enforcement;

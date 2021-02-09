import React from 'react';
import { SVGProps } from 'common/types';

function Security({
  fill = '#000000', transform,
}: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" data-export-icon>
      <defs>
        <polygon id="path-1" points="0 0.0002 14.8147 0.0002 14.8147 17.9997 0 17.9997" />
      </defs>
      <g id="dtpr_icons-/-purpose-/-security" stroke="none" strokeWidth="1" transform={transform}>
        <g id="Group-3" strokeWidth="1" fillRule="evenodd" transform="translate(5.000000, 3.000000)" fill={fill}>
          <mask id="mask-2" fill="white">
            <use xlinkHref="#path-1" />
          </mask>
          <path d="M6.9477,0.0977 L0.6717,2.8867 C0.2637,3.0687 -0.0003,3.4737 -0.0003,3.9207 L-0.0003,8.1237 C-0.0003,12.6917 3.1607,16.9627 7.4077,17.9997 C11.6547,16.9627 14.8147,12.6917 14.8147,8.1237 L14.8147,3.9207 C14.8147,3.4737 14.5517,3.0687 14.1427,2.8867 L7.8667,0.0977 C7.5747,-0.0323 7.2407,-0.0323 6.9477,0.0977" id="Fill-1" mask="url(#mask-2)" />
        </g>
      </g>
    </svg>
  );
}

export default Security;

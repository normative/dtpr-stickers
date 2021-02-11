import React from 'react';
import { SVGProps } from 'common/types';

function Planning({
  fill = '#000000', transform,
}: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" data-export-icon>
      <defs>
        <polygon id="path-plan-1" points="0 0.0515 16.9484497 0.0515 16.9484497 16.9995 0 16.9995" />
        <polygon id="path-plan-3" points="0.8816 0.8292 10.915 0.8292 10.915 10.861642 0.8816 10.861642" />
      </defs>
      <g id="dtpr_icons-/-purpose-/-planning" stroke="none" strokeWidth="1" transform={transform}>
        <g id="Group-9" strokeWidth="1" fillRule="evenodd" transform="translate(3.000000, 3.000000)">
          <g id="Group-3" transform="translate(0.000000, 0.757200)" fill={fill}>
            <mask id="mask-plan-2" fill="white">
              <use xlinkHref="#path-plan-1" />
            </mask>
            <path d="M1.0059,0.0515 C0.4929,0.0515 -0.0001,0.4495 -0.0001,1.0515 L-0.0001,16.0015 C-0.0001,16.5525 0.4469,16.9995 0.9989,16.9995 L15.9479,16.9995 C16.8379,16.9995 17.2829,15.9245 16.6539,15.2955 L1.7049,0.3455 C1.5019,0.1425 1.2519,0.0515 1.0059,0.0515 M3.4949,7.0795 L9.9209,13.5045 L3.4949,13.5045 L3.4949,7.0795" id="Fill-1" mask="url(#mask-plan-2)" />
          </g>
          <g id="Group-6" transform="translate(7.000000, 0.757200)" fill={fill}>
            <mask id="mask-plan-4" fill="white">
              <use xlinkHref="#path-plan-3" />
            </mask>
            <path d="M9.9336,7.7952 L10.9096,10.7222 C10.9366,10.8052 10.8586,10.8832 10.7756,10.8562 L7.8486,9.8802 C7.6926,9.8282 7.5506,9.7412 7.4346,9.6252 L0.8816,3.0722 L3.1246,0.8292 L9.6776,7.3822 C9.7936,7.4982 9.8816,7.6392 9.9336,7.7952" id="Fill-4" mask="url(#mask-plan-4)" />
          </g>
          <path d="M6.7607,0.4645 L6.7607,0.4645 C6.1417,1.0845 6.1417,2.0885 6.7607,2.7075 L7.1347,3.0815 L9.3777,0.8385 L9.0037,0.4645 C8.3837,-0.1545 7.3797,-0.1545 6.7607,0.4645" id="Fill-7" />
        </g>
      </g>
    </svg>
  );
}

export default Planning;

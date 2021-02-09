import React from 'react';
import { SVGProps } from 'common/types';

function Sound({
  fill = '#000000', transform,
}: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" data-export-icon>
      <g id="dtpr_icons-/-tech-/-ic_black-/-sound" transform={transform}>
        <rect id="Rectangle" fill={fill} x="1.2" y="8.4" width="2.4" height="7.2" rx="1.2" />
        <rect id="Rectangle" fill={fill} x="6" y="4.8" width="2.4" height="14.4" rx="1.2" />
        <rect id="Rectangle" fill={fill} x="10.8" y="2.4" width="2.4" height="19.2" rx="1.2" />
        <rect id="Rectangle" fill={fill} x="15.6" y="4.8" width="2.4" height="14.4" rx="1.2" />
        <rect id="Rectangle" fill={fill} x="20.4" y="8.4" width="2.4" height="7.2" rx="1.2" />
      </g>
    </svg>
  );
}

export default Sound;

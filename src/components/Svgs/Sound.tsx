/* eslint-disable react/prop-types */
import React from 'react';

function Sound({
  size, fill = '#000000', x, y,
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" x={x} y={y} data-export-svg>
      <g id="dtpr_icons-/-tech-/-ic_black-/-sound">
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

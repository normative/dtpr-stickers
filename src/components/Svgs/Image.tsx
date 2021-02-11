import React from 'react';
import { SVGProps } from 'common/types';

function Image({
  fill = '#000000', transform,
}: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" data-export-icon>
      <g id="dtpr_icons-/-tech-/-ic_black-/-image" transform={transform}>
        <path fill={fill} d="M20,4 L16.83,4 L15,2 L9,2 L7.17,4 L4,4 C2.9,4 2,4.9 2,6 L2,18 C2,19.1 2.9,20 4,20 L20,20 C21.1,20 22,19.1 22,18 L22,6 C22,4.9 21.1,4 20,4 Z M20,18 L4,18 L4,6 L8.05,6 L9.88,4 L14.12,4 L15.95,6 L20,6 L20,18 Z M12,7 C9.24,7 7,9.24 7,12 C7,14.76 9.24,17 12,17 C14.76,17 17,14.76 17,12 C17,9.24 14.76,7 12,7 Z M12,15 C10.35,15 9,13.65 9,12 C9,10.35 10.35,9 12,9 C13.65,9 15,10.35 15,12 C15,13.65 13.65,15 12,15 Z" id="Shape" />
      </g>
    </svg>
  );
}

export default Image;

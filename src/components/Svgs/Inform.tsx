import React from 'react';
import { SVGProps } from 'common/types';

function Inform({
  fill = '#000000', transform,
}: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" data-export-icon>
      <g id="dtpr_icons-/-purpose-/-inform" stroke="none" strokeWidth="1" transform={transform}>
        <g id="dtpr_icons-/-purpose-/-ic_white-/-inform" transform="translate(0.000000, -1.500000)" fill={fill}>
          <path d="M12.5,7 C11.119,7 10,5.881 10,4.5 C10,3.119 11.119,2 12.5,2 C13.881,2 15,3.119 15,4.5 C15,5.881 13.881,7 12.5,7 Z M16,20 C16.552,20 17,20.448 17,21 C17,21.552 16.552,22 16,22 L9,22 C8.448,22 8,21.552 8,21 C8,20.448 8.448,20 9,20 L10,20 L10,10 L9,10 C8.448,10 8,9.552 8,9 C8,8.448 8.448,8 9,8 L11,8 L11.5,8 L14,8 C14.552,8 15,8.448 15,9 L15,20 L16,20 Z" id="Combined-Shape" />
        </g>
      </g>
    </svg>
  );
}

export default Inform;

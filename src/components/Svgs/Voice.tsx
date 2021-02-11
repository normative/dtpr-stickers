import React from 'react';
import { SVGProps } from 'common/types';

function Voice({
  fill = '#000000', transform,
}: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" data-export-icon>
      <g id="dtpr_icons-/-tech-/-ic_black-/-voice" fill={fill} transform={transform}>
        <path d="M13,18.9291111 L13,22 L11,22 L11,18.9291111 C7.60770586,18.4438815 5,15.5264719 5,12 C5,11.4477153 5.44771525,11 6,11 C6.55228475,11 7,11.4477153 7,12 C7,14.7614237 9.23857625,17 12,17 C14.7614237,17 17,14.7614237 17,12 C17,11.4477153 17.4477153,11 18,11 C18.5522847,11 19,11.4477153 19,12 C19,15.5264719 16.3922941,18.4438815 13,18.9291111 Z" id="Combined-Shape" />
        <rect id="Rectangle" stroke={fill} strokeWidth="2" x="10" y="4" width="4" height="10" rx="2" />
      </g>
    </svg>
  );
}

export default Voice;

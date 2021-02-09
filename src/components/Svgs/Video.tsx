/* eslint-disable react/prop-types */
import React from 'react';

function Video({
  size, fill = '#000000', x, y,
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" x={x} y={y} data-export-svg>
      <g id="dtpr_icons-/-tech-/-ic_black-/-video" fill={fill}>
        <path d="M15,16 L5,16 L5,8 L15,8 L15,16 Z M16,6 L4,6 C3.45,6 3,6.45 3,7 L3,17 C3,17.55 3.45,18 4,18 L16,18 C16.55,18 17,17.55 17,17 L17,13.5 L20.1464466,16.6464466 C20.3417088,16.8417088 20.6582912,16.8417088 20.8535534,16.6464466 C20.9473216,16.5526784 21,16.4255015 21,16.2928932 L21,7.70710678 C21,7.43096441 20.7761424,7.20710678 20.5,7.20710678 C20.3673918,7.20710678 20.2402148,7.2597852 20.1464466,7.35355339 L17,10.5 L17,7 C17,6.45 16.55,6 16,6 Z" id="Shape" />
      </g>
    </svg>
  );
}

export default Video;

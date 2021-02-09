/* eslint-disable react/prop-types */
import React, { memo } from 'react';

const style = {
  fontSize: '0.875rem',
  fontFamily: 'Google Sans,Roboto,-apple-system',
  fontWeight: 500,
  lineHeight: '1.57',
};

function SvgText({
  x = '50%', y = '50%', color, children, width, height,
}) {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        style={style}
        fill={color}
        fontSize="0.875rem"
        fontFamily="Google Sans,Roboto,-apple-system"
        fontWeight={500}
        x={x}
        y={y}
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {children}
      </text>
    </svg>
  );
}

export default memo(SvgText);

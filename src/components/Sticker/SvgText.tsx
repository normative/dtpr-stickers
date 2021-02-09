/* eslint-disable react/prop-types */
import React, { memo } from 'react';

function style(props) {
  return {
    fontFamily: 'Google Sans,Roboto,-apple-system',
    fontWeight: 500,
    lineHeight: '1.1',
    margin: '8px 20px',
    textAlign: 'center',
    wordBreak: 'break-all',
    ...props,
  };
}

interface Props {
  y?: string | number;
  color: string;
  children: string;
  width: number;
  height: number;
}

function SvgText({
  y, color, children, width, height,
}: Props) {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <foreignObject
        width="100%"
        height="35%"
        fontFamily="Google Sans,Roboto,-apple-system"
        fontWeight={500}
        y={y}
      >
        <p style={style({ color })}>
          {children}
        </p>
      </foreignObject>
    </svg>
  );
}

SvgText.defaultProps = {
  y: '50%',
};

export default memo(SvgText);

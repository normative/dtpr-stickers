/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import { FONT_FAMILY } from 'styles/theme';

function composeStyle(props) {
  return {
    fontFamily: FONT_FAMILY,
    fontWeight: 500,
    lineHeight: '1.1',
    margin: '8px 20px',
    textAlign: 'center',
    wordBreak: 'break-word',
    ...props,
  };
}

interface Props {
  y?: string | number;
  style: any;
  children: string;
  width: number;
  height: number;
}

function SvgText({
  y, style, children, width, height,
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
        fontFamily={FONT_FAMILY}
        fontWeight={500}
        fontSize="1rem"
        y={y}
      >
        <p style={composeStyle(style)}>
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

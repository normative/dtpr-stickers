/* eslint-disable react/prop-types */
import React, { memo } from 'react';

import Air from 'components/Svgs/Air';
import Biometrics from 'components/Svgs/Biometrics';
import Image from 'components/Svgs/Image';
import Light from 'components/Svgs/Light';
import Sound from 'components/Svgs/Sound';
import Video from 'components/Svgs/Video';
import Voice from 'components/Svgs/Voice';
import Water from 'components/Svgs/Water';
import Wave from 'components/Svgs/Wave';

import SvgText from './SvgText';

const THEME = {
  blue: {
    hexColor: '#36B2E6',
    color: 'black',
  },
  yellow: {
    hexColor: '#FFDD00',
    color: 'black',
  },
  black: {
    hexColor: 'black',
    color: 'white',
  },
  white: {
    hexColor: '#FFFFFF',
    color: 'black',
  },
};

const ICONS = {
  air: Air,
  biometrics: Biometrics,
  image: Image,
  light: Light,
  sound: Sound,
  video: Video,
  voice: Voice,
  water: Water,
  wave: Wave,
};

function Sticker({
  innerRef, height = 264, variant, icon, children,
}) {
  const Icon = ICONS[icon];
  const width = height * 0.8787;
  const iconSize = height * 0.5;
  const textWidth = width * 0.7;
  const textHeight = (height - (height - iconSize)) * 0.7;
  const iconPosition = {
    x: (width - iconSize) / 2,
    y: (height - iconSize) / 3,
  };
  const textPosition = {
    y: '90%',
  };

  return (
    <svg ref={innerRef} width={width} height={height} viewBox="0 0 232 264" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Sign-/-Hex-/-White" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <polygon id="Star" fill={THEME[variant].hexColor} points="116 264 1.6846467 198 1.6846467 66 116 0 230.315353 66 230.315353 198" />
      </g>
      <Icon size={iconSize} fill={THEME[variant].color} x={iconPosition.x} y={iconPosition.y} />
      <SvgText
        color={THEME[variant].color}
        y={textPosition.y}
        width={textWidth}
        height={textHeight}
      >
        {children}
      </SvgText>
    </svg>
  );
}

export const icons = Object.keys(ICONS).reduce((res, key) => {
  res[key.toUpperCase()] = key;
  return res;
}, {});

export default memo(Sticker);

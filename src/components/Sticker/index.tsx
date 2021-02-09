/* eslint-disable react/prop-types */
import React, { memo } from 'react';

import Air from 'components/Svgs/Air';
import Biometrics from 'components/Svgs/Biometrics';
import Image from 'components/Svgs/Image';
import Light from 'components/Svgs/Light';
import Sound from 'components/Svgs/Sound';
import Video from 'components/Svgs/Video';
import Voice from 'components/Svgs/Voice';
import TechWater from 'components/Svgs/TechWater';
import Wave from 'components/Svgs/Wave';

import Accessibility from 'components/Svgs/Accessibility';
import Agency from 'components/Svgs/Agency';
import Arts from 'components/Svgs/Arts';
import Ecology from 'components/Svgs/Ecology';
import Emergency from 'components/Svgs/Emergency';
import Energy from 'components/Svgs/Energy';
import Enforcement from 'components/Svgs/Enforcement';
import Entry from 'components/Svgs/Entry';
import Health from 'components/Svgs/Health';
import Inform from 'components/Svgs/Inform';
import Mobility from 'components/Svgs/Mobility';
import Planning from 'components/Svgs/Planning';
import Research from 'components/Svgs/Research';
import Security from 'components/Svgs/Security';
import Toggle from 'components/Svgs/Toggle';
import Waste from 'components/Svgs/Waste';
import PurposeWater from 'components/Svgs/PurposeWater';
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
  tech: {
    air: Air,
    biometrics: Biometrics,
    image: Image,
    light: Light,
    sound: Sound,
    video: Video,
    voice: Voice,
    water: TechWater,
    wave: Wave,
  },
  purpose: {
    accessibility: Accessibility,
    agency: Agency,
    arts: Arts,
    ecology: Ecology,
    emergency: Emergency,
    energy: Energy,
    enforcement: Enforcement,
    entry: Entry,
    health: Health,
    inform: Inform,
    mobility: Mobility,
    planning: Planning,
    research: Research,
    security: Security,
    toggle: Toggle,
    waste: Waste,
    water: PurposeWater,
  },
};

const DEFAULT_HEIGHT = 264;

function Sticker({
  height = DEFAULT_HEIGHT, variant, context, icon, children,
}) {
  const Icon = ICONS[context][icon];
  const width = height * 0.8787;

  const textPosition = {
    y: '60%',
  };

  if (!icon) return <></>;

  return (
    <svg width={width} height={height} viewBox="0 0 232 264" version="1.1" xmlns="http://www.w3.org/2000/svg" data-export-badge>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <polygon id="Star" fill={THEME[variant].hexColor} points="116 264 1.6846467 198 1.6846467 66 116 0 230.315353 66 230.315353 198" />
      </g>
      <Icon fill={THEME[variant].color} transform="translate(4.5 2.5) scale(0.6)" />
      <SvgText
        color={THEME[variant].color}
        width={width}
        height={height}
        y={textPosition.y}
      >
        {children}
      </SvgText>
    </svg>
  );
}

export const icons = {
  tech: Object.keys(ICONS.tech).reduce((res, key) => {
    res[key.toUpperCase()] = key;
    return res;
  }, {}),
  purpose: Object.keys(ICONS.purpose).reduce((res, key) => {
    res[key.toUpperCase()] = key;
    return res;
  }, {}),
};

export default memo(Sticker);

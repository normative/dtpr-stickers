/* eslint-disable react/no-danger */
import React, { memo } from 'react';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import { showPlaceholderOnImgError } from 'common/helpers';
import SvgText from './SvgText';

const THEME = {
  hexColor: '#FFFFFF',
  color: 'black',
};
const DEFAULT_HEIGHT = 264;

interface Props {
  height: number;
  logoUrl: string;
  classes: any;
  children: string;
  placeholder: string;
}

function QRCodeSticker({
  height = DEFAULT_HEIGHT, logoUrl, classes, children, placeholder,
}: Props) {
  const width = height * 0.8787;

  const textPosition = {
    y: '60%',
  };

  return (
    <svg className={classes.root} width={width} height={height} viewBox="0 0 232 264" version="1.1" xmlns="http://www.w3.org/2000/svg" data-export-badge="logo">
      <svg data-export-hexagon="hexagon-logo" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <polygon id="Star" fill={THEME.hexColor} points="116 264 1.6846467 198 1.6846467 66 116 0 230.315353 66 230.315353 198" />
        </g>
      </svg>
      <svg viewBox="0 0 256 256">
        <image
          width="50%"
          height="50%"
          href={logoUrl}
          transform="translate(65.0 35.0) scale(1)"
          onError={(e: any) => { e.target.href.baseVal = placeholder; }}
        />
      </svg>
      <SvgText
        style={{ color: THEME.color }}
        width={width}
        height={height}
        y={textPosition.y}
      >
        {children}
      </SvgText>
    </svg>
  );
}

const styles = (theme: Theme) => createStyles({
  root: {
    margin: theme.spacing(),
  },
});

export default withStyles(styles)(memo(QRCodeSticker));

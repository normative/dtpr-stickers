/* eslint-disable react/no-danger */
import React, { memo, useState } from 'react';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import DOMPurify from 'dompurify';

import { getQRCodeSvg } from 'services/qrCode';

import SvgText from './SvgText';

const THEME = {
  hexColor: '#FFFFFF',
  color: 'black',
};
const DEFAULT_HEIGHT = 264;

interface Props {
  height: number;
  url: string;
  classes: any;
  name: string;
}

function QRCodeSticker({
  height = DEFAULT_HEIGHT, url, classes, name,
}: Props) {
  const width = height * 0.8787;

  const textPosition = {
    y: '60%',
  };

  const qrCodeUrl = `${url}?utm_source=307&utm_medium=qr&utm_campaign=qr_scan`;
  const [QRCodeSvg] = useState(
    DOMPurify.sanitize(getQRCodeSvg(qrCodeUrl), { USE_PROFILES: { svg: true } }),
  );

  return (
    <svg className={classes.root} width={width} height={height} viewBox="0 0 232 264" version="1.1" xmlns="http://www.w3.org/2000/svg" data-export-badge={`qrcode-${name}`}>
      <svg data-export-hexagon={`hexagon-qrcode-${name}`} xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <polygon id="Star" fill={THEME.hexColor} points="116 264 1.6846467 198 1.6846467 66 116 0 230.315353 66 230.315353 198" />
        </g>
      </svg>
      <svg viewBox="0 0 256 256">
        <g dangerouslySetInnerHTML={{ __html: QRCodeSvg }} transform="translate(65.0 35.0) scale(0.5)" />
      </svg>
      <SvgText
        style={{
          color: THEME.color,
          fontSize: '9px',
        }}
        width={width}
        height={height}
        y={textPosition.y}
      >
        {url}
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

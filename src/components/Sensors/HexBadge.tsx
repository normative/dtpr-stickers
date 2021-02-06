import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';

import { badgeSizeToStyle } from 'common/helpers';
import { Typography } from '@material-ui/core';
import { imagesUrl } from 'common/constants';

interface Props {
  classes: any;
  style: {
    wrapper: { height: string, width: string };
    typography?: React.CSSProperties;
  };
  children: string;
  src: string;
  badgeSize: number;
}

function HexBadge({
  classes, style, children, src, badgeSize,
}: Props) {
  const badgeStyle = badgeSizeToStyle(badgeSize);
  return (
    <div className={classes.badge} style={badgeStyle} data-div-as-png>
      <img className={`${classes.hex} ${classes.noPrint}`} src={imagesUrl.WHITE_HEX_URL} height="100%" width="100%" alt="" />
      <div className={classes.stickerContent} data-div-as-png>
        <div style={{ ...style.wrapper, transition: 'all 0.8s ease-out' }}>
          <img src={src} height="100%" width="100%" alt="" data-img-as-png />
        </div>
        <Typography variant="subtitle2" style={style.typography}>
          {children}
        </Typography>
      </div>
    </div>
  );
}

const styles = (theme: Theme) => createStyles({
  noPrint: {
    '@media all': {
      display: 'block',
    },
    '@media print': {
      display: 'none',
    },
  },
  badge: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: theme.spacing(2),
    pageBreakInside: 'avoid',
    transition: 'all 0.8s ease-out',

    '@media print': {
      pageBreakInside: 'avoid',
      float: 'none',
    },
  },
  hex: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    pageBreakInside: 'avoid',
  },
  stickerContent: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    margin: '30px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    pageBreakInside: 'avoid',
    wordBreak: 'break-word',
  },
});

export default withStyles(styles)(HexBadge);

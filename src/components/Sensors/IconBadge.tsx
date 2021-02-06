import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';

import { badgeSizeToStyle } from 'common/helpers';
import { Typography } from '@material-ui/core';

interface IconBadgeProps {
  classes: any;
  badgeSize: number;
  hexSrc: string;
  iconSrc: string;
  fontColor: string;
  iconName: string;
}

function IconBadge(props: IconBadgeProps) {
  const {
    classes, badgeSize, hexSrc, iconSrc, fontColor, iconName,
  } = props;
  const style = badgeSizeToStyle(badgeSize);
  const iconWrapperStyle = badgeSizeToStyle(badgeSize / 2, 1);

  return (
    <div className={classes.badge} style={style} data-div-as-png>
      <img className={classes.hex} src={hexSrc} height="100%" width="100%" alt="" />
      <div className={classes.stickerContent} style={{ color: fontColor }} data-div-as-png>
        <div style={{ ...iconWrapperStyle, transition: 'all 0.8s ease-out' }}>
          <img src={iconSrc} height="100%" width="100%" alt="" />
        </div>
        <Typography className={classes.stickerText} variant="subtitle2" color="inherit">
          {iconName}
        </Typography>
      </div>
    </div>
  );
}

const styles = (theme: Theme) => createStyles({
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
    height: '100%',
    position: 'relative',
    display: 'flex',
    margin: '30px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    pageBreakInside: 'avoid',
  },
  stickerText: {
    minWidth: 0,
    maxWidth: '70%',
  },
});

export default withStyles(styles)(IconBadge);

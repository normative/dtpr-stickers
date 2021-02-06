import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';

import { AirtableData } from 'common/types';
import { badgeSizeToStyle } from 'common/helpers';
import { Typography } from '@material-ui/core';
import { imagesUrl } from 'common/constants';

interface IconBadgeProps {
  classes: any;
  airtableData: AirtableData;
  airtableKey: 'techType' | 'purpose'
  badgeName: string;
  badgeSize: number;
}

function IconBadge(props: IconBadgeProps) {
  const {
    classes, airtableKey, badgeName, airtableData, badgeSize,
  } = props;
  const style = badgeSizeToStyle(badgeSize);
  const iconWrapperStyle = badgeSizeToStyle(badgeSize / 2, 1);

  const config = airtableData[airtableKey].find((option) => option.name === badgeName);
  if (!config) {
    return null;
  }
  const { iconShortname, name } = config;
  let hexUrl = imagesUrl.WHITE_HEX_URL;
  let iconPath = iconShortname.replace(/\/(?=[^/]*$)/, '/ic_black/');
  let fontColor = 'black';

  if (iconShortname.includes('yellow')) {
    hexUrl = imagesUrl.YELLOW_HEX_URL;
    iconPath = iconShortname.replace('/yellow/', '/ic_black/');
  } else if (iconShortname.includes('blue')) {
    hexUrl = imagesUrl.BLUE_HEX_URL;
    iconPath = iconShortname.replace('/blue/', '/ic_black/');
  } else if (iconShortname.includes('black')) {
    hexUrl = imagesUrl.BLACK_HEX_URL;
    iconPath = iconShortname.replace('/black/', '/ic_white/');
    fontColor = 'white';
  } else if (airtableKey === 'purpose') {
    // the name is inconsistent so we explitcly check for the purpose case :/
    hexUrl = imagesUrl.BLACK_HEX_URL;
    iconPath = iconShortname.replace(/\/(?=[^/]*$)/, '/ic_white/');
    fontColor = 'white';
  }
  return (
    <div key={name} className={classes.badge} style={style} data-div-as-png>
      <img className={classes.hex} src={hexUrl} height="100%" width="100%" alt="" />
      <div className={classes.stickerContent} style={{ color: fontColor }} data-div-as-png>
        <div style={{ ...iconWrapperStyle, transition: 'all 0.8s ease-out' }}>
          <img src={`/images/${iconPath}.svg`} height="100%" width="100%" alt="" />
        </div>
        <Typography className={classes.stickerText} variant="subtitle2" color="inherit">
          {name}
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

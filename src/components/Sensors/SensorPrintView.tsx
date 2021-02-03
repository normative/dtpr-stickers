import React, { useState } from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import {
  Button,
  Typography,
  LinearProgress,
  Input,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from 'libs/mui';
import { SensorStateType } from 'reducers/sensor';
import { AirtableStateType } from 'reducers/airtable';
import { AirtableData } from 'common/types';

const WHITE_HEX_URL = '/images/hexes/white.svg';
const OUTLINED_HEX_URL = '/images/hexes/white.svg';
const YELLOW_HEX_URL = '/images/hexes/yellow.svg';
const BLUE_HEX_URL = '/images/hexes/blue.svg';
const BLACK_HEX_URL = '/images/hexes/black.svg';

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0,
    [theme.breakpoints.up('sm')]: {
      margin: 'auto',
      padding: theme.spacing(2),
      maxWidth: 'calc(100% - 167px)',
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    '@media print': {
      margin: 0,
      padding: 0,
      width: '100%',
    },
  },
  header: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: 0,
    },
  },
  noPrint: {
    '@media all': {
      display: 'block',
    },
    '@media print': {
      display: 'none',
    },
  },
  printOnly: {
    '@media all': {
      display: 'none',
    },
    '@media print': {
      display: 'block',
    },
  },
  badgeContainer: {
    background: theme.palette.grey['200'],
    marginTop: theme.spacing(2),
    padding: theme.spacing(),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    '@media print': {
      background: 'white',
      margin: 0,
      padding: 0,
      width: '100%',

      display: 'block',
      float: 'none',
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

const badgeSizeToStyle = (badgeSize: number, ratio: number = 1.137) => ({ height: `${badgeSize * ratio}in`, width: `${badgeSize}in` });

interface IconBadgeProps {
  readonly classes?: any;
  airtableData: AirtableData;
  airtableKey: 'techType' | 'purpose'
  badgeName: string;
  badgeSize: number;
}

const IconBadge = withStyles(styles)((props: IconBadgeProps) => {
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
  let hexUrl = WHITE_HEX_URL;
  let iconPath = iconShortname.replace(/\/(?=[^/]*$)/, '/ic_black/');
  let fontColor = 'black';

  if (iconShortname.includes('yellow')) {
    hexUrl = YELLOW_HEX_URL;
    iconPath = iconShortname.replace('/yellow/', '/ic_black/');
  } else if (iconShortname.includes('blue')) {
    hexUrl = BLUE_HEX_URL;
    iconPath = iconShortname.replace('/blue/', '/ic_black/');
  } else if (iconShortname.includes('black')) {
    hexUrl = BLACK_HEX_URL;
    iconPath = iconShortname.replace('/black/', '/ic_white/');
    fontColor = 'white';
  } else if (airtableKey === 'purpose') {
    // the name is inconsistent so we explitcly check for the purpose case :/
    hexUrl = BLACK_HEX_URL;
    iconPath = iconShortname.replace(/\/(?=[^/]*$)/, '/ic_white/');
    fontColor = 'white';
  }
  return (
    <div key={name} className={classes.badge} style={style}>
      <img className={classes.hex} src={hexUrl} height="100%" width="100%" alt="" />
      <div className={classes.stickerContent} style={{ color: fontColor }}>
        <div style={{ ...iconWrapperStyle, transition: 'all 0.8s ease-out' }}>
          <img src={`/images/${iconPath}.svg`} height="100%" width="100%" alt="" />
        </div>
        <Typography className={classes.stickerText} variant="subtitle2" color="inherit">{name}</Typography>
      </div>
    </div>
  );
});

const AccountabilityBadge = withStyles(styles)((props: any) => {
  const {
    classes, accountable, logoSrc, badgeSize,
  } = props;
  const style = badgeSizeToStyle(badgeSize);
  const logoWrapperStyle = badgeSizeToStyle(badgeSize / 2.5, 1);
  return (
    <div className={classes.badge} style={style}>
      <img className={`${classes.hex} ${classes.noPrint}`} src={WHITE_HEX_URL} height="100%" width="100%" alt="" />
      <img className={`${classes.hex} ${classes.printOnly}`} src={OUTLINED_HEX_URL} height="100%" width="100%" alt="" />
      <div className={classes.stickerContent}>
        <div style={{ ...logoWrapperStyle, transition: 'all 0.8s ease-out' }}>
          <img src={logoSrc} height="100%" width="100%" alt="" />
        </div>
        <Typography variant="subtitle2">{accountable}</Typography>
      </div>
    </div>
  );
});

const QRBadge = withStyles(styles)((props: any) => {
  const {
    classes, qrCodeSrc, url, badgeSize,
  } = props;
  const style = badgeSizeToStyle(badgeSize);
  const qrWrapperStyle = badgeSizeToStyle(badgeSize / 2, 1);
  const showURL = badgeSize >= 2;
  return (
    <div className={classes.badge} style={style}>
      <img className={`${classes.hex} ${classes.noPrint}`} src={WHITE_HEX_URL} height="100%" width="100%" alt="" />
      <img className={`${classes.hex} ${classes.printOnly}`} src={OUTLINED_HEX_URL} height="100%" width="100%" alt="" />
      <div className={classes.stickerContent}>
        <div style={{ ...qrWrapperStyle, transition: 'all 0.8s ease-out' }}>
          <img src={qrCodeSrc} height="100%" width="100%" alt="" />
        </div>
        {showURL && url && (
        <Typography variant="subtitle2" style={{ fontSize: '9px' }}>
          {url}
        </Typography>
        )}
      </div>
    </div>
  );
});

interface Props {
  sensor: SensorStateType;
  airtable: AirtableStateType;
  sensorUrl?: string;
  qrCodeSrc?: string;
  classes: any;
}

function SensorPrintView({
  classes, airtable, sensor, sensorUrl, qrCodeSrc,
}: Props) {
  const isLoading = sensor.isFetching || airtable.isFetching;
  const [badgeSize, setBadgeSize] = useState(2);

  if (isLoading) return <LinearProgress color="secondary" />;
  if (!sensor.data) return <Typography>Hmm can`t find that sensor :/</Typography>;

  // Make a badge for anything identifiable or de-indentified
  const prioritizedTechTypes = (sensor.data && sensor.data.techType) ? sensor.data.techType.filter((type) => type.includes('dentif')) : [];

  // Make a badge for only the first purpose
  const featuredPurpose = sensor.data ? sensor.data.purpose[0] : undefined;

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.noPrint} gutterBottom variant="h6" component="h2">Print</Typography>
        <Typography className={classes.noPrint} paragraph>
          Print this page and cut out the labels for use in your
          own signage. Or download the images for further layout customization (coming soon).
        </Typography>
        <FormControl className={classes.noPrint}>
          <InputLabel htmlFor="select-multiple">Size</InputLabel>
          <Select
            value={badgeSize}
            onChange={(e) => { setBadgeSize(parseFloat(e.target.value as string)); }}
            input={<Input id="select" />}
          >
            <MenuItem value={2}>2 inches</MenuItem>
            <MenuItem value={3}>3 inches</MenuItem>
            <MenuItem value={4}>4 inches</MenuItem>
            <MenuItem value={5}>5 inches</MenuItem>
            <MenuItem value={6}>6 inches</MenuItem>
            <MenuItem value={7}>7 inches</MenuItem>
            <MenuItem value={8}>8 inches</MenuItem>
          </Select>
          <Button className={classes.noPrint} onClick={() => window.print()} variant="contained" color="primary">
            Print Labels
          </Button>
        </FormControl>
      </div>
      {sensor.data && airtable.data && (
      <div className={classes.badgeContainer}>
        {sensor.data.logoSrc && sensor.data.accountable && (
          <AccountabilityBadge
            accountable={sensor.data.accountable}
            logoSrc={sensor.data.logoSrc}
            badgeSize={badgeSize}
          />
        )}
        {qrCodeSrc && <QRBadge url={sensorUrl} qrCodeSrc={qrCodeSrc} badgeSize={badgeSize} />}
        {!!prioritizedTechTypes.length && prioritizedTechTypes.map((techType) => (
          <IconBadge key={techType} airtableKey="techType" badgeName={techType} airtableData={airtable.data} badgeSize={badgeSize} />
        ))}
        {featuredPurpose && <IconBadge airtableKey="purpose" badgeName={featuredPurpose} airtableData={airtable.data} badgeSize={badgeSize} />}
      </div>
      )}
    </div>
  );
}

SensorPrintView.defaultProps = {
  sensorUrl: '',
  qrCodeSrc: '',
};

export default withStyles(styles)(SensorPrintView);

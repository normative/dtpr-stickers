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
import { badgeSizeToStyle } from 'common/helpers';
import IconBadge from './IconBadge';
import HexBadge from './HexBadge';

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
  const prioritizedTechTypes = (sensor.data && sensor.data.techType)
    ? sensor.data.techType.filter((type) => type.includes('dentif'))
    : [];

  // Make a badge for only the first purpose
  const featuredPurpose = sensor.data ? sensor.data.purpose[0] : undefined;

  return (
    <>
      <div className={classes.navBar}>
        <a href="https://dtpr.helpfulplaces.com/" className={classes.navBarLink}>
          <Typography className={classes.navBarTypography}>
            DTPR
          </Typography>
        </a>
      </div>
      <div className={classes.root}>
        <Typography className={classes.header} variant="h1">
          Sticker Marker
        </Typography>
        <div>
          <Typography className={classes.sensorLabels} gutterBottom variant="h3">
            Sensor Labels
          </Typography>
          <Typography paragraph>
            Download or print the labels for use in your own signage.
          </Typography>
          <FormControl className={classes.print}>
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
            <Button onClick={() => window.print()} variant="contained" color="primary">
              Print Labels
            </Button>
          </FormControl>
        </div>
        {sensor.data && airtable.data && (
        <div className={classes.badgeContainer}>
          {sensor.data.logoSrc && sensor.data.accountable && (
            <HexBadge
              style={{
                wrapper: badgeSizeToStyle(badgeSize / 2.5, 1),
              }}
              src={sensor.data.logoSrc}
              badgeSize={badgeSize}
            >
              {sensor.data.accountable}
            </HexBadge>
          )}
          {qrCodeSrc && (
            <HexBadge
              style={{
                wrapper: badgeSizeToStyle(badgeSize / 2, 1),
                typography: { fontSize: '9px' },
              }}
              src={qrCodeSrc}
              badgeSize={badgeSize}
            >
              {badgeSize >= 2 ? sensorUrl : ''}
            </HexBadge>
          )}
          {!!prioritizedTechTypes.length && prioritizedTechTypes.map((techType) => (
            <IconBadge
              key={techType}
              airtableKey="techType"
              badgeName={techType}
              airtableData={airtable.data}
              badgeSize={badgeSize}
            />
          ))}
          {featuredPurpose && (
            <IconBadge
              airtableKey="purpose"
              badgeName={featuredPurpose}
              airtableData={airtable.data}
              badgeSize={badgeSize}
            />
          )}
        </div>
        )}
      </div>
    </>
  );
}

SensorPrintView.defaultProps = {
  sensorUrl: '',
  qrCodeSrc: '',
};

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
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
  navBar: {
    backgroundColor: '#001B31',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  navBarLink: {
    textDecoration: 'none',
    color: 'white',
  },
  navBarTypography: {
    fontWeight: 500,
    fontSize: '1.38rem',
    lineHeight: '1.5rem',
  },
  print: {
    display: 'grid',
    rowGap: theme.spacing(),
    width: 'fit-content',
  },
  header: {
    borderBottom: '1px solid #B4B4B4',
    fontWeight: 500,
    fontSize: '1.38rem',
    lineHeight: 3,
    textAlign: 'center',
    letterSpacing: '0.75px',
  },
  sensorLabels: {
    fontWeight: 500,
    fontSize: '20px',
    letterSpacing: '0.75px',
    paddingTop: theme.spacing(3),
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
});

export default withStyles(styles)(SensorPrintView);

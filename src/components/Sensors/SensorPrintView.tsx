/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';

import {
  Button,
  Typography,
  LinearProgress,
} from 'libs/mui';
import { SensorStateType } from 'reducers/sensor';
import { AirtableStateType } from 'reducers/airtable';
import { badgeSizeToStyle, getIconConfig } from 'common/helpers';
import IconBadge from './IconBadge';
import HexBadge from './HexBadge';

interface Props {
  sensor: SensorStateType;
  airtable: AirtableStateType;
  sensorUrl?: string;
  qrCodeSrc?: string;
  classes: any;
  onDownloadClick: any;
  firstPurpose: string;
  dentifTechTypes: string[];
}

const BADGE_SIZE = 2;

function SensorPrintView({
  classes,
  airtable,
  sensor,
  sensorUrl,
  qrCodeSrc,
  onDownloadClick,
  firstPurpose,
  dentifTechTypes,
}: Props) {
  const isLoading = sensor.isFetching || airtable.isFetching;

  if (isLoading) return <LinearProgress color="secondary" />;
  if (!sensor.data) return <Typography>Hmm can`t find that sensor :/</Typography>;

  return (
    <div className={classes.root}>
      <div className={classes.navBar}>
        <a href="https://dtpr.helpfulplaces.com/" className={classes.navBarLink}>
          <Typography className={classes.navBarTypography}>
            DTPR
          </Typography>
        </a>
      </div>
      <div className={classes.outerPanel}>
        <div className={classes.panel}>
          <Typography className={classes.header} variant="h1">
            Download Your Labels
          </Typography>
          <div>
            <Typography className={classes.sensorLabels} gutterBottom variant="h3">
              {sensor.data?.name}
            </Typography>
            <Typography paragraph>
              Download or print the labels for use in your own signage.
            </Typography>
          </div>
          {sensor.data && airtable.data && (
          <div className={classes.badgeContainer} id="test-2" data-div-as-png>
            {sensor.data.logoSrc && sensor.data.accountable && (
              <HexBadge
                style={{
                  wrapper: badgeSizeToStyle(BADGE_SIZE / 2.5, 1),
                }}
                src={sensor.data.logoSrc}
                badgeSize={BADGE_SIZE}
              >
                {sensor.data.accountable}
              </HexBadge>
            )}
            {qrCodeSrc && (
              <HexBadge
                style={{
                  wrapper: badgeSizeToStyle(BADGE_SIZE / 2, 1),
                  typography: { fontSize: '9px' },
                }}
                src={qrCodeSrc}
                badgeSize={BADGE_SIZE}
              >
                {sensorUrl}
              </HexBadge>
            )}
            {dentifTechTypes.map((techType) => (
              <IconBadge
                key={techType}
                badgeSize={BADGE_SIZE}
                {...getIconConfig(airtable.data, 'techType', techType)}
              />
            ))}
            {firstPurpose && (
              <IconBadge
                badgeSize={BADGE_SIZE}
                {...getIconConfig(airtable.data, 'purpose', firstPurpose)}
              />
            )}
          </div>
          )}
        </div>
      </div>
      <Button className={classes.downloadButton} onClick={onDownloadClick}>
        Download
      </Button>
    </div>
  );
}

SensorPrintView.defaultProps = {
  sensorUrl: '',
  qrCodeSrc: '',
};

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  outerPanel: {
    width: '100%',
  },
  panel: {
    flexGrow: 1,
    flexShrink: 0,
    margin: 0,
    padding: 0,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    width: '100%',
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
    backgroundColor: theme.palette.primary.main,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    width: '100%',
  },
  navBarLink: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
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
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
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
  downloadButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
});

export default withStyles(styles)(SensorPrintView);

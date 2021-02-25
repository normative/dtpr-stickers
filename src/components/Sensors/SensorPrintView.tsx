/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';

import {
  Button,
  Typography,
  LinearProgress,
} from 'libs/mui';
import { SensorStateType } from 'reducers/sensor';
import { getPrintStickerConfig } from 'common/helpers';
import Sticker from 'components/Sticker';
import QRCodeSticker from 'components/Sticker/QRCodeSticker';
import LogoSticker from 'components/Sticker/LogoSticker';
import { StickerThemeVariant, taxonomyProps } from 'common/constants';
import NotFound from 'components/NotFound';

interface Props {
  sensor: SensorStateType;
  sensorUrl?: string;
  placeUrl?: string;
  classes: any;
  onDownloadClick: any;
  firstPurpose: string;
  dentifTechTypes: string[];
}

function SensorPrintView({
  classes,
  sensor,
  sensorUrl,
  placeUrl,
  onDownloadClick,
  firstPurpose,
  dentifTechTypes,
}: Props) {
  const isLoading = sensor.isFetching;

  if (isLoading) return <LinearProgress color="primary" />;

  if (sensor.didInvalidate) {
    return (
      <NotFound code={sensor.error.code} message={sensor.error.message} />
    );
  }

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
          {sensor.data && (
          <div className={classes.badgeContainer} id="test-2" data-div-as-png>
            {sensor.data.logoRef && sensor.data.accountable && (
              <LogoSticker
                height={218}
                logoUrl={sensor?.data.logoSrc || sensor?.data.logoRef}
                placeholder={`${window.location.origin}/images/accountable/placeholder.svg`}
              >
                {sensor.data.accountable}
              </LogoSticker>
            )}
            {placeUrl && (
              <QRCodeSticker
                height={218}
                url={placeUrl}
                name="place"
              />
            )}
            {sensorUrl && (
              <QRCodeSticker
                height={218}
                url={sensorUrl}
                name="sensor"
              />
            )}
            {dentifTechTypes.map((techType) => (
              <Sticker
                key={techType}
                height={218}
                {...getPrintStickerConfig(taxonomyProps.TECH_TYPE, techType)}
              >
                {techType}
              </Sticker>
            ))}
            {firstPurpose && (
              <Sticker
                height={218}
                {...getPrintStickerConfig(
                  taxonomyProps.PURPOSE, firstPurpose, StickerThemeVariant.BLACK,
                )}
              >
                {firstPurpose}
              </Sticker>
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
  placeUrl: '',
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

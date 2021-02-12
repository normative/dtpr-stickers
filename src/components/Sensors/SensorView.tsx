import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';

import {
  Typography, Divider, LinearProgress,
} from 'libs/mui';

import { Option } from 'common/types';
import { sensorsGroupLabels } from 'common/constants';

import { PlaceStateType } from 'reducers/place';
import { SensorStateType } from 'reducers/sensor';

import FeedbackFooter from '../FeedbackFooter';
import Accordian from './Accordian';
import Badge from './Badge';

interface SensorsGroup {
  sensorGroup: string;
  label: string;
  options: Option[];
}
interface Props {
  place: PlaceStateType;
  sensor: SensorStateType;
  sensorsGroup: SensorsGroup[];
  techType: SensorsGroup;
  purpose: SensorsGroup;
  classes: any;
}

function SensorView({
  classes,
  place,
  sensor,
  sensorsGroup,
  techType,
  purpose,
}: Props) {
  const isLoading = sensor.isFetching;

  if (isLoading) return <LinearProgress color="secondary" />;
  if (!sensor.data) return <Typography>Hmm can`t find that sensor :/</Typography>;

  const {
    headline,
    description: sensorDescription,
    accountable,
    accountableDescription,
    sensorImageSrc,
    email,
  } = sensor.data;

  // const hasfooter = phone || chat || email || onsiteStaff;
  const accountableOption = accountable ? {
    name: accountable,
    iconShortname: 'accountable/org',
    description: accountableDescription,
  } : null;

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        {headline && (
          <Typography
            variant="h6"
            align="center"
            style={{ wordBreak: 'break-word', fontWeight: 'bold' }}
          >
            {headline}
          </Typography>
        )}
      </div>
      <Divider variant="fullWidth" />
      <div className={classes.summaryWrapper}>
        <Badge option={purpose?.options[0]} />
        <Badge option={techType?.options[0]} />
        <Badge option={accountableOption} />
      </div>
      <Divider variant="fullWidth" />
      <div className={classes.content}>
        {sensorImageSrc && (
          <img
            className={classes.sensorImage}
            src={sensorImageSrc}
            alt="sensor icon"
          />
        )}
        {sensorDescription && <Typography paragraph>{sensorDescription}</Typography>}
      </div>
      <div>
        {/* On top accountability sensor info */}
        {accountableOption?.description && (
        <Accordian
          icon="/images/accountable/org.svg"
          title={accountableOption.name}
          label={sensorsGroupLabels.accountability}
          body={accountableOption.description}
        />
        )}
        {/* Followed by the rest of sensor groups */}
        {sensorsGroup.map(({ label, options }) => options.map(
          ({ name, description, iconShortname }) => (
            <Accordian
              key={name}
              icon={`/images/${iconShortname}.svg`}
              title={name}
              label={label}
              body={description}
            />
          ),
        ))}
      </div>
      <FeedbackFooter
        placeName={place.data ? place.data.name : 'Loading...'}
        technology={sensor.data.name}
        email={email || 'dtpr-hello@sidewalklabs.com'}
      />
    </div>
  );
}

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    margin: 'auto',
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.breakpoints.values.md,
    },
  },
  toolbar: {
    flexWrap: 'wrap',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'start',
    },
    borderBottom: '0.5px solid rgba(0,0,0,.2)',
    minHeight: '48px',
  },
  toolbarRight: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
  backButton: {
    borderRadius: '16px',
    fontWeight: 700,
    textTransform: 'none',
    flexShrink: 0,
    padding: '0 16px 0 8px',
    height: '32px',
  },
  backButtonIcon: {
    marginRight: theme.spacing(),
  },
  backButtonText: {
    marginBottom: '-2px',
  },
  header: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  content: {
    padding: theme.spacing(2),
  },
  footer: {
    background: theme.palette.grey['200'],
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
  },
  summaryWrapper: {
    display: 'flex',
    padding: theme.spacing(2),
  },
  summaryCell: {
    flex: 1,
    textAlign: 'center',
  },
  summaryBadge: {
    height: '48px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(),
  },
  heading: {
    flex: 1,
    alignSelf: 'center',
    marginLeft: theme.spacing(),
  },
  label: {
    alignSelf: 'center',
    marginLeft: theme.spacing(),
  },
  sensorImage: {
    width: '100%',
    maxWidth: '100%',
    maxHeight: '300px',
    margin: 'auto',
    marginBottom: theme.spacing(2),
  },
});

export default withStyles(styles)(SensorView);

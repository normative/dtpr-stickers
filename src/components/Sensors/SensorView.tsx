import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';

import { Typography, Divider } from 'libs/mui';

import { Option, PlaceData, SensorData } from 'common/types';
import { sensorsGroupLabels } from 'common/constants';

import FeedbackFooter from '../FeedbackFooter';
import Accordian from './Accordian';
import Badge from './Badge';

interface SensorsGroup {
  sensorGroup: string;
  label: string;
  options: Option[];
}
interface Props {
  place: PlaceData;
  sensor: SensorData;
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
  const accountableOption = sensor.accountable ? {
    name: sensor.accountable,
    iconShortname: 'accountable/org',
    description: sensor.accountableDescription,
  } : null;

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        {sensor.headline && (
          <Typography
            variant="h6"
            align="center"
            style={{ wordBreak: 'break-word', fontWeight: 'bold' }}
          >
            {sensor.headline}
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
        {sensor.sensorImageSrc && (
          <img
            className={classes.sensorImage}
            src={sensor.sensorImageSrc}
            alt="sensor icon"
          />
        )}
        {sensor.description && <Typography paragraph>{sensor.description}</Typography>}
      </div>
      <div>
        {/* On top accountability sensor info */}
        {accountableOption?.description && (
        <Accordian
          icon="/images/accountable/org.svg"
          title={accountableOption.name}
          label={sensorsGroupLabels.ACCOUNTABILITY}
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
        placeName={place?.name}
        technology={sensor.name}
        email={sensor.email || 'dtpr-hello@sidewalklabs.com'}
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
  header: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  content: {
    padding: theme.spacing(2),
  },
  summaryWrapper: {
    display: 'flex',
    padding: theme.spacing(2),
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

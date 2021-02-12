import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';

import { Typography, Divider } from 'libs/mui';

import {
  PlaceData, SensorData, SensorsGroup,
} from 'common/types';

import FeedbackFooter from '../FeedbackFooter';
import SensorBadge from './SensorBadge';
import SensorDetails from './SensorDetails';
import SensorTaxonomy from './SensorTaxonomy';
import SensorTabs from './SensorTabs';

interface Props {
  place: PlaceData;
  sensor: SensorData;
  sensorsGroup: SensorsGroup[];
  techType: SensorsGroup;
  purpose: SensorsGroup;
  classes: any;
  systems: string[];
}

function SensorView({
  classes,
  place,
  sensor,
  sensorsGroup,
  techType,
  purpose,
  systems,
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
        <SensorBadge option={purpose?.options[0]} />
        <SensorBadge option={techType?.options[0]} />
        <SensorBadge option={accountableOption} />
      </div>
      <Divider variant="fullWidth" />
      <SensorTabs tabs={['DETAILS', 'FAQ']}>
        <div>
          <SensorDetails description={sensor.description} systems={systems} />
          <SensorTaxonomy accountable={accountableOption} sensorsGroup={sensorsGroup} />
          <FeedbackFooter
            placeName={place?.name}
            technology={sensor.name}
            email={sensor.email || 'dtpr-hello@sidewalklabs.com'}
          />
        </div>
        <div>
          FAQ
        </div>
      </SensorTabs>
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

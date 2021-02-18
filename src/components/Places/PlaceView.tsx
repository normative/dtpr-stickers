import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';

import {
  Typography, Link, PlaceIcon, Divider,
} from 'libs/mui';
import { PlaceData, SensorByTaxonomyProp } from 'common/types';
import SensorTabs from 'components/Sensors/SensorTabs';
import PlaceSensors from './PlaceSensors';

interface Props {
  place: PlaceData;
  classes: any;
  sensors: {
    [name: string]: SensorByTaxonomyProp[];
  };
}

const GOOGLE_MAPS_SEARCH = 'https://www.google.com/maps/search/?api=1';

function PlaceView({ classes, place, sensors }: Props) {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.name}>
          {place.name}
        </Typography>
        <Link href={`${GOOGLE_MAPS_SEARCH}&query=${place.address}`} target="_blank" className={classes.addressLink}>
          <PlaceIcon fontSize="small" />
          <Typography className={classes.address}>
            {place.address}
          </Typography>
        </Link>
      </div>
      <Divider variant="fullWidth" />
      <SensorTabs tabs={['TECHNOLOGIES']}>
        <div className={classes.technologies}>
          <PlaceSensors sensors={sensors} />
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
  name: {
    fontSize: '20px',
    fontWeight: 500,
  },
  addressLink: {
    alignItems: 'center',
    color: '#666666',
    display: 'flex',
    fontSize: '0.75rem',
    justifyContent: 'center',
    width: '100%',
  },
  address: {
    fontSize: '0.75rem',
    textDecoration: 'underline',
  },
  technologies: {
    marginTop: theme.spacing(1.5),
    padding: theme.spacing(2),
  },
});

export default withStyles(styles)(PlaceView);

import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';

import {
  Typography, Link, PlaceIcon, Divider,
} from 'libs/mui';
import { PlaceData } from 'common/types';
import SensorTabs from 'components/Sensors/SensorTabs';

interface Props {
  place: PlaceData;
  classes: any;
}

const GOOGLE_MAPS_SEARCH = 'https://www.google.com/maps/search/?api=1';

function PlaceView({ classes, place }: Props) {
  return (
    <div className={classes.root}>
      <div className={classes.title} />
      <div className={classes.card} />
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

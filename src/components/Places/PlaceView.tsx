/* eslint-disable react/no-array-index-key */
import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';

import {
  Typography, Link, PlaceIcon, Divider, SortIcon, IconButton,
} from 'libs/mui';
import { PlaceData, SensorData, TaxonomyPropValuesGroups } from 'common/types';
import SensorTabs from 'components/Sensors/SensorTabs';
import TaxonomySensors from './TaxonomySensors';

interface Props {
  place: PlaceData;
  classes: any;
  taxonomySensors: TaxonomyPropValuesGroups;
  taxonomySensorsSortedIds: string[];
  otherSensors: SensorData[];
  onSortClick: () => void;
}

const GOOGLE_MAPS_SEARCH = 'https://www.google.com/maps/search/?api=1';

function PlaceView({
  classes,
  place,
  taxonomySensors,
  taxonomySensorsSortedIds,
  otherSensors,
  onSortClick,
}: Props) {
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
          <IconButton className={classes.sort} onClick={onSortClick}>
            <Typography className={classes.sortText}>
              SORT BY
            </Typography>
            {' '}
            <SortIcon fontSize="small" />
          </IconButton>
          {
            taxonomySensorsSortedIds.map((value, i) => (
              <TaxonomySensors
                key={`${value}-${i}`}
                taxonomyPropValue={value}
                sensors={taxonomySensors[value]}
              />
            ))
          }
          { !!otherSensors?.length && <TaxonomySensors key="others" taxonomyPropValue="Others" sensors={otherSensors} /> }
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
    position: 'relative',
  },
  sort: {
    alignItems: 'center',
    color: '#828282',
    display: 'flex',
    padding: theme.spacing(2),
    position: 'absolute',
    right: 0,
    top: 0,
    '&:hover': {
      backgroundColor: 'inherit',
    },
  },
  sortText: {
    color: '#828282',
    fontWeight: 600,
    fontSize: '0.75rem',
    letterSpacing: '0.25px',
  },
});

export default withStyles(styles)(PlaceView);

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
  sortLabel: string;
}

const GOOGLE_MAPS_SEARCH = 'https://www.google.com/maps/search/?api=1';

function PlaceView({
  classes,
  place,
  taxonomySensors,
  taxonomySensorsSortedIds,
  otherSensors,
  onSortClick,
  sortLabel,
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
              {' '}
              {sortLabel}
            </Typography>
            <SortIcon fontSize="small" />
          </IconButton>
          <div className={classes.taxonomy}>
            {
              taxonomySensorsSortedIds.map((value, i) => (
                <TaxonomySensors
                  key={`${value}-${i}`}
                  taxonomyPropValue={value}
                  sensors={taxonomySensors[value]}
                />
              ))
            }
            { !!otherSensors?.length && <TaxonomySensors key="others" taxonomyPropValue="Other" sensors={otherSensors} /> }
          </div>
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
    fontWeight: 700,
    color: theme.custom.header,
    ...theme.custom.fonts.primary.l,
  },
  addressLink: {
    alignItems: 'center',
    color: theme.custom.place.address,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  address: {
    textDecoration: 'underline',
    ...theme.custom.fonts.secondary.xs,
  },
  technologies: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    position: 'relative',
  },
  taxonomy: {
    paddingTop: theme.spacing(),
  },
  sort: {
    alignItems: 'center',
    color: theme.custom.place.sort.button,
    display: 'flex',
    padding: theme.spacing(2),
    position: 'absolute',
    right: 0,
    top: 0,
    paddingTop: 0,
    '&:hover': {
      backgroundColor: 'inherit',
    },
  },
  sortText: {
    ...theme.custom.fonts.primary.xs,
    color: theme.custom.place.sort.button,
    fontWeight: 600,
    letterSpacing: '0.25px',
    textTransform: 'uppercase',

    marginRight: theme.spacing(0.5),
  },
});

export default withStyles(styles)(PlaceView);

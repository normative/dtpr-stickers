import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';

import {
  Card, LinearProgress, Typography, Grid, CardActionArea, CardContent,
} from 'libs/mui';
import { PlaceStateType } from 'reducers/place';
import { SensorsStateType } from 'reducers/sensors';
import { AirtableStateType } from 'reducers/airtable';
import { Link } from 'react-router-dom';
import StaticMap from '../StaticMap';

interface Props {
  place: PlaceStateType;
  sensors: SensorsStateType;
  airtable: AirtableStateType;
  classes: any;
}

function PlaceView({
  classes, place, sensors, airtable,
}: Props) {
  const isLoading = place.isFetching || sensors.isFetching || airtable.isFetching;

  if (isLoading) return <LinearProgress color="secondary" />;
  if (!place.data) return <Typography>Hmm can`t find that place :/</Typography>;

  const { name: placeName, lngLat = {}, address = '' } = place.data;
  const markerLocation = lngLat
    ? (Object.values(lngLat).reverse() as [number, number])
    : undefined;

  return (
    <div className={classes.root}>
      <div className={classes.headerRow}>
        <Typography className={classes.title}>
          {placeName}
        </Typography>
        <Typography className={classes.subtitle}>
          {address}
        </Typography>
      </div>
      {markerLocation && (
        <div className={classes.staticMap}>
          <StaticMap
            markerLocation={markerLocation}
            center={markerLocation}
          />
        </div>
      )}
      {sensors.data && (
      <Grid container spacing={8}>
        {Object.keys(sensors.data).map((id) => {
          const sensor = sensors.data[id];
          const { name, purpose } = sensor;
          const featuredPurpose = purpose && purpose.length ? purpose[0] : undefined;
          let icon: string | null = null;
          if (featuredPurpose && airtable.data) {
            const config = airtable.data.purpose.find(
              (option) => option.name === featuredPurpose,
            );
            if (config) icon = `/images/${config.iconShortname}.svg`;
          }
          return (
            <Grid key={id} item xs={4} sm={3}>
              <Card className={classes.card} elevation={0}>
                <Link to={`/sensors/${id}`} style={{ textDecoration: 'none' }}>
                  <CardActionArea>
                    <CardContent className={classes.cardContent}>
                      {icon && (
                      <img className={classes.cardIcon} src={icon} alt="sensor img" />
                      )}
                      <Typography
                        className={classes.cardIconText}
                        align="center"
                      >
                        {name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      )}
    </div>
  );
}

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    margin: 'auto',
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.breakpoints.values.md,
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  },
  headerRow: {
    margin: '8px -16px 16px -16px',
    padding: '0 16px 16px 16px',
    borderBottom: '0.5px solid rgba(0,0,0,0.15)',
  },
  adminBar: {
    top: 'auto',
    bottom: 0,
  },
  addSensorButton: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translate(-50%, -30%)',
  },
  addIcon: {
    marginRight: theme.spacing(),
  },
  staticMap: {
    marginBottom: theme.spacing(2),
    width: '100%',
    height: '100px',
    [theme.breakpoints.up('md')]: {
      height: '300px',
    },
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bolder',
  },
  subtitle: {
    fontSize: '14px',
    color: 'rgba(0,0,0,.6)',
    fontWeight: 500,
  },
  tabBar: {
    margin: '0 -16px',
    borderBottom: '0.5px solid rgba(0,0,0,0.15)',
  },
  singleTab: {
    textTransform: 'none',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  cardIcon: {
    marginBottom: theme.spacing(),
    width: '56px',
    height: '56px',
    opacity: 0.7,
  },
  cardIconText: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 500,
  },
});

export default withStyles(styles)(PlaceView);

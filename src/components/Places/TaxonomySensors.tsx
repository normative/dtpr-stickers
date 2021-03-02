import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import { Box, Divider, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { SensorData, SensorDetailsWithTaxonomyPropValue } from 'common/types';

interface Props {
  classes: any;
  sensors: Array<SensorDetailsWithTaxonomyPropValue | SensorData>;
  taxonomyPropValue: string;
}

const CardDivider = withStyles((theme: Theme) => createStyles({
  root: {
    backgroundColor: 'transparent',
    border: `1px dashed ${theme.custom.link}`,
    width: '100px',
  },
}))(Divider);

function Sensors({ classes, sensors, taxonomyPropValue }: Props) {
  return (
    <div className={classes.root}>
      <Typography className={classes.taxonomyPropValue}>
        {taxonomyPropValue}
      </Typography>
      {sensors.map(({ id, description, name }) => (
        <Box className={classes.card} key={`${id}-${name}`}>
          <Link to={`/sensors/${id}`} style={{ textDecoration: 'none' }}>
            <Typography className={classes.sensorName}>{name.toUpperCase()}</Typography>
          </Link>
          <CardDivider />
          <Typography className={classes.sensorDescription}>
            {description}
          </Typography>
        </Box>
      ))}
    </div>
  );
}

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.breakpoints.values.md,
    },
  },
  taxonomyPropValue: {
    color: theme.custom.place.taxonomy.title,
    fontWeight: 600,
    marginBottom: theme.spacing(1.5),
    ...theme.custom.fonts.primary.m,
  },
  card: {
    border: `1px solid ${theme.custom.place.taxonomy.border}`,
    borderRadius: '4px',
    marginBottom: theme.spacing(1.5),
    padding: theme.spacing(1.5),
  },
  sensorName: {
    color: theme.custom.link,
    marginBottom: theme.spacing(1.5),
    ...theme.custom.fonts.primary.s,
  },
  sensorDescription: {
    color: theme.custom.place.taxonomy.description,
    marginTop: theme.spacing(1.5),
    ...theme.custom.fonts.secondary.m,
  },
});

export default withStyles(styles)(Sensors);

import React from 'react';
import {
  createStyles, Theme, withStyles,
} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { System } from 'common/types';

interface Props {
  description?: string;
  systems?: System[];
  classes: any;
}

function SensorDetails({ description, systems, classes }: Props) {
  if (!description && !systems?.length) return <></>;

  return (
    <div className={classes.root}>
      {!!description && (
        <div>
          <Typography className={classes.text}>
            <strong>Purpose:</strong>
            {' '}
            {description}
          </Typography>
        </div>
      )}
      {!!systems?.length && (
        <div>
          <Typography className={classes.text}>
            <strong>This sensor is part of the following systems:</strong>
          </Typography>
          {systems.map(({ title, description: systemDescription }) => (
            <div className={classes.system} key={title}>
              <Typography color="secondary" className={classes.text}>
                <strong>{title}</strong>
              </Typography>
              <Typography className={classes.systemDescription}>
                {systemDescription}
              </Typography>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

SensorDetails.defaultProps = {
  description: '',
  systems: undefined,
};

const styles = (theme: Theme) => createStyles({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'grid',
    rowGap: theme.spacing(2),
    padding: theme.spacing(2),
  },
  system: {
    marginTop: theme.spacing(),
    paddingLeft: theme.spacing(),
  },
  systemDescription: {
    paddingLeft: theme.spacing(),
    ...theme.custom.fonts.secondary.m,
  },
  text: {
    ...theme.custom.fonts.secondary.m,
  },
});

export default withStyles(styles)(SensorDetails);

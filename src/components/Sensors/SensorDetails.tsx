import React from 'react';
import {
  createStyles, Theme, withStyles,
} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

interface Props {
  description?: string;
  systems?: string[];
  classes: any;
}

function SensorDetails({ description, systems, classes }: Props) {
  if (!description && !systems?.length) <></>;

  return (
    <div className={classes.root}>
      {description && (
        <div>
          <Typography className={classes.label}>
            <strong>Purpose:</strong>
            {' '}
            {description}
          </Typography>
        </div>
      )}
      {systems?.length && (
        <div>
          <Typography>
            <strong>This sensor is part of the following systems:</strong>
          </Typography>
          <Typography>
            {systems.join(', ')}
          </Typography>
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
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
});

export default withStyles(styles)(SensorDetails);

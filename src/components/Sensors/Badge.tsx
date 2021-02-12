import { Option } from 'common/types';
import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

interface Props {
  option: Option | undefined;
  classes: any;
}

function Badge({ option, classes }: Props) {
  if (!option) return <></>;

  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src={`/images/${option.iconShortname}.svg`}
        alt="purpose badge icon"
      />
      <Typography variant="subtitle2">
        {option.name}
      </Typography>
    </div>
  );
}

const styles = (theme: Theme) => createStyles({
  root: {
    flex: 1,
    textAlign: 'center',
  },
  image: {
    height: '48px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(),
  },
});

export default withStyles(styles)(Badge);

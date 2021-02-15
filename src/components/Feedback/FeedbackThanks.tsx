import React from 'react';
import {
  createStyles,
  withStyles,
} from '@material-ui/core/styles';

import { Typography } from 'libs/mui';

interface Props {
  classes: any;
}

function FeedbackComment({ classes }: Props) {
  return (
    <div className={classes.container}>
      <Typography className={classes.text}>
        Thank you very much for your feedback!
      </Typography>
    </div>
  );
}

const styles = () => createStyles({
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '50px',
    width: '100%',
  },
  text: {
    fontSize: '32px',
    fontWeight: 700,
    letterSpacing: '0.25px',
    textAlign: 'center',
  },
});

export default withStyles(styles)(FeedbackComment);

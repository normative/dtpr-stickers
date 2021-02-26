/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  createStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';

import { Typography } from 'libs/mui';

interface Props {
  classes: any;
}

function FeedbackThanks({ classes }: Props) {
  return (
    <div className={classes.container}>
      <Typography className={classes.text}>
        Thank you for taking the time to complete the survey, we appreciate your feedback.
      </Typography>
      <Typography className={classes.text}>
        <strong>Have more time?</strong>
      </Typography>
      <Typography className={classes.text}>
        We want to hear more from you!
        {' '}
        <a href={process.env.REACT_APP_EXPANDED_SURVEY || '#'} className={classes.link}>complete this extended survey</a>
        {' '}
        and receive a gift card!
      </Typography>
    </div>
  );
}

const styles = (theme: Theme) => createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(1),
    minHeight: '100px',
    width: '100%',
  },
  text: {
    marginTop: theme.spacing(1),
    color: theme.custom.palette.paragraph.light,
    ...theme.custom.fonts.secondary.m,
  },
  link: {
    color: theme.custom.elements.link,
  },
});

export default withStyles(styles)(FeedbackThanks);

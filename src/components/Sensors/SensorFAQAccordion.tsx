import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  ExpandMoreIcon,
} from 'libs/mui';

interface Props {
  title: string;
  children: string;
  classes: any;
}

function SensorFAQAccordion({ classes, title, children }: Props) {
  return (
    <MuiAccordion className={classes.root}>
      <AccordionSummary
        className={classes.summaryRoot}
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography className={classes.summaryText}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.detailsRoot}>
        <Typography className={classes.detailsText}>
          {children}
        </Typography>
      </AccordionDetails>
    </MuiAccordion>
  );
}

const styles = (theme: Theme) => createStyles({
  root: {
    border: 'none',
    boxShadow: 'none',
    padding: theme.spacing(),
    paddingBottom: theme.spacing(2),
    '&:before': {
      content: 'none',
    },
  },
  summaryRoot: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  summaryText: {
    fontWeight: 500,
    color: theme.custom.sensor.faq.question,
    ...theme.custom.fonts.secondary.m,
  },
  detailsRoot: {
    padding: 0,
  },
  detailsText: {
    color: theme.custom.sensor.faq.response,
    ...theme.custom.fonts.secondary.s,
  },
});

export default withStyles(styles)(SensorFAQAccordion);

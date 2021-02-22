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

function Accordion({ classes, title, children }: Props) {
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
    fontSize: theme.custom.sessions.sensor.faq.fontSize,
    fontWeight: theme.custom.sessions.sensor.faq.fontWeight,
    textTransform: theme.custom.sessions.sensor.faq.textTransform,
  },
  detailsRoot: {
    padding: 0,
    fontSize: theme.custom.sessions.sensor.faq.fontSize,
  },
  detailsText: {
    fontSize: '0.875rem',
  },
});

export default withStyles(styles)(Accordion);

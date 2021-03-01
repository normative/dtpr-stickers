/* eslint-disable */
import React, { Component } from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import showdown from 'showdown';
import ReactGA from 'react-ga';
import { showPlaceholderOnImgError } from 'common/helpers';
import { Accordion, Typography, ExpandMoreIcon, AccordionSummary, AccordionDetails } from 'libs/mui';


const paragraphTagFilter = {
  type: 'output',
  filter(text: string) {
    const re = /<\/?p[^>]*>/gi;
    return text.replace(re, '');
  },
};

// @ts-ignore
const markdownConverter = new showdown.Converter({
  simplifiedAutoLink: true,
  simpleLineBreaks: true,
  openLinksInNewWindow: true,
  emoji: true,
  extensions: [paragraphTagFilter],
});

const styles = (theme: Theme) => createStyles({
  expansionPanelRoot: {
    backgroundImage: 'url(/images/chain/middle.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '16px 0',
    boxShadow: 'none',
    '&:first-of-type': {
      backgroundImage: 'url(/images/chain/top.svg)',
    },
    '&:last-of-type': {
      backgroundImage: 'url(/images/chain/bottom.svg)',
    },
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&.Mui-expanded': {
      margin: 0,
    },
  },
  expansionPanelExpanded: {
    margin: 0,
  },
  expansionPanelSummaryRoot: {
    margin: 0,
    minHeight: '56px',
    padding: '0 16px 0 16px',
    '&$expansionPanelSummaryExpanded': {
      margin: 0,
      minHeight: '56px',
    },
  },
  expansionPanelSummaryContent: {
    margin: 0,
    '&>:last-child': {
      paddingRight: 0,
    },
    '&$expansionPanelSummaryExpanded': {
      margin: 0,
    },
  },
  expansionPanelSummaryExpanded: {
    // class used for expanded key
    // needed for nested reference
  },
  expansionPanelDetailsRoot: {
    borderLeft: '2px dashed #000',
    marginLeft: theme.spacing(4.125),
    paddingLeft: theme.spacing(3),
    paddingTop: 0,
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    '& a': {
      color: theme.custom.link,
    }
  },
  heading: {
    flex: 1,
    alignSelf: 'center',
    marginLeft: theme.spacing(),
    color: theme.custom.sensor.taxonomy.value,
    ...theme.custom.fonts.secondary.m,
  },
  label: {
    alignSelf: 'center',
    marginLeft: theme.spacing(),
    marginRight: '32px',
    color: theme.custom.sensor.taxonomy.prop,
    textAlign: 'end',
    ...theme.custom.fonts.secondary.m,
  },
  paragraph: {
    color: theme.custom.sensor.taxonomy.details,
    ...theme.custom.fonts.secondary.m,
  }
});

interface Props {
  readonly classes: any;
  icon?: string;
  title: string;
  label: string;
  body: string;
  name: string;
  placeholder?: string;
}

class SensorAccordion extends Component<Props, any> {
  render() {
    const {
      classes, icon, title, label, body, name, placeholder,
    } = this.props;
    const parsedBody = markdownConverter.makeHtml(body);

    return (
      <Accordion
        classes={{
          root: classes.expansionPanelRoot,
          expanded: classes.expansionPanelExpanded,
        }}
        onChange={(event, expanded) => {
          ReactGA.event({
            category: 'User',
            action: `Tapped Accordion of ${name}: ${title} - ${label}`,
          });
        }}
      >
        <AccordionSummary
          classes={{
            root: classes.expansionPanelSummaryRoot,
            content: classes.expansionPanelSummaryContent,
            expanded: classes.expansionPanelSummaryExpanded,
          }}
          expandIcon={<ExpandMoreIcon />}
        >
          {icon && <img src={icon} onError={showPlaceholderOnImgError(placeholder)} />}
          <Typography className={classes.heading}>{title}</Typography>
          <Typography className={classes.label}>
            {label}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          classes={{ root: classes.expansionPanelDetailsRoot }}
        >
          <Typography dangerouslySetInnerHTML={{ __html: parsedBody }} className={classes.paragraph} />
        </AccordionDetails>
      </Accordion>
    );
  }
}

export default withStyles(styles)(SensorAccordion);

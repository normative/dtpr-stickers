/* eslint-disable react/no-array-index-key */
import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';

import { Typography, Divider } from 'libs/mui';

import {
  FAQ,
  FeedbackQuestion,
  PlaceData, SensorData, SensorsGroup, System,
} from 'common/types';

import Accordion from 'components/Accordion';

import { PLACEHOLDERS } from 'common/constants';
import SensorFeedback from './SensorFeedback';
import SensorBadge from './SensorBadge';
import SensorDetails from './SensorDetails';
import SensorTaxonomy from './SensorTaxonomy';
import SensorTabs from './SensorTabs';
import SensorPlace from './SensorPlace';

interface Props {
  place: PlaceData;
  sensor: SensorData;
  sensorsGroup: SensorsGroup[];
  techType: SensorsGroup;
  purpose: SensorsGroup;
  classes: any;
  systems: System[];
  faq: FAQ[];
  onResponse: (answer: string) => void;
  question: FeedbackQuestion;
  progressText: string;
  progressValue: number;
}

function SensorView({
  classes,
  place,
  sensor,
  sensorsGroup,
  techType,
  purpose,
  systems,
  faq,
  onResponse,
  question: feedbackQuestion,
  progressText,
  progressValue,
}: Props) {
  const accountableOption = sensor.accountable ? {
    name: sensor.accountable,
    iconShortname: 'accountable/org',
    description: sensor.accountableDescription,
  } : null;

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        {!!sensor.headline && (
          <Typography
            variant="h6"
            align="center"
            className={classes.headerText}
          >
            {sensor.headline}
          </Typography>
        )}
      </div>
      <Divider variant="fullWidth" />
      <div className={classes.summaryWrapper}>
        <SensorBadge option={purpose?.options[0]} placeholder={`/images/${PLACEHOLDERS.purpose}.svg`} />
        <SensorBadge option={techType?.options[0]} placeholder={`/images/${PLACEHOLDERS.techType}.svg`} />
        <SensorBadge
          option={{
            ...accountableOption,
            iconShortname: sensor.logoSrc || sensor.logoRef,
          }}
          imgSrc={sensor.logoSrc || sensor.logoRef}
          placeholder="/images/accountable/org.svg"
        />
      </div>
      <Divider variant="fullWidth" />
      <SensorTabs tabs={['DETAILS', 'FAQ']}>
        <div className={classes.details}>
          <SensorDetails description={sensor.description} systems={systems} />
          <SensorTaxonomy
            sensorName={sensor.name}
            accountable={accountableOption}
            sensorsGroup={sensorsGroup}
          />
          <SensorFeedback
            onClick={onResponse}
            question={feedbackQuestion}
            progressText={progressText}
            progressValue={progressValue}
          />
          <SensorPlace place={place} />
        </div>
        <div className={classes.faq}>
          {faq?.length ? faq.map(({ question, response }, i) => (
            <Accordion key={`question-${i}`} title={question}>
              {response}
            </Accordion>
          )) : (
            <Typography>
              We&#8217;re currently gathering feedback from users and
              {' '}
              answers to commonly asked questions will be posted here.
              {' '}
              We want to hear from you! Please complete the 5 questions
              {' '}
              in the &#8216;feedback section&#8217;
              {' '}
              that appears at the bottom of Details tab. Thank you.
            </Typography>
          )}
        </div>
      </SensorTabs>
    </div>
  );
}

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    margin: 'auto',
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.breakpoints.values.md,
    },
  },
  header: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  headerText: {
    wordBreak: 'break-word',
    fontWeight: 'bold',
    color: theme.custom.header,
    ...theme.custom.fonts.primary.l,
  },
  headerText: {
    wordBreak: 'break-word',
    fontWeight: 'bold',
    color: theme.custom.header,
    ...theme.custom.fonts.primary.l,
  },
  summaryWrapper: {
    display: 'flex',
    padding: theme.spacing(2),
  },
  sensorImage: {
    width: '100%',
    maxWidth: '100%',
    maxHeight: '300px',
    margin: 'auto',
    marginBottom: theme.spacing(2),
  },
  details: {
    paddingTop: theme.spacing(1),
  },
  faq: {
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(),
    paddingRight: theme.spacing(),
  },
});

export default withStyles(styles)(SensorView);

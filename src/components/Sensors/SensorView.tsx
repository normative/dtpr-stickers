import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import {
  Typography, Divider, Button, LinearProgress, Toolbar, ArrowBackIcon,
} from 'libs/mui';
import { Option } from 'common/types';

import { PlaceStateType } from 'reducers/place';
import { SensorStateType } from 'reducers/sensor';
import { AirtableStateType } from 'reducers/airtable';

import { Link } from 'react-router-dom';
import { getPlacePath } from 'common/helpers';
import FeedbackFooter from '../FeedbackFooter';
import Accordian from './Accordian';

interface Props {
  place: PlaceStateType;
  sensor: SensorStateType;
  airtable: AirtableStateType;
  classes: any;
}

function SensorView({
  classes, airtable, place, sensor,
}: Props) {
  const isLoading = sensor.isFetching || airtable.isFetching;

  if (isLoading) return <LinearProgress color="secondary" />;
  if (!sensor.data) return <Typography>Hmm can`t find that sensor :/</Typography>;

  const {
    headline,
    description,
    accountable,
    accountableDescription,
    purpose,
    techType,
    dataType,
    dataProcess,
    access,
    storage,
    email,
    logoSrc,
    sensorImageSrc,
  } = sensor.data;

  let purposeBadgeOption: Option | undefined;
  let techTypeBadgeOption: Option | undefined;
  let accountableBadgeOption: Option | undefined;

  if (airtable.data) {
    purposeBadgeOption = (purpose
        && purpose[0]
        && airtable.data.purpose.find((option) => option.name === purpose[0]))
      || undefined;
    techTypeBadgeOption = (techType
        && techType[0]
        && airtable.data.techType.find((option) => option.name === techType[0]))
      || undefined;
    accountableBadgeOption = (accountable && airtable.data.accountable[0]) || undefined;
  }

  // const hasfooter = phone || chat || email || onsiteStaff;
  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolbar}>
        {place.data && (
          <Link
            to={getPlacePath(sensor.data.placeId)}
            style={{ textDecoration: 'none' }}
          >
            <Button
              className={classes.backButton}
              color="primary"
              variant="outlined"
              size="small"
            >
              <ArrowBackIcon className={classes.backButtonIcon} fontSize="small" />
              <div className={classes.backButtonText}>{place.data.name}</div>
            </Button>
          </Link>
        )}
      </Toolbar>
      <div className={classes.header}>
        {headline && (
          <Typography
            gutterBottom
            variant="h6"
            align="center"
            style={{ wordBreak: 'break-word', fontWeight: 'bold' }}
          >
            {headline}
          </Typography>
        )}
      </div>
      <Divider variant="fullWidth" />
      <div className={classes.summaryWrapper}>
        {purposeBadgeOption && (
          <div className={classes.summaryCell}>
            <img
              className={classes.summaryBadge}
              src={`/images/${purposeBadgeOption.iconShortname}.svg`}
              alt="purpose badge icon"
            />
            <Typography variant="subtitle2">
              {purposeBadgeOption.name}
            </Typography>
          </div>
        )}
        {techTypeBadgeOption && (
          <div className={classes.summaryCell}>
            <img
              className={classes.summaryBadge}
              src={`/images/${techTypeBadgeOption.iconShortname}.svg`}
              alt="tech badge icon"
            />
            <Typography variant="subtitle2">
              {techTypeBadgeOption.name}
            </Typography>
          </div>
        )}
        {accountableBadgeOption && (
          <div className={classes.summaryCell}>
            <img
              className={classes.summaryBadge}
              src={
                logoSrc
                || `/images/${accountableBadgeOption.iconShortname}.svg`
              }
              alt="accountable badge icon"
            />
            <Typography variant="subtitle2">{accountable}</Typography>
          </div>
        )}
      </div>
      <Divider variant="fullWidth" />
      <div className={classes.content}>
        {sensorImageSrc && (
          <img
            className={classes.sensorImage}
            src={sensorImageSrc}
            alt="sensor icon"
          />
        )}
        {description && <Typography paragraph>{description}</Typography>}
      </div>
      {airtable.data && (
        <div>
          {accountableBadgeOption && accountableDescription && (
            <Accordian
              icon={`/images/${accountableBadgeOption.iconShortname}.svg`}
              title={accountable}
              label="Accountability"
              body={accountableDescription}
            />
          )}
          {purpose
            && purpose.map((name) => {
              const option = airtable.data.purpose.find(
                (airtableOption) => airtableOption.name === name,
              );
              if (!option) return null;
              return (
                <Accordian
                  key={option.name}
                  icon={`/images/${option.iconShortname}.svg`}
                  title={option.name}
                  label="Purpose"
                  body={option.description}
                />
              );
            })}
          {techType
            && techType.map((name) => {
              const option = airtable.data.techType.find(
                (airtableOption) => airtableOption.name === name,
              );
              if (!option) return null;
              return (
                <Accordian
                  key={option.name}
                  icon={`/images/${option.iconShortname}.svg`}
                  title={option.name}
                  label="Technology Type"
                  body={option.description}
                />
              );
            })}
          {dataType
            && dataType.map((name) => {
              const option = airtable.data.dataType.find(
                (airtableOption) => airtableOption.name === name,
              );
              if (!option) return null;
              return (
                <Accordian
                  key={option.name}
                  icon={`/images/${option.iconShortname}.svg`}
                  title={option.name}
                  label="Data Type"
                  body={option.description}
                />
              );
            })}
          {dataProcess
            && dataProcess.map((name) => {
              const option = airtable.data.dataType.find(
                (airtableOption) => airtableOption.name === name,
              );
              if (!option) return null;
              return (
                <Accordian
                  key={option.name}
                  icon={`/images/${option.iconShortname}.svg`}
                  title={option.name}
                  label="Data Processing"
                  body={option.description}
                />
              );
            })}
          {access
            && access.map((name) => {
              const option = airtable.data.access.find(
                (airtableOption) => airtableOption.name === name,
              );
              if (!option) return null;
              return (
                <Accordian
                  key={option.name}
                  icon={`/images/${option.iconShortname}.svg`}
                  title={option.name}
                  label="Access"
                  body={option.description}
                />
              );
            })}
          {storage
            && storage.map((name) => {
              const option = airtable.data.storage.find(
                (airtableOption) => airtableOption.name === name,
              );
              if (!option) return null;
              return (
                <Accordian
                  key={option.name}
                  icon={`/images/${option.iconShortname}.svg`}
                  title={option.name}
                  label="Storage"
                  body={option.description}
                />
              );
            })}
        </div>
      )}
      <FeedbackFooter
        placeName={place.data ? place.data.name : 'Loading...'}
        technology={sensor.data.name}
        email={email || 'dtpr-hello@sidewalklabs.com'}
      />
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
  toolbar: {
    flexWrap: 'wrap',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'start',
    },
    borderBottom: '0.5px solid rgba(0,0,0,.2)',
    minHeight: '48px',
  },
  toolbarRight: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
  backButton: {
    borderRadius: '16px',
    fontWeight: 700,
    textTransform: 'none',
    flexShrink: 0,
    padding: '0 16px 0 8px',
    height: '32px',
  },
  backButtonIcon: {
    marginRight: theme.spacing(),
  },
  backButtonText: {
    marginBottom: '-2px',
  },
  header: {
    padding: theme.spacing(3),
    textAlign: 'center',
  },
  content: {
    padding: theme.spacing(2),
  },
  footer: {
    background: theme.palette.grey['200'],
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
  },
  summaryWrapper: {
    display: 'flex',
    padding: theme.spacing(2),
  },
  summaryCell: {
    flex: 1,
    textAlign: 'center',
  },
  summaryBadge: {
    height: '48px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(),
  },
  heading: {
    flex: 1,
    alignSelf: 'center',
    marginLeft: theme.spacing(),
  },
  label: {
    alignSelf: 'center',
    marginLeft: theme.spacing(),
  },
  sensorImage: {
    width: '100%',
    maxWidth: '100%',
    maxHeight: '300px',
    margin: 'auto',
    marginBottom: theme.spacing(2),
  },
});

export default withStyles(styles)(SensorView);

import React, { Component } from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import {
  Typography, Divider, Button, LinearProgress, Toolbar, ArrowBackIcon,
} from '../../libs/mui';

import Accordian from './Accordian';
import FeedbackFooter from '../FeedbackFooter';

import { AirtableData, getAirtableData, Option } from '../../libs/airtable';
import firebase from '../../libs/firebase';

import { PlaceData, SensorData } from '../../types';

interface State {
  sensorData?: SensorData;
  parentPlaceName?: string;
  isLoading: boolean;
  logoSrc?: string;
  sensorImageSrc?: string;
  airtableData?: AirtableData;
  isAdmin: boolean;
}

class SensorView extends Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      sensorData: undefined,
      isLoading: true,
      parentPlaceName: undefined,
      logoSrc: undefined,
      sensorImageSrc: undefined,
      airtableData: undefined,
      isAdmin: false,
    };
  }

  async componentDidMount() {
    const airtableData = await getAirtableData();
    this.setState({ airtableData });
    const { sensorId } = this.props.match.params;
    const sensorRef = firebase.database().ref(`sensors/${sensorId}`);
    sensorRef.on('value', (snapshot) => {
      if (snapshot) {
        const sensorData: SensorData | null = snapshot.val();
        if (!sensorData) {
          this.setState({ isLoading: false });
        } else {
          // Some of these fields may not exist for that object, so set a default val
          const {
            name = '',
            placeId = '',
            headline = '',
            description = '',
            accountable = '',
            accountableDescription = '',
            purpose = [],
            techType = [],
            dataType = [],
            dataProcess = [],
            access = [],
            storage = [],
            phone = '',
            chat = '',
            email = '',
            onsiteStaff = false,
            logoRef = '',
            sensorImageRef = '',
          } = sensorData;
          this.setState({
            sensorData: {
              name,
              placeId,
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
              phone,
              chat,
              email,
              onsiteStaff,
              logoRef,
              sensorImageRef,
            },
            isLoading: false,
          });

          if (sensorImageRef) {
            const storageRef = firebase.storage().ref();
            storageRef
              .child(sensorImageRef)
              .getDownloadURL()
              .then((sensorImageSrc) => {
                this.setState({ sensorImageSrc });
              })
              .catch((error) => {
                console.log(error);
              });
          }

          if (logoRef) {
            const storageRef = firebase.storage().ref();
            storageRef
              .child(logoRef)
              .getDownloadURL()
              .then((logoSrc) => {
                this.setState({ logoSrc });
              })
              .catch((error) => {
                console.log(error);
              });
          }

          if (placeId) {
            firebase
              .database()
              .ref(`places/${placeId}`)
              .once('value', (snapshot) => {
                if (snapshot) {
                  const place: PlaceData | null = snapshot.val();
                  if (place) {
                    this.setState({ parentPlaceName: place.name });
                    const user = firebase.auth().currentUser;
                    if (user) {
                      const { uid } = user;
                      const isAdmin = (uid && place.admins && place.admins[uid]) || false;
                      this.setState({ isAdmin });
                    }
                  }
                }
              });
          }
        }
      }
    });
  }

  render() {
    const { classes } = this.props;
    const {
      isLoading,
      isAdmin,
      parentPlaceName,
      sensorData,
      logoSrc,
      sensorImageSrc,
      airtableData,
    } = this.state;
    const { sensorId } = this.props.match.params;

    if (isLoading) return <LinearProgress color="secondary" />;
    if (!sensorData) { return <Typography>Hmm can't find that sensor :/</Typography>; }

    const {
      placeId,
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
    } = sensorData;

    let purposeBadgeOption: Option | undefined;
    let techTypeBadgeOption: Option | undefined;
    let accountableBadgeOption: Option | undefined;
    if (airtableData) {
      purposeBadgeOption = (purpose
          && purpose[0]
          && airtableData.purpose.find((option) => option.name === purpose[0]))
        || undefined;
      techTypeBadgeOption = (techType
          && techType[0]
          && airtableData.techType.find((option) => option.name === techType[0]))
        || undefined;
      accountableBadgeOption = (accountable && airtableData.accountable[0]) || undefined;
    }

    // const hasfooter = phone || chat || email || onsiteStaff;
    return (
      <div className={classes.root}>
        <Toolbar className={classes.toolbar}>
          {placeId && parentPlaceName && (
            <Button
              className={classes.backButton}
              href={`/places/${placeId}`}
              color="primary"
              variant="outlined"
              size="small"
            >
              <ArrowBackIcon className={classes.backButtonIcon} fontSize="small" />
              <div className={classes.backButtonText}>{parentPlaceName}</div>
            </Button>
          )}
          {isAdmin && (
            <div className={classes.toolbarRight}>
              <Button
                href={`/sensors/${sensorId}/print`}
                color="primary"
                size="small"
              >
                Try the Sticker Maker
              </Button>
              <Button
                href={`/sensors/${sensorId}/edit`}
                color="primary"
                variant="contained"
                size="small"
              >
                Edit
              </Button>
            </div>
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
        {airtableData && (
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
                const option = airtableData.purpose.find(
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
                const option = airtableData.techType.find(
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
                const option = airtableData.dataType.find(
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
                const option = airtableData.dataType.find(
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
                const option = airtableData.access.find(
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
                const option = airtableData.storage.find(
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
          placeName={this.state.parentPlaceName}
          technology={sensorData.name}
          email={email || 'dtpr-hello@sidewalklabs.com'}
        />
      </div>
    );
  }
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

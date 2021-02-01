import React, { Component } from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import { PlaceData } from '../Places'
import { SensorData } from '../Sensors';

import { AirtableData, getAirtableData } from '../../libs/airtable';
import firebase from '../../libs/firebase';
import { Card, LinearProgress, Typography, Grid, Tabs, Tab, CardActionArea, CardContent } from '../../libs/mui';
import StaticMap from '../StaticMap';

interface PlaceViewState {
  isLoading: boolean;
  place?: PlaceData;
  sensorDataList?: { [sensorId: string]: SensorData };
  airtableData?: AirtableData;
  displayForm: boolean;
  tabValue: number;
}

class PlaceView extends Component<any, PlaceViewState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isLoading: true,
      place: undefined,
      sensorDataList: undefined,
      airtableData: undefined,
      displayForm: false,
      tabValue: 0
    };
  }

  async componentDidMount() {
    const { placeId } = this.props.match.params;
    const placesRef = firebase.database().ref(`places/${placeId}`);

    placesRef.once("value", snapshot => {
      if (snapshot) {
        let place: PlaceData | null = snapshot.val() || {};

        if (place) {
          this.setState({
            place,
            isLoading: false
          });
        }

        if (place && place.sensors) {
          const sensorIds = Object.keys(place.sensors);
          const promises = sensorIds.map(sensorId =>
            firebase
              .database()
              .ref(`/sensors/${sensorId}`)
              .once("value")
          );

          let sensorDataList: { [sensorId: string]: SensorData } = {};
          Promise.all(promises).then(results => {
            results.forEach(result => {
              const id = result.key;
              const sensor: SensorData | null = result.val();
              if (id && sensor) {
                sensorDataList[id] = sensor;
              }
            });
            this.setState({
              sensorDataList
            });
          });
        }
      }
    });

    // load airtable data last so screen can render and it feels faster
    const airtableData = await getAirtableData();
    this.setState({ airtableData });
  }

  render() {
    const { classes } = this.props;
    const { isLoading, place, airtableData, sensorDataList } = this.state;

    if (isLoading) return <LinearProgress color="secondary" />;

    const { name, lngLat = {}, address = '' } = place;
    const markerLocation = lngLat
      ? (Object.values(lngLat).reverse() as [number, number])
      : undefined;

    return (
      <div className={classes.root}>
        <div className={classes.headerRow}>
          <Typography className={classes.title}>
            {name}
          </Typography>
          <Typography className={classes.subtitle}>
            {address}
          </Typography>
        </div>
        {markerLocation && (
          <div className={classes.staticMap}>
            <StaticMap
              markerLocation={markerLocation}
              center={markerLocation}
            />
          </div>
        )}
        {/* TODO: Add audio guides and links to events coming up */}
        <Tabs
          className={classes.tabBar}
          value={this.state.tabValue}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event: React.ChangeEvent<{}>, newValue: number) => {
            this.setState({ tabValue: newValue });
          }}
          variant="fullWidth"
        >
          <Tab label="Technologies" className={classes.singleTab} />
          <Tab label="Questions" className={classes.singleTab} disabled />
          <Tab label="Shortcuts" className={classes.singleTab} disabled />
        </Tabs>
        {sensorDataList && <Grid container spacing={8}>
          {Object.keys(sensorDataList).map(id => {
            const sensor = sensorDataList[id];
            const { name, purpose } = sensor;
            const featuredPurpose =
              purpose && purpose.length ? purpose[0] : undefined;
            let icon: string | null = null;
            if (featuredPurpose && airtableData) {
              const config = airtableData.purpose.find(
                option => option.name === featuredPurpose
              );
              if (config) icon = `/images/${config.iconShortname}.svg`;
            }
            return (
              <Grid key={id} item xs={4} sm={3}>
                <Card className={classes.card} elevation={0}>
                  <CardActionArea href={`/sensors/${id}`}>
                    <CardContent className={classes.cardContent}>
                      {icon && (
                        <img className={classes.cardIcon} src={icon} alt="sensor img" />
                      )}
                      <Typography
                        className={classes.cardIconText}
                        align="center"
                      >
                        {name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>}
      </div>
    );
  }
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: "auto",
      padding: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        maxWidth: theme.breakpoints.values.md,
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4)
      }
    },
    headerRow: {
      margin: "8px -16px 16px -16px",
      padding: "0 16px 16px 16px",
      borderBottom: "0.5px solid rgba(0,0,0,0.15)"
    },
    adminBar: {
      top: 'auto',
      bottom: 0,
    },
    addSensorButton: {
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translate(-50%, -30%)'
    },
    addIcon: {
      marginRight: theme.spacing(),
    },
    staticMap: {
      marginBottom: theme.spacing(2),
      width: '100%',
      height: '100px',
      [theme.breakpoints.up('md')]: {
        height: '300px'
      },
    },
    title: {
      fontSize: "20px",
      fontWeight: "bolder"
    },
    subtitle: {
      fontSize: "14px",
      color: "rgba(0,0,0,.6)",
      fontWeight: 500
    },
    tabBar: {
      margin: "0 -16px",
      borderBottom: "0.5px solid rgba(0,0,0,0.15)"
    },
    singleTab: {
      textTransform: "none"
    },
    cardContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(2)
    },
    cardIcon: {
      marginBottom: theme.spacing(),
      width: "56px",
      height: "56px",
      opacity: 0.7
    },
    cardIconText: {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: 500
    },
  });

export default withStyles(styles)(PlaceView);

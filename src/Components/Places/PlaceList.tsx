import React, { Component } from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import LinearProgress from '@material-ui/core/LinearProgress';

import { PlaceData } from '../Places'

import firebase from '../../libs/firebase';

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    margin: 'auto',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      maxWidth: 'calc(100% - 167px)',
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  },
  cardActionArea: {
    height: '200px',
  },
  addPlaceButton: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});


interface PlaceListState {
  isLoading: boolean;
  places: { [placeId: string]: PlaceData }
}

class PlaceList extends Component<any, PlaceListState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isLoading: true,
      places: {},
    };
  }

  componentDidMount() {
    const currentUser = firebase.auth().currentUser
    if (!currentUser) return null
    const { uid } = currentUser
    const placesRef = firebase.database().ref(`/users/${uid}/places`);
    placesRef.once('value', (snapshot) => {
      if (snapshot) {
        const places = snapshot.val() || {};
        const placeIds = Object.keys(places);
        const promises = placeIds.map(
          placeId => firebase.database().ref(`/places/${placeId}`).once('value')
        );

        let placeIdToPlaceData: { [placeId: string]: PlaceData } = {};
        Promise.all(promises).then(results => {
          results.forEach(result => {
            const id = result.key
            const place: PlaceData | null = result.val()
            if (id && place) {
              placeIdToPlaceData[id] = place
            }
          });
          this.setState({
            places: placeIdToPlaceData,
            isLoading: false,
          });
        });
      }
    });
  }

  render() {
    const { classes } = this.props
    const { isLoading, places } = this.state
    if (isLoading) return <LinearProgress color="secondary" />

    return (
      <div className={classes.root}>
        <Typography gutterBottom variant="h5" component="h2">My Places Dashboard</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.card}>
              <CardActionArea className={classes.cardActionArea} href="/places/new">
                <CardContent className={classes.addPlaceButton}>
                  <AddIcon fontSize='large' color='primary' />
                  <Typography color='primary' gutterBottom variant="subtitle2" component="h2">
                    Add a Place
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          {Object.keys(places).map((id: string) => {
            const place = places[id]
            const { name, sensors } = place
            const numSensors = sensors ? Object.keys(sensors).length : 0
            return (
              <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardActionArea className={classes.cardActionArea} href={`/places/${id}`}>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h2">
                        {name}
                      </Typography>
                      <Typography variant="subtitle2">
                        {numSensors}&nbsp;
                        {numSensors === 1 && `sensor`}
                        {numSensors !== 1 && `sensors`}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(PlaceList);

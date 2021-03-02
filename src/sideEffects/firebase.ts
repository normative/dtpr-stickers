import groupBy from 'lodash.groupby';
import sortBy from 'lodash.sortby';
import firebase from '../libs/firebase';
import { PlaceData, SensorData } from '../common/types';

const refs = {
  SENSORS: '/sensors',
  PLACES: '/places',
};

export function getPlace(placeId, onSuccess, onError) {
  try {
    const placesRef = firebase.database().ref(`${refs.PLACES}/${placeId}`);
    placesRef.once('value', (snapshot) => {
      const place = snapshot?.val();
      if (!place) {
        onError({
          code: 404,
          status: 'Not Found',
          message: 'Place not found',
        });
        return;
      }
      onSuccess({ ...place, id: placeId });
    });
  } catch (e) {
    onError(e);
  }
}

export async function getSensors(place: PlaceData, onSuccess, onError) {
  try {
    const sensorIds = Object.keys(place.sensors);
    const promises = sensorIds.map((sensorId) => firebase
      .database()
      .ref(`${refs.SENSORS}/${sensorId}`)
      .once('value'));

    const sensors: { [sensorId: string]: SensorData } = {};
    const results = await Promise.all(promises);

    results.forEach((result) => {
      const id = result.key;
      const sensor: SensorData | null = result.val();
      if (id && sensor) {
        sensors[id] = sensor;
      }
    });

    onSuccess(sensors);
  } catch (e) {
    onError(e);
  }
}

export function getSensor(
  sensorId: string, onSuccess: (param?: SensorData) => void, onError: (e: any) => void,
) {
  try {
    const sensorRef = firebase.database().ref(`sensors/${sensorId}`);
    sensorRef.on('value', async (snapshot) => {
      if (!snapshot) {
        onSuccess();
        return;
      }

      const sensor = snapshot.val();
      if (!sensor) {
        onError({
          code: 404,
          status: 'Not Found',
          message: 'Sensor not found',
        });
        return;
      }

      sensor.id = sensorId;
      sensor.datachain = groupBy(
        sortBy(sensor.datachain, ({ priority }) => priority),
        ({ category }) => category,
      );
      sensor.FAQ = sensor.faq || sensor.FAQ;
      onSuccess(sensor);
    });
  } catch (e) {
    onError(e);
  }
}

import groupBy from 'lodash.groupby';
import sortBy from 'lodash.sortby';
import firebase from '../libs/firebase';
import { PlaceData, SensorData, SensorSnapshot } from '../common/types';

const refs = {
  SENSORS: '/sensors',
  PLACES: '/places',
};

function transformSnapshotIntoSensorData(id: string, sensor: SensorSnapshot): SensorData {
  return {
    ...sensor,
    id,
    datachain: groupBy(
      sortBy(
        sensor.datachain,
        ({ priority }) => {
          const number = Number.parseInt(priority, 10);
          if (Number.isNaN(number)) return null;
          return number;
        },
      ),
      ({ category }) => category,
    ),
  };
}

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

export async function getSensors(
  place: PlaceData,
  onSuccess: (param: { [sensorId: string]: SensorData }) => void,
  onError: (e: any) => void,
) {
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
      const sensor: SensorSnapshot | null = result.val();
      if (id && sensor) {
        sensors[id] = transformSnapshotIntoSensorData(id, sensor);
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

      const sensor: SensorSnapshot | null = snapshot.val();
      if (!sensor) {
        onError({
          code: 404,
          status: 'Not Found',
          message: 'Sensor not found',
        });
        return;
      }

      const sensorData = transformSnapshotIntoSensorData(sensorId, sensor);
      onSuccess(sensorData);
    });
  } catch (e) {
    onError(e);
  }
}

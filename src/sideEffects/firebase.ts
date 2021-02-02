import firebase from '../libs/firebase';
import { PlaceData, SensorData } from '../types';

const refs = {
  SENSORS: '/sensors',
  PLACES: '/places',
};

export function getPlace(placeId, onSuccess, onError) {
  try {
    const placesRef = firebase.database().ref(`${refs.PLACES}/${placeId}`);
    placesRef.once('value', (snapshot) => {
      if (!snapshot) {
        onSuccess();
        return;
      }
      onSuccess(snapshot.val());
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

async function getDownloadURL(ref?: string) {
  if (!ref) return '';

  try {
    return firebase
      .storage()
      .ref()
      .child(ref)
      .getDownloadURL();
  } catch (e) {
    console.log(e);
    return e;
  }
}

export function getSensor(sensorId, onSuccess, onError) {
  try {
    const sensorRef = firebase.database().ref(`sensors/${sensorId}`);
    sensorRef.on('value', async (snapshot) => {
      if (!snapshot) {
        onSuccess();
        return;
      }

      const sensor: SensorData | null = snapshot.val();
      sensor.sensorImageSrc = await getDownloadURL(sensor.sensorImageRef);
      sensor.logoSrc = await getDownloadURL(sensor.logoRef);
      onSuccess(sensor);
    });
  } catch (e) {
    onError(e);
  }
}

import firebase from '../libs/firebase';
import { PlaceData, SensorData } from '../types';

export function getPlace(placeId, onSuccess, onError) {
  try {
    const placesRef = firebase.database().ref(`places/${placeId}`);
    placesRef.once("value", snapshot => {
      if (!snapshot) return onSuccess({});
      onSuccess(snapshot.val() || {});
    });
  } catch (e) {
    onError(e);
  }
}

export async function getSensors(place: PlaceData, onSuccess, onError) {
  try {
    const sensorIds = Object.keys(place.sensors);
    const promises = sensorIds.map(sensorId =>
      firebase
        .database()
        .ref(`/sensors/${sensorId}`)
        .once("value")
    );

    let sensors: { [sensorId: string]: SensorData } = {};
    const results = await Promise.all(promises);

    results.forEach(result => {
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

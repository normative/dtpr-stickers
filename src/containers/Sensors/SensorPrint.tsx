import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import sensorReducer, {
  sensorInitialState,
  fetchSensorRequested,
  fetchSensorSuccessed,
  fetchSensorFailed,
  SensorStateType,
} from 'reducers/sensor';
import { getSensor } from 'sideEffects/firebase';

import SensorPrintView from 'components/Sensors/SensorPrintView';
import useReducerState from 'hooks/useReducerState';
import { getPlacePath, getSensorPath } from 'common/helpers';
import exportStickerAssets from 'services/exporting';
import { TaxonomyDetails } from 'common/types';

function getPrintableTaxonomyProp(taxonomy: TaxonomyDetails) {
  if (!taxonomy || taxonomy.priority) return null;
  return taxonomy;
}

function SensorPrint() {
  const [sensor, sensorActions] = useReducerState(
    sensorReducer,
    sensorInitialState,
    fetchSensorRequested,
    fetchSensorSuccessed,
    fetchSensorFailed,
  );
  const { sensorId }: { sensorId: string } = useParams();
  const sensorUrl = `${window.location.origin}${getSensorPath(sensorId)}`;
  const placeUrl = `${window.location.origin}${getPlacePath(sensor?.data?.placeId)}`;

  useEffect(() => {
    sensorActions.onRequest();
    getSensor(sensorId, sensorActions.onSuccess, sensorActions.onError);
  }, [sensorId]);

  // Make printable badge for tech type and purpose with PRIORITY 0
  const priorityTechType = getPrintableTaxonomyProp(sensor.data?.datachain?.techType[0]);
  const priorityPurpose = getPrintableTaxonomyProp(sensor.data?.datachain?.purpose[0]);
  return (
    <SensorPrintView
      sensorUrl={sensorUrl}
      placeUrl={placeUrl}
      sensor={sensor as SensorStateType}
      onDownloadClick={() => { exportStickerAssets(); }}
      priorityTechType={priorityTechType}
      priorityPurpose={priorityPurpose}
    />
  );
}

export default SensorPrint;

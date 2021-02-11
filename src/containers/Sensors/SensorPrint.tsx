import React, {
  useContext,
  useEffect,
  useMemo,
} from 'react';
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
import { AirtableContext } from 'context/airtable';
import useReducerState from 'hooks/useReducerState';
import { AirtableStateType } from 'reducers/airtable';
import { getSensorPath } from 'common/helpers';
import exportStickerAssets from 'services/exporting';

function SensorPrint() {
  const [sensor, sensorActions] = useReducerState(
    sensorReducer,
    sensorInitialState,
    fetchSensorRequested,
    fetchSensorSuccessed,
    fetchSensorFailed,
  );
  const airtable = useContext(AirtableContext);
  const { sensorId }: { sensorId: string } = useParams();
  const sensorUrl = `${window.location.origin}${getSensorPath(sensorId)}`;

  useEffect(() => {
    sensorActions.onRequest();
    getSensor(sensorId, sensorActions.onSuccess, sensorActions.onError);
  }, [sensorId]);

  // Make a badge for anything identifiable or de-identified
  const dentifTechTypes = useMemo(() => ((sensor.data && sensor.data.techType)
    ? sensor.data.techType.filter((type: string) => type.includes('dentif'))
    : []), [sensor.data]);

  // Make a badge for only the first purpose
  const firstPurpose = sensor.data ? sensor.data.purpose[0] : undefined;

  return (
    <SensorPrintView
      sensorUrl={sensorUrl}
      airtable={airtable as AirtableStateType}
      sensor={sensor as SensorStateType}
      onDownloadClick={() => { exportStickerAssets(); }}
      dentifTechTypes={dentifTechTypes}
      firstPurpose={firstPurpose}
    />
  );
}

export default SensorPrint;

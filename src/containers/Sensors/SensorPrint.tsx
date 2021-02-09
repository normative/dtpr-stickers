import React, {
  useContext,
  useEffect,
  useMemo,
  useState,
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
import { getQRCodeSrc } from 'sideEffects/qrCode';
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
  const [sensorUrl, setSensorUrl] = useState('');
  const [qrCodeSrc, setQRCodeSrc] = useState('');
  const { sensorId }: { sensorId: string } = useParams();

  useEffect(() => {
    sensorActions.onRequest();
    getSensor(sensorId, sensorActions.onSuccess, sensorActions.onError);
  }, [sensorId]);

  useEffect(() => {
    const sUrl = `${window.location.origin}${getSensorPath(sensorId)}`;
    const qrCodeUrl = `${sUrl}?utm_source=307&utm_medium=qr&utm_campaign=qr_scan`;
    setSensorUrl(sUrl);
    getQRCodeSrc(qrCodeUrl, setQRCodeSrc, (e) => {
      // eslint-disable-next-line no-alert
      alert('Something went wrong to generate QR Code URL');
      // eslint-disable-next-line no-console
      console.error(e);
    });
  }, []);

  // Make a badge for anything identifiable or de-identified
  const dentifTechTypes = useMemo(() => ((sensor.data && sensor.data.techType)
    ? sensor.data.techType.filter((type: string) => type.includes('dentif'))
    : []), [sensor.data]);

  // Make a badge for only the first purpose
  const firstPurpose = sensor.data ? sensor.data.purpose[0] : undefined;

  return (
    <SensorPrintView
      sensorUrl={sensorUrl}
      qrCodeSrc={qrCodeSrc}
      airtable={airtable as AirtableStateType}
      sensor={sensor as SensorStateType}
      onDownloadClick={() => { exportStickerAssets(); }}
      dentifTechTypes={dentifTechTypes}
      firstPurpose={firstPurpose}
    />
  );
}

export default SensorPrint;

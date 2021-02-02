import React, {
  useCallback,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import QRCode from 'qrcode';
import airtableReducer, {
  fetchAirtableFailed, fetchAirtableRequested, fetchAirtableSuccessed, getAirtableDataInitialState,
} from 'reducers/airtable';
import sensorReducer, {
  sensorInitialState, fetchSensorRequested, fetchSensorSuccessed, fetchSensorFailed,
} from 'reducers/sensor';
import { getSensor } from 'sideEffects/firebase';
import { getAirtableData } from 'sideEffects/airtable';

import SensorPrintView from 'Components/Sensors/SensorPrintView';

function SensorPrint() {
  const [sensor, dispatchSensor] = useReducer(sensorReducer, sensorInitialState);
  const [airtable, dispatchAirtable] = useReducer(airtableReducer, getAirtableDataInitialState());
  const [sensorUrl, setSensorUrl] = useState('');
  const [qrCodeSrc, setQRCodeSrc] = useState('');

  const { sensorId }: { sensorId: string } = useParams();

  const handleSensorOnSuccess = useCallback((sensorsData) => {
    dispatchSensor(fetchSensorSuccessed(sensorsData));
  }, []);

  const handleSensorOnError = useCallback((e) => {
    dispatchSensor(fetchSensorFailed(e));
  }, []);

  const handleAirtableOnSuccess = useCallback((airtableData) => {
    dispatchAirtable(fetchAirtableSuccessed(airtableData));
  }, []);

  const handleAirtableOnError = useCallback((e) => {
    dispatchAirtable(fetchAirtableFailed(e));
  }, []);

  useEffect(() => {
    dispatchAirtable(fetchAirtableRequested());
    getAirtableData(handleAirtableOnSuccess, handleAirtableOnError);
  }, []);

  useEffect(() => {
    if (!airtable.loadedFromSession) {
      sessionStorage.setItem('airtabledata', JSON.stringify(airtable.data));
    }
  }, [airtable.data]);

  useEffect(() => {
    dispatchSensor(fetchSensorRequested());
    getSensor(sensorId, handleSensorOnSuccess, handleSensorOnError);
  }, [sensorId]);

  useEffect(() => {
    const sUrl = `${window.location.origin}/sensors/${sensorId}`;
    const qrUrl = `${sUrl}?utm_source=307&utm_medium=qr&utm_campaign=qr_scan`;
    setSensorUrl(sUrl);
    QRCode.toDataURL(qrUrl)
      .then((qrSrc) => {
        setQRCodeSrc(qrSrc);
      })
      .catch((e) => {
        // eslint-disable-next-line no-alert
        alert('Something went wrong to generate QR Code URL');
        // eslint-disable-next-line no-console
        console.error(e);
      });
  }, []);

  return (
    <SensorPrintView
      sensorUrl={sensorUrl}
      qrCodeSrc={qrCodeSrc}
      airtable={airtable}
      sensor={sensor}
    />
  );
}

export default SensorPrint;

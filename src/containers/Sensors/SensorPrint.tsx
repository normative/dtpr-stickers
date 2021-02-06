/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, {
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import JsZip from 'jszip';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import domToImage from 'dom-to-image';

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
import { imagesUrl } from 'common/constants';

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

  // Make a badge for anything identifiable or de-indentified
  const dentifTechTypes = useMemo(() => ((sensor.data && sensor.data.techType)
    ? sensor.data.techType.filter((type) => type.includes('dentif'))
    : []), [sensor.data]);

  // Make a badge for only the first purpose
  const firstPurpose = sensor.data ? sensor.data.purpose[0] : undefined;

  return (
    <SensorPrintView
      sensorUrl={sensorUrl}
      qrCodeSrc={qrCodeSrc}
      airtable={airtable as AirtableStateType}
      sensor={sensor as SensorStateType}
      onDownloadClick={(element) => {
        exportStickerAssets(airtable.data, dentifTechTypes, firstPurpose);
      }}
      dentifTechTypes={dentifTechTypes}
      firstPurpose={firstPurpose}
    />
  );
}

const download = (url: string) => fetch(url).then((resp) => resp.blob());

const getIconPath = (airtableData, airtableKey, badgeName) => {
  const config = airtableData[airtableKey].find((option) => option.name === badgeName);
  if (!config) {
    return null;
  }

  const { iconShortname } = config;

  if (airtableKey === 'purpose') {
    return iconShortname.replace(/\/(?=[^/]*$)/, '/ic_white/');
  }

  if (iconShortname.includes('yellow')) {
    return iconShortname.replace('/yellow/', '/ic_black/');
  }
  if (iconShortname.includes('blue')) {
    return iconShortname.replace('/blue/', '/ic_black/');
  }
  if (iconShortname.includes('black')) {
    return iconShortname.replace('/black/', '/ic_white/');
  }

  return iconShortname.replace(/\/(?=[^/]*$)/, '/ic_black/');
};

async function exportStickerAssets(airtable, dentifTechTypes, firstPurpose) {
  // Hexagons svg url
  let urls = Object.keys(imagesUrl).map((key) => imagesUrl[key]);
  // Tech Type svg urls
  if (dentifTechTypes.length) urls = urls.concat(dentifTechTypes.map((techType) => `/images/${getIconPath(airtable, 'techType', techType)}.svg`));
  // First Purpose svg url
  if (firstPurpose) urls = urls.concat(`/images/${getIconPath(airtable, 'purpose', firstPurpose)}.svg`);

  const svgBlobs = urls.map((url) => download(url));
  const zip = JsZip();

  svgBlobs.forEach((blob, i) => {
    zip.file(`svg-${i}.svg`, blob);
  });

  const imgs = await Promise.all(
    Array.from(document.querySelectorAll('[data-img-as-png]'))
      .map((img: HTMLImageElement, i) => convertImgToBlob(img)),
  );

  imgs.forEach((blob, i) => {
    zip.file(`images-${i}.png`, blob);
  });

  zip.generateAsync({ type: 'blob' }).then((zipFile) => {
    const currentDate = new Date().getTime();
    const fileName = `stickers-${currentDate}.zip`;
    return saveAs(zipFile, fileName);
  });
}

async function convertImgToBlob(img) {
  // take any image
  const canvas = document.createElement('canvas');
  canvas.width = img.clientWidth * 2;
  canvas.height = img.clientHeight * 2;

  const context = canvas.getContext('2d');

  // copy image to it (this method allows to cut image)
  context.drawImage(img, 0, 0);
  // we can context.rotate(), and do many other things on canvas

  // toBlob is async opereation, callback is called when done
  const blobImg = await new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), 'image/png');
  });

  return blobImg as Blob;
}

export default SensorPrint;

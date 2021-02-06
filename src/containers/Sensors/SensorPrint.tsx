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
        exportStickerAssets(airtable.data, qrCodeSrc, dentifTechTypes, firstPurpose);
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

async function exportStickerAssets(airtable, qrCodeSrc, dentifTechTypes, firstPurpose) {
  // // hexagons svg url
  // let urls = Object.keys(imagesUrl).map((key) => imagesUrl[key]);
  // // Tech Type svg urls
  // if (dentifTechTypes.length) urls = urls.concat(dentifTechTypes.map((techType) => `/${getIconPath(airtable, 'techType', techType)}`));
  // // First Purpose svg url
  // if (firstPurpose) urls = urls.concat(`/${getIconPath(airtable, 'purpose', firstPurpose)}`);

  // const svgBlobs = urls.map((url) => download(url));
  const zip = JsZip();

  // svgBlobs.forEach((blob, i) => {
  //   zip.file(`svg-${i}.svg`, blob);
  // });

  // zip.file('qrcode.png', qrCodeSrc);

  // Badge PNG screenshot
  // const screenshots = await Promise.all(
  //   Array.from(document.querySelectorAll('[data-div-as-png]').entries())
  //     .map(([, div]: [number, HTMLElement]) => html2canvas(div, {
  //       backgroundColor: 'transparent',
  //     })),
  // );

  // const el = document.querySelector('[data-div-as-png]') as HTMLElement;
  const screenshots = await Promise.all(
    Array.from(document.querySelectorAll('[data-div-as-png]'))
      .map((el: HTMLElement, i) => html2canvas(el, {
        backgroundColor: 'transparent',
        allowTaint: true,
        removeContainer: true,
        // scrollX: -window.scrollX,
        scrollY: -window.scrollY,
        // windowWidth: document.documentElement.offsetWidth,
        // windowHeight: document.documentElement.offsetHeight,
        onclone: (doc) => {
          const ele = doc.querySelectorAll('[data-div-as-png]')[i] as HTMLElement;
          ele.style['background-color'] = 'transparent';
        },
      }).then((canvas) => {
        debugger;
        canvas.toBlob((blob) => {
          debugger;

          Promise.resolve(blob);
        }, 'image/png', 0.95);
      })),
  );

  debugger;
  // debugger;
  // blobs.forEach((blob: Blob, i) => {
  //   zip.file(`png-${i}.png`, blob);
  // });

  // domToImage.toBlob(document.getElementById('test'), {
  //   width: 204,
  //   height: 219,
  //   style: {
  //     position: 'absolute',
  //     left: '-10px',
  //     top: '0',
  //     backgroundColor: 'red',
  //     margin: '10px',
  //   },
  // })
  //   .then((blob) => {
  //     saveAs(blob, 'my-node.png');
  //   });
  // html2canvas(el, {
  //   backgroundColor: 'transparent',
  //   allowTaint: true,
  //   removeContainer: true,
  //   // scrollX: -window.scrollX,
  //   scrollY: -window.scrollY,
  //   // windowWidth: document.documentElement.offsetWidth,
  //   // windowHeight: document.documentElement.offsetHeight,
  //   // onclone: (doc) => {
  //   //   const rect = document.getElementById('test').getBoundingClientRect();
  //   //   debugger;
  //   //   const ele = doc.getElementById('test') as HTMLElement;
  //   //   ele.style.position = 'fixed';
  //   //   ele.style.left = '0';
  //   //   ele.style.right = '0';
  //   //   ele.style.top = '0';
  //   //   ele.style.bottom = '0';
  //   //   ele.style['z-index'] = '10';
  //   //   ele.style.margin = '0';
  //   //   ele.style.width = `${rect.width}px`;
  //   //   ele.style.height = `${rect.height}px`;
  //   // },
  // }).then((canvas) => {
  //   const imageData = canvas.toDataURL('image/png');
  //   const newData = imageData.replace(/^data:image\/png/, 'data:application/octet-stream');
  //   saveAs(newData, 'blob.png');
  // });

  zip.generateAsync({ type: 'blob' }).then((zipFile) => {
    const currentDate = new Date().getTime();
    const fileName = `stickers-${currentDate}.zip`;
    return saveAs(zipFile, fileName);
  });
}

export default SensorPrint;

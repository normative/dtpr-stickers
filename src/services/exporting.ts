import JsZip from 'jszip';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';

import { imagesUrl } from 'common/constants';
import { getIconConfig } from 'common/helpers';

const download = (url: string) => fetch(url).then((resp) => resp.blob());

async function convertImgToBlob(img: HTMLImageElement) {
  const canvas = document.createElement('canvas');
  canvas.width = img.clientWidth * 2;
  canvas.height = img.clientHeight * 2;

  const context = canvas.getContext('2d');
  context.drawImage(img, 0, 0);

  const blobImg = await new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(blob);
    }, 'image/png');
  });

  return blobImg as Blob;
}

async function convertDivToBlob(element: HTMLElement) {
  const canvas = document.createElement('canvas');
  canvas.width = element.clientWidth;
  canvas.height = element.clientHeight;

  const divCanvas = await html2canvas(element, {
    allowTaint: true,
    backgroundColor: 'transparent',
    canvas,
    height: element.clientHeight,
    width: element.clientWidth,
    scrollY: -window.scrollY,
    scale: 1,
  });

  const blobDiv = await new Promise((resolve) => {
    divCanvas.toBlob((blob) => {
      resolve(blob);
    }, 'image/png');
  });

  return blobDiv as Blob;
}

async function exportStickerAssets(airtable, dentifTechTypes: string[], firstPurpose: string) {
  // Hexagons svg url
  let urls = Object.keys(imagesUrl).map((key) => imagesUrl[key]);
  // Tech Type svg urls
  if (dentifTechTypes.length) urls = urls.concat(dentifTechTypes.map((techType) => getIconConfig(airtable, 'techType', techType)?.iconSrc));
  // First Purpose svg url
  if (firstPurpose) urls = urls.concat(getIconConfig(airtable, 'purpose', firstPurpose)?.iconSrc);

  const svgBlobs = urls.map((url) => download(url));
  const zip = JsZip();

  svgBlobs.forEach((blob, i) => {
    zip.file(`svg-${i}.svg`, blob);
  });

  const imgs = await Promise.all(
    Array.from(document.querySelectorAll('[data-img-as-png]'))
      .map((img: HTMLImageElement) => convertImgToBlob(img)),
  );

  imgs.forEach((blob, i) => {
    zip.file(`images-${i}.png`, blob);
  });

  const divs = await Promise.all(
    Array.from(document.querySelectorAll('[data-div-as-png]'))
      .map((div: HTMLElement) => convertDivToBlob(div)),
  );

  divs.forEach((blob, i) => {
    zip.file(`divs-${i}.png`, blob);
  });

  zip.generateAsync({ type: 'blob' }).then((zipFile) => {
    const currentDate = new Date().getTime();
    const fileName = `stickers-${currentDate}.zip`;
    return saveAs(zipFile, fileName);
  });
}

export default exportStickerAssets;

import JsZip from 'jszip';
import { saveAs } from 'file-saver';

import { imagesUrl } from 'common/constants';

const download = (url: string) => fetch(url).then((resp) => resp.blob());

function getIconsBlobs() {
  const stickers = Array.from(document.querySelectorAll('[data-export-icon]'));
  const preface = '<?xml version="1.0" standalone="no"?>\r\n';
  return stickers.map((stickerEl) => new Blob([preface, stickerEl.outerHTML], { type: 'image/svg+xml;charset=utf-8' }));
}

function getBadgesBlobs() {
  const stickers = Array.from(document.querySelectorAll('[data-export-badge]'));
  const preface = '<?xml version="1.0" standalone="no"?>\r\n';
  return stickers.map((stickerEl) => {
    const p = stickerEl.querySelector('p');
    p.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
    return new Blob([preface, stickerEl.outerHTML], { type: 'image/svg+xml;charset=utf-8' });
  });
}

async function exportStickerAssets() {
  const urls = Object.keys(imagesUrl).map((key) => imagesUrl[key]);

  const svgBlobs = urls.map((url) => download(url));
  const zip = JsZip();

  svgBlobs.forEach((blob, i) => {
    zip.file(`svg-${i}.svg`, blob);
  });

  const iconsBlobs = getIconsBlobs();
  iconsBlobs.forEach((badgeBlob, i) => {
    zip.file(`icon-${i}.svg`, badgeBlob);
  });

  const badgesBlobs = getBadgesBlobs();
  badgesBlobs.forEach((badgeBlob, i) => {
    zip.file(`badge-${i}.svg`, badgeBlob);
  });

  zip.generateAsync({ type: 'blob' }).then((zipFile) => {
    const currentDate = new Date().getTime();
    const fileName = `stickers-${currentDate}.zip`;
    return saveAs(zipFile, fileName);
  });
}

export default exportStickerAssets;

import JsZip from 'jszip';
import { saveAs } from 'file-saver';

import { imagesUrl } from 'common/constants';

const download = (url: string) => fetch(url).then((resp) => resp.blob());

const PREFACE = '<?xml version="1.0" standalone="no"?>\r\n';
const FONT_STYLE = '<style type="text/css">@import url(https://fonts.googleapis.com/css?family=Google+Sans|Google+Sans:bold|Google+Sans:medium|Google+Sans:mediumItalic|Google+Sans:bolditalic|Google+Sans:italic);</style>';

function includeDesignElements(el: HTMLElement) {
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  defs.innerHTML = FONT_STYLE;
  el.insertBefore(defs, el.firstChild);

  const p = el.querySelector('p');
  p.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
}

function getIconsTextBlobs() {
  const stickers = Array.from(document.querySelectorAll('[data-export-icon-text]'));
  return stickers.map((stickerEl: HTMLElement) => {
    includeDesignElements(stickerEl);

    return {
      blob: new Blob([PREFACE, stickerEl.outerHTML], { type: 'image/svg+xml;charset=utf-8' }),
      name: stickerEl.dataset.exportIconText.replace(/\s/g, '-'),
    };
  });
}

function getBadgesBlobs() {
  const stickers = Array.from(document.querySelectorAll('[data-export-badge]'));
  return stickers.map((stickerEl: HTMLElement) => {
    includeDesignElements(stickerEl);

    return {
      blob: new Blob([PREFACE, stickerEl.outerHTML], { type: 'image/svg+xml;charset=utf-8' }),
      name: stickerEl.dataset.exportBadge.replace(/\s/g, '-'),
    };
  });
}

async function exportStickerAssets() {
  const urls = Object.keys(imagesUrl).map((key) => imagesUrl[key]);

  const svgBlobs = urls.map((url) => download(url));
  const zip = JsZip();

  svgBlobs.forEach((blob, i) => {
    zip.file(`hexagon-${i}.svg`, blob);
  });

  const iconsBlobs = getIconsTextBlobs();
  iconsBlobs.forEach(({ blob, name }) => {
    zip.file(`${name}-icon-text.svg`, blob);
  });

  const badgesBlobs = getBadgesBlobs();
  badgesBlobs.forEach(({ blob, name }) => {
    zip.file(`${name}-sticker.svg`, blob);
  });

  zip.generateAsync({ type: 'blob' }).then((zipFile) => {
    const currentDate = new Date().getTime();
    const fileName = `stickers-${currentDate}.zip`;
    return saveAs(zipFile, fileName);
  });
}

export default exportStickerAssets;

import JsZip from 'jszip';
import { saveAs } from 'file-saver';

const PREFACE = '<?xml version="1.0" standalone="no"?>\r\n';
const FONT_STYLE = '<style type="text/css">@import url(https://fonts.googleapis.com/css?family=Google+Sans|Google+Sans:bold|Google+Sans:medium|Google+Sans:mediumItalic|Google+Sans:bolditalic|Google+Sans:italic);</style>';

function includeDesignElements(el: HTMLElement) {
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  defs.innerHTML = FONT_STYLE;
  el.insertBefore(defs, el.firstChild);

  const p = el.querySelector('p');
  p.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
}

function getBlobName(stickerEl: HTMLElement, attributeName: string) {
  const attrName = attributeName
    .toLowerCase()
    .replace('data-', '')
    .replace(/-(.)/g, (match, group1) => group1.toUpperCase());
  return stickerEl.dataset[attrName].replace(/\s/g, '-').toLowerCase();
}

function findSvgsAndConvertToBlobs(dataAttribute: string, shouldIncludeDesignElements = true) {
  const stickers = Array.from(document.querySelectorAll(`[${dataAttribute}]`));
  return stickers.map((stickerEl: HTMLElement) => {
    if (shouldIncludeDesignElements) includeDesignElements(stickerEl);
    return {
      blob: new Blob([PREFACE, stickerEl.outerHTML], { type: 'image/svg+xml;charset=utf-8' }),
      name: getBlobName(stickerEl, dataAttribute),
    };
  });
}

async function exportStickerAssets() {
  const iconsBlobs = findSvgsAndConvertToBlobs('data-export-icon-text');
  const badgesBlobs = findSvgsAndConvertToBlobs('data-export-badge');
  const hexagonsBlobs = findSvgsAndConvertToBlobs('data-export-hexagon', false);

  const zip = JsZip();
  [...iconsBlobs, ...badgesBlobs, ...hexagonsBlobs].forEach(({ blob, name }) => {
    zip.file(`${name}.svg`, blob);
  });

  zip.generateAsync({ type: 'blob' }).then((zipFile) => {
    const currentDate = new Date().getTime();
    const fileName = `stickers-${currentDate}.zip`;
    return saveAs(zipFile, fileName);
  });
}

export default exportStickerAssets;

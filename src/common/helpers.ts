import { imagesUrl } from './constants';
import { AirtableData, IconConfig, Option } from './types';

export function getSensorPath(sensorId: string) { return `/sensors/${sensorId}`; }
export function getSensorPrintPath(sensorId: string) { return `/sensors/${sensorId}/print`; }
export function getPlacePath(placeId: string) { return `/places/${placeId}`; }

export const badgeSizeToStyle = (badgeSize: number, ratio: number = 1.137) => ({
  height: `${badgeSize * ratio}in`,
  width: `${badgeSize}in`,
});

export const getIconConfig = (
  airtableData: AirtableData, airtableKey: string, badgeName: string,
): IconConfig | null => {
  const config = airtableData[airtableKey].find((option: Option) => option.name === badgeName);
  if (!config) {
    return null;
  }
  const { iconShortname, name } = config;
  let hexSrc = imagesUrl.WHITE_HEX_URL;
  let iconPath = iconShortname.replace(/\/(?=[^/]*$)/, '/ic_black/');
  let fontColor = 'black';

  if (iconShortname.includes('yellow')) {
    hexSrc = imagesUrl.YELLOW_HEX_URL;
    iconPath = iconShortname.replace('/yellow/', '/ic_black/');
  } else if (iconShortname.includes('blue')) {
    hexSrc = imagesUrl.BLUE_HEX_URL;
    iconPath = iconShortname.replace('/blue/', '/ic_black/');
  } else if (iconShortname.includes('black')) {
    hexSrc = imagesUrl.BLACK_HEX_URL;
    iconPath = iconShortname.replace('/black/', '/ic_white/');
    fontColor = 'white';
  } else if (airtableKey === 'purpose') {
    // the name is inconsistent so we explitcly check for the purpose case :/
    hexSrc = imagesUrl.BLACK_HEX_URL;
    iconPath = iconShortname.replace(/\/(?=[^/]*$)/, '/ic_white/');
    fontColor = 'white';
  }

  return {
    hexSrc,
    iconSrc: `/images/${iconPath}.svg`,
    fontColor,
    iconName: name,
  };
};

import { StickerThemeVariant } from './constants';
import { AirtableData, Option } from './types';

export function getSensorPath(sensorId: string) { return `/sensors/${sensorId}`; }
export function getPlacePath(placeId: string) { return `/places/${placeId}`; }

interface StickerConfig {
  variant?: StickerThemeVariant;
  icon: string;
  context: string;
}

export function getStickerConfig(
  airtableData: AirtableData, airtableKey: string, badgeName: string,
): StickerConfig | null {
  const config = airtableData[airtableKey].find((option: Option) => option.name === badgeName);
  if (!config) {
    return null;
  }
  const { iconShortname } = config;
  const iconPath = iconShortname.split('/');
  const icon = iconPath.pop();
  const context = iconPath.shift();
  const variant = iconPath.shift();

  return { variant, context, icon };
}

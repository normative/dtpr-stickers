import { StickerIcons, StickerThemeVariant } from './constants';
import { AirtableData, Option } from './types';

export function getSensorPath(sensorId: string) { return `/sensors/${sensorId}`; }
export function getPlacePath(placeId: string) { return `/places/${placeId}`; }

export function findStickerThemeVariant(variantFromPath: string) {
  return Object.values(StickerThemeVariant)
    .find((enumVariant: string) => enumVariant === variantFromPath);
}

export function findStickerIcon(iconFromPath: string) {
  return Object.values(StickerIcons)
    .find((enumIcon: string) => enumIcon === iconFromPath);
}

interface StickerConfig {
  variant: StickerThemeVariant;
  icon: StickerIcons;
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
  const icon = findStickerIcon(iconPath[iconPath.length - 1]);
  if (!icon) return null;

  const variant = findStickerThemeVariant(iconPath[iconPath.length - 2]);
  return { variant, context: iconPath[0], icon };
}

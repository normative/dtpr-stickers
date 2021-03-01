import { InvalidEvent } from 'react';
import { StickerThemeVariant } from './constants';

export function getSensorPath(sensorId: string) { return `/sensors/${sensorId}`; }
export function getPlacePath(placeId: string) { return `/places/${placeId}`; }

interface PrintStickerConfig {
  variant?: StickerThemeVariant | string;
  icon: string;
  taxonomyProp: string;
}

export function getPrintStickerConfig(
  icon: string,
  defaultVariant: StickerThemeVariant = StickerThemeVariant.WHITE,
): PrintStickerConfig | null {
  const iconPath: string[] = icon.split('/');
  const svg = iconPath.pop();
  const taxonomyPropName = iconPath.shift();
  const variant = iconPath.shift() || defaultVariant;

  return { variant, taxonomyProp: taxonomyPropName, icon: svg };
}

export function showPlaceholderOnImgError(placeholderSrc: string) {
  return (e: InvalidEvent<HTMLImageElement>) => { e.target.src = placeholderSrc; };
}

export function getSensorPath(sensorId: string) { return `/sensors/${sensorId}`; }
export function getSensorPrintPath(sensorId: string) { return `/sensors/${sensorId}/print`; }
export function getPlacePath(placeId: string) { return `/places/${placeId}`; }

export const badgeSizeToStyle = (badgeSize: number, ratio: number = 1.137) => ({
  height: `${badgeSize * ratio}in`,
  width: `${badgeSize}in`,
});

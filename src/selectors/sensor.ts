/* eslint-disable import/prefer-default-export */
import taxonomy from 'data/taxonomy.json';

export function getTaxonomyPropValuesDetails(
  taxonomyProp: string, sensorId?: string, taxonomyPropValues?: string[],
) {
  if (!sensorId || !taxonomyPropValues?.length) return [];

  return taxonomyPropValues
    .map((value) => taxonomy[taxonomyProp]?.[value])
    .filter((item) => item);
}

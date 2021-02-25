/* eslint-disable import/prefer-default-export */
import { taxonomyProps, taxonomyPropLabels } from 'common/constants';
import { SensorData } from 'common/types';
import { getTaxonomyPropValuesDetails } from 'selectors/sensor';

export function prepareSensorTaxonomy(
  sensorId: string, sensorData: SensorData,
) {
  return Object
    .values(taxonomyProps)
    .map(
      (taxonomyProp: string) => ({
        taxonomyProp,
        label: taxonomyPropLabels[taxonomyProp],
        options: getTaxonomyPropValuesDetails(
          taxonomyProp, sensorId, sensorData?.[taxonomyProp],
        ),
      }),
    );
}

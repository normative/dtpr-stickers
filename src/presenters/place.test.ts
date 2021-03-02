
import { sensorMappedIntoDataTypeValues, sensorsData, sensorsGroupedByDataType, sensorsGroupedByNotFound, sensorsGroupedByPurpose, sensorsGroupedBySystems, sensorsMappedIntoSystemValues, splitSensorsByDataType, splitSensorsBySystems } from '__mockData__/presenterPlace';
import { groupSensorsByTaxonomyPropValues, mapSensorsIntoTaxonomyPropValues, mapSensorToTaxonomyPropValue, prepareSystemsTaxonomy, splitSensorsWithTaxonomyPropFromOthers } from './place';
import { SensorData, Sensors } from 'common/types';
import { taxonomyProps } from 'common/constants';
import flattenDeep from 'lodash.flattendeep';


const taxonomyToBeFlatten = ['systems', 'techType', 'purpose', 'dataType'];

describe('group sensors by taxonomy', () => {
  test('should split sensors into two groups: "[taxonomy prop]" & "Others"', () => {
    expect(splitSensorsWithTaxonomyPropFromOthers(sensorsData, taxonomyProps.DATA_TYPE)).toEqual(splitSensorsByDataType);

    expect(splitSensorsWithTaxonomyPropFromOthers(sensorsData, taxonomyProps.SYSTEMS)).toEqual(splitSensorsBySystems);
  });

  test('should map sensors into taxonomy prop values', () => {
    expect(
      mapSensorsIntoTaxonomyPropValues(splitSensorsByDataType.taxonomyProp, taxonomyProps.DATA_TYPE),
    ).toEqual(sensorMappedIntoDataTypeValues);

    expect(
      mapSensorsIntoTaxonomyPropValues(splitSensorsBySystems.taxonomyProp, taxonomyProps.SYSTEMS),
    ).toEqual(sensorsMappedIntoSystemValues);

    expect(
      mapSensorsIntoTaxonomyPropValues(splitSensorsBySystems.taxonomyProp, 'notFound'),
    ).toEqual([[]]);
  });

  test('should group sensors by taxonomy prop values', () => {
    expect(groupSensorsByTaxonomyPropValues(sensorsData, taxonomyProps.PURPOSE)).toEqual(sensorsGroupedByPurpose);

    expect(groupSensorsByTaxonomyPropValues(sensorsData, taxonomyProps.DATA_TYPE)).toEqual(sensorsGroupedByDataType);

    expect(groupSensorsByTaxonomyPropValues(sensorsData, taxonomyProps.SYSTEMS)).toEqual(sensorsGroupedBySystems);

    expect(groupSensorsByTaxonomyPropValues(sensorsData, 'notFound')).toEqual(sensorsGroupedByNotFound);
  });

  console.log('>>>>>>>>>', JSON.stringify(flattenDeep(Object.values(sensorsData['20'].datachain))));
  console.log('>>>>>>>>>', JSON.stringify(flattenDeep(Object.values(sensorsData['30'].datachain))));
})

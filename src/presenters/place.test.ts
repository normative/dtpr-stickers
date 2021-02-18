
import { allSensorsTaxonomyFlatten, placeSensors, sensorsGroupedByTaxonomyPropValues, taxonomyPropWithSensor } from '__mockData__/groupSensorByTaxonomyPropValue';
import { flattenSensorTaxonomy, groupSensorByTaxonomyPropValue, mapSensorToMultipleTaxonomyProp, mapSensorToTaxonomyProp } from './place';

const taxonomyToBeFlatten = ['systems', 'techType', 'purpose', 'dataType'];

describe('group sensors by taxonomy', () => {
  test('should map sensor to taxonomy property', () => {
    expect(mapSensorToTaxonomyProp(placeSensors[7], 'techType')).toEqual([{
      "sensorDescription": "Page Description",
      "sensorName": "Emergency Sensor",
      "taxonomyProp": "techType",
      "value": "Hands Free",
    }]);

    expect(mapSensorToTaxonomyProp(placeSensors[1], 'systems')).toEqual([]);
  });

  test('should map sensor to multiple taxonomy property', () => {
    expect(mapSensorToMultipleTaxonomyProp(placeSensors[7], taxonomyToBeFlatten)).toEqual(taxonomyPropWithSensor);
  });

  test('should flatten all sensor taxonomy', () => {
    expect(flattenSensorTaxonomy(placeSensors, taxonomyToBeFlatten)).toEqual(allSensorsTaxonomyFlatten);
  });

  test('should group all sensor by taxonomy prop values', () => {
    expect(groupSensorByTaxonomyPropValue(placeSensors, taxonomyToBeFlatten)).toEqual(sensorsGroupedByTaxonomyPropValues);
  });
})

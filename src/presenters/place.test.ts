
import { allSensorsTaxonomyFlatten, multipleTaxonomyPropsWithSensors, placeSensors, sensorsGroupedByTaxonomyPropValues, taxonomyPropWithSensor } from '__mockData__/groupSensorByTaxonomyPropValue';
import { flattenSensorTaxonomy, groupSensorByTaxonomyPropValue, mapMultipleSensorsToMultipleTaxonomyProps, mapSensorToMultipleTaxonomyProp, mapSensorToTaxonomyProp } from './place';

const taxonomyToBeFlatten = ['systems', 'techType', 'purpose', 'dataType'];

describe('group sensors by taxonomy', () => {
  test('should map sensor to taxonomy property', () => {
    expect(mapSensorToTaxonomyProp({ id: 8, ...placeSensors[8] }, 'techType')).toEqual([{
      id: 8,
      sensorDescription: "Page Description",
      sensorName: "Emergency Sensor",
      taxonomyProp: "techType",
      value: "Hands Free",
    }]);

    expect(mapSensorToTaxonomyProp({ id: 8, ...placeSensors[8] }, 'systems')).toEqual([
      {
        id: 8,
        sensorDescription: 'Page Description',
        sensorName: 'Emergency Sensor',
        taxonomyProp: 'systems',
        value: 'HVAC System',
      },
      {
        id: 8,
        sensorDescription: 'Page Description',
        sensorName: 'Emergency Sensor',
        taxonomyProp: 'systems',
        value: 'Observatory',
      },
    ]);

    expect(mapSensorToTaxonomyProp({ id: 3, ...placeSensors[2] }, 'systems')).toEqual([]);
  });

  test('should map sensor to multiple taxonomy property', () => {
    expect(mapSensorToMultipleTaxonomyProp({ id: '8', ...placeSensors[8] }, taxonomyToBeFlatten)).toEqual(taxonomyPropWithSensor);
  });

  test('should map multiple sensors to multiple taxonomy properties', () => {
    expect(mapMultipleSensorsToMultipleTaxonomyProps(placeSensors, taxonomyToBeFlatten)).toEqual(multipleTaxonomyPropsWithSensors);
  });

  test('should flatten all sensor taxonomy', () => {
    expect(flattenSensorTaxonomy(placeSensors, taxonomyToBeFlatten)).toEqual(allSensorsTaxonomyFlatten);
  });

  test('should group all sensor by taxonomy prop values', () => {
    expect(groupSensorByTaxonomyPropValue(placeSensors, taxonomyToBeFlatten)).toEqual(sensorsGroupedByTaxonomyPropValues);
  });
})

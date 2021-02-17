import flattenDeep from 'lodash.flattendeep';
import groupBy from 'lodash.groupby';

import { allSensorsTaxonomyFlatten, placeSensors, sensorsGroupedByTaxonomyPropValues, taxonomyPropWithSensor } from '__mockData__/groupSensorByTaxonomyPropValue';

const taxonomyToBeFlatten = ['systems', 'techType', 'purpose', 'dataType'];

function groupSensorByTaxonomyPropValue(sensors, taxonomy) {
  const flattenList = flattenSensorTaxonomy(sensors, taxonomy);
  return groupBy(flattenList, ({ taxonomyProp, value }) => {
    return `${taxonomyProp}:${value}`;
  });
}

function flattenSensorTaxonomy(sensors, taxonomy) {
  return flattenDeep(sensors.map((sensor) => (
    mapSensorToMultipleTaxonomyProp(sensor, taxonomy)
  )));
}

function mapSensorToMultipleTaxonomyProp(sensor, taxonomy) {
  return taxonomy.map((taxonomyProp) => {
    return mapSensorToTaxonomyProp(sensor, taxonomyProp);
  })
}

function mapSensorToTaxonomyProp(sensor, taxonomyProp) {
  let taxonomy = sensor[taxonomyProp];
  if (!taxonomy) return [];

  if(taxonomyProp === 'systems') {
    taxonomy = Object.values(sensor.systems).map(({ title }) => title);
  }

  return Object.values(taxonomy).map((taxonomyValue) => ({
    sensorName: sensor.name,
    sensorDescription: sensor.description,
    value: taxonomyValue,
    taxonomyProp,
  }));
}

describe('group sensors by taxonomy', () => {
  test('should map sensor to taxonomy property', () => {
    expect(mapSensorToTaxonomyProp(placeSensors[7], 'techType')).toEqual([{
      "sensorDescription": "Page Description",
      "sensorName": "Emergency Sensor",
      "taxonomyProp": "techType",
      "value": "Hands Free",
    }]);
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

import flattenDeep from 'lodash.flattendeep';
import groupBy from 'lodash.groupby';

export function mapSensorToTaxonomyProp(sensor, taxonomyProp) {
  let taxonomy = sensor[taxonomyProp];
  if (!taxonomy) return [];

  if (taxonomyProp === 'systems') {
    taxonomy = Object.values(sensor.systems).map(({ title }) => title);
  }

  return Object.values(taxonomy).map((taxonomyValue) => ({
    sensorName: sensor.name,
    sensorDescription: sensor.description,
    value: taxonomyValue,
    taxonomyProp,
  }));
}

export function mapSensorToMultipleTaxonomyProp(sensor, taxonomy) {
  return taxonomy.map((taxonomyProp) => mapSensorToTaxonomyProp(sensor, taxonomyProp));
}

export function flattenSensorTaxonomy(sensors, taxonomy) {
  return flattenDeep(sensors.map((sensor) => (
    mapSensorToMultipleTaxonomyProp(sensor, taxonomy)
  )));
}

export function groupSensorByTaxonomyPropValue(sensors, taxonomy) {
  const flattenList = flattenSensorTaxonomy(sensors, taxonomy);
  return groupBy(flattenList, ({ taxonomyProp, value }) => `${taxonomyProp}:${value}`);
}

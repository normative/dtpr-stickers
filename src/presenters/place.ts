import flattenDeep from 'lodash.flattendeep';
import groupBy from 'lodash.groupby';

export function mapSensorToTaxonomyProp(sensor, taxonomyProp) {
  let taxonomy = sensor[taxonomyProp];
  if (!sensor.name || !taxonomy) return [];

  if (taxonomyProp === 'systems') {
    taxonomy = Object.values(sensor.systems).map(({ title }) => title);
  }

  return Object.values(taxonomy).map((taxonomyValue) => ({
    id: sensor.id,
    sensorName: sensor.name,
    sensorDescription: sensor.description,
    value: taxonomyValue,
    taxonomyProp,
  }));
}

export function mapSensorToMultipleTaxonomyProp(sensor, taxonomy) {
  return taxonomy.map((taxonomyProp) => mapSensorToTaxonomyProp(sensor, taxonomyProp));
}

export function mapMultipleSensorsToMultipleTaxonomyProps(sensors, taxonomy) {
  return Object.keys(sensors).map(
    (id) => mapSensorToMultipleTaxonomyProp({ id, ...sensors[id] }, taxonomy),
  );
}

export function flattenSensorTaxonomy(sensors, taxonomy) {
  const mappedSensorsToTaxonomy = mapMultipleSensorsToMultipleTaxonomyProps(sensors, taxonomy);
  return flattenDeep(mappedSensorsToTaxonomy);
}

export function groupSensorByTaxonomyPropValue(sensors, taxonomy) {
  const flattenList = flattenSensorTaxonomy(sensors, taxonomy);
  return groupBy(flattenList, ({ taxonomyProp, value }) => `${taxonomyProp}:${value}`);
}

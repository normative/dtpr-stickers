import {
  SensorData, SensorDetailsWithTaxonomyPropValue, Sensors, Systems,
} from 'common/types';
import flattenDeep from 'lodash.flattendeep';
import groupBy from 'lodash.groupby';
import sortBy from 'lodash.sortby';

export interface SensorDetails {
  id: string,
  name: string,
  description: string,
}

interface SplitSensorsWithTaxonomyPropFromOthers {
  taxonomyProp: SensorData[];
  other: SensorData[];
}

export function mapSensorToTaxonomyPropValue(
  { id, description, name }: SensorDetails, taxonomy: string[],
) {
  if (!name || !taxonomy) return [];

  return taxonomy.map((taxonomyPropValue) => ({
    id,
    name,
    description,
    taxonomyPropValue,
  }));
}

export function splitSensorsWithTaxonomyPropFromOthers(
  sensors: Sensors, taxonomyProp: string,
): SplitSensorsWithTaxonomyPropFromOthers {
  const sensorIds = Object.keys(sensors);

  const groupIds: { [taxonomyProp: string]: string[]; Others: string[] } = groupBy(
    sensorIds,
    (id: string) => {
      const composedData = { systems: sensors[id].systems, ...sensors[id].datachain };
      const taxonomyData = composedData[taxonomyProp];
      if (!taxonomyData || !Object.values(taxonomyData).length) {
        return 'other';
      }
      return 'taxonomyProp';
    },
  );

  return Object.keys(groupIds).reduce((res, group) => {
    res[group] = groupIds[group].map((id: string) => ({ id, ...sensors[id] }));
    return res;
  }, { taxonomyProp: [], other: [] });
}

export function mapSensorsIntoTaxonomyPropValues(
  sensors: SensorData[], taxonomyProp: string,
) {
  return sensors.map((sensor) => {
    const taxonomy = sensor.datachain[taxonomyProp] || sensor[taxonomyProp] || [];
    const titles = Object.values(taxonomy).map(({ title }) => title);
    return mapSensorToTaxonomyPropValue(sensor, titles);
  });
}

export function groupSensorsByTaxonomyPropValues(sensors: Sensors, taxonomyProp: string) {
  const sensorsWithTaxonomy = splitSensorsWithTaxonomyPropFromOthers(sensors, taxonomyProp);
  const taxonomyWithSensorDetails = mapSensorsIntoTaxonomyPropValues(
    sensorsWithTaxonomy?.taxonomyProp, taxonomyProp,
  );
  const flattenList = sortBy(
    flattenDeep(taxonomyWithSensorDetails), (s: SensorDetailsWithTaxonomyPropValue) => s.name,
  );
  const taxonomyGroup = groupBy(flattenList, ({ taxonomyPropValue }) => taxonomyPropValue);
  const otherSensorsWithName = sensorsWithTaxonomy?.other.filter((s: SensorData) => s.name);
  return {
    taxonomyPropValues: Object.keys(taxonomyGroup).sort(),
    taxonomyProp: taxonomyGroup,
    other: sortBy(otherSensorsWithName, (s: SensorData) => s.name),
  };
}

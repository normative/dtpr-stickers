import {
  SensorData, SensorDataWithId, SensorDetailsWithTaxonomyPropValue, Sensors, Systems,
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
  [taxonomyProp: string]: SensorDataWithId[];
  Others?: SensorDataWithId[];
}

export function prepareSystemsTaxonomy(taxonomy: Systems): string[] {
  if (!taxonomy || !Object.keys(taxonomy).length) return [];
  return Object.values(taxonomy).map(({ title }) => title);
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
    sensorIds, (id: string) => {
      if (!sensors[id]
        || !sensors[id][taxonomyProp]
        || !Object.values(sensors[id][taxonomyProp]).length
      ) {
        return 'Others';
      }
      return taxonomyProp;
    },
  );

  return Object.keys(groupIds).reduce((res, group) => {
    res[group] = groupIds[group].map((id: string) => ({ id, ...sensors[id] }));
    return res;
  }, { [taxonomyProp]: [], Others: [] });
}

export function mapSensorsIntoTaxonomyPropValues(
  sensors: SensorDataWithId[], taxonomyProp: string,
) {
  return sensors.map((sensor) => {
    let taxonomy = sensor[taxonomyProp];
    if (taxonomyProp === 'systems') taxonomy = prepareSystemsTaxonomy(taxonomy);
    return mapSensorToTaxonomyPropValue(sensor, taxonomy);
  });
}

export function groupSensorsByTaxonomyPropValues(sensors: Sensors, taxonomyProp: string) {
  const sensorsWithTaxonomy = splitSensorsWithTaxonomyPropFromOthers(sensors, taxonomyProp);
  const taxonomyWithSensorDetails = mapSensorsIntoTaxonomyPropValues(
    sensorsWithTaxonomy?.[taxonomyProp], taxonomyProp,
  );
  const flattenList = sortBy(
    flattenDeep(taxonomyWithSensorDetails), (s: SensorDetailsWithTaxonomyPropValue) => s.name,
  );
  const taxonomyGroup = groupBy(flattenList, ({ taxonomyPropValue }) => taxonomyPropValue);
  const otherSensorsWithName = sensorsWithTaxonomy?.Others.filter((s: SensorData) => s.name);
  return {
    taxonomyPropValues: Object.keys(taxonomyGroup).sort(),
    taxonomyProp: taxonomyGroup,
    Others: sortBy(otherSensorsWithName, (s: SensorData) => s.name),
  };
}

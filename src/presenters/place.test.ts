
import { dataTypePropValuesWithSensorDetails, groupedSensorsBySystemsTaxonomyProp, groupedSensorsByTaxonomyPropValues, placeSensors, sensorsGroupedByNotFoundTaxonomyProp, sensorsGroupedBySystemsPropValues, sensorsGroupedByTaxonomyProp, sensorsGroupedByTaxonomyPropValues } from '__mockData__/groupSensorByTaxonomyPropValue';
import { groupSensorsByTaxonomyPropValues, mapSensorsIntoTaxonomyPropValues, mapSensorToTaxonomyPropValue, prepareSystemsTaxonomy, splitSensorsWithTaxonomyPropFromOthers } from './place';
import { SensorDataWithId, Sensors } from 'common/types';


const taxonomyToBeFlatten = ['systems', 'techType', 'purpose', 'dataType'];

describe('group sensors by taxonomy', () => {
  test('should map sensor to taxonomy property', () => {
    expect(mapSensorToTaxonomyPropValue({ id: 8, ...placeSensors[8] }, placeSensors[8].techType)).toEqual([{
      id: 8,
      description: "Page Description",
      name: "Emergency Sensor",
      taxonomyPropValue: "Hands Free",
    }]);
  });

  test('should prepare systems sensor to taxonomy as string[]', () => {
    expect(prepareSystemsTaxonomy(placeSensors[8].systems)).toEqual(["HVAC System", "Observatory"]);
  });

  test('should split sensors into two groups: "[taxonomy prop]" & "Others"', () => {
    expect(splitSensorsWithTaxonomyPropFromOthers(placeSensors, 'dataType')).toEqual(sensorsGroupedByTaxonomyProp);

    expect(splitSensorsWithTaxonomyPropFromOthers(placeSensors, 'systems')).toEqual(groupedSensorsBySystemsTaxonomyProp);
  });

  test('should map sensors into taxonomy prop values', () => {
    expect(
      mapSensorsIntoTaxonomyPropValues(sensorsGroupedByTaxonomyProp.dataType as unknown as SensorDataWithId[], 'dataType'),
    ).toEqual(dataTypePropValuesWithSensorDetails);

    expect(
      mapSensorsIntoTaxonomyPropValues(groupedSensorsBySystemsTaxonomyProp.systems as unknown as SensorDataWithId[], 'systems'),
    ).toEqual([[{"description": "Page Description", "id": "8", "name": "Emergency Sensor", "taxonomyPropValue": "HVAC System"}, {"description": "Page Description", "id": "8", "name": "Emergency Sensor", "taxonomyPropValue": "Observatory"}]]);
  });

  test('should group sensors by taxonomy prop values', () => {
    expect(groupSensorsByTaxonomyPropValues(placeSensors, 'dataType')).toEqual(groupedSensorsByTaxonomyPropValues);

    expect(groupSensorsByTaxonomyPropValues(placeSensors, 'systems')).toEqual(sensorsGroupedBySystemsPropValues);

    expect(groupSensorsByTaxonomyPropValues(placeSensors, 'notFound')).toEqual(sensorsGroupedByNotFoundTaxonomyProp);
  });
})

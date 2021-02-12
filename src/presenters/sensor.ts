/* eslint-disable import/prefer-default-export */
import { sensorsGroupLabels, sensorsGroupNames } from 'common/constants';
import { AirtableData, SensorData } from 'common/types';
import { getAirtableSensorsGroupData } from 'selectors/sensor';

export function prepareSensorsGroups(
  sensorId: string, sensorData: SensorData, airtableData: AirtableData,
) {
  return Object
    .values(sensorsGroupNames)
    .map(
      (sensorGroup: string) => ({
        sensorGroup,
        label: sensorsGroupLabels[sensorGroup],
        options: getAirtableSensorsGroupData(
          sensorGroup, sensorId, sensorData?.[sensorGroup], airtableData,
        ),
      }),
    );
}

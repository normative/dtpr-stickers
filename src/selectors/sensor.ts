/* eslint-disable import/prefer-default-export */
import { AirtableData, Option } from 'common/types';

export function getAirtableSensorsGroupData(
  sensorsGroupName: string, sensorId?: string, sensorsGroup?: string[], airtableData?: AirtableData,
) {
  if (!sensorId || !sensorsGroup || !sensorsGroup.length || !airtableData) return [];

  return sensorsGroup
    .map((name) => airtableData[sensorsGroupName]?.find(
      (airtableOption: Option) => airtableOption.name === name,
    ))
    .filter((item) => item);
}

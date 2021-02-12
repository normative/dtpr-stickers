/* eslint-disable import/prefer-default-export */
import { AirtableData, Option } from 'common/types';

export function getAirtableSensorsGroupData(
  sensorsGroupName: string, sensorId?: string, sensorsGroup?: string[], airtableData?: AirtableData,
) {
  if (!sensorId || !sensorsGroup || !sensorsGroup.length || !airtableData) return [];

  const sessionKey = `${sensorId}-${sensorsGroupName}`;
  // const datasetFromLS = sessionStorage.getItem(sessionKey);

  // if (datasetFromLS) return JSON.parse(datasetFromLS);

  const dataset = sensorsGroup
    .map((name) => airtableData[sensorsGroupName]?.find(
      (airtableOption: Option) => airtableOption.name === name,
    ))
    .filter((item) => item);

  // if (dataset?.length) {
  //   sessionStorage.setItem(sessionKey, JSON.stringify(dataset));
  // }

  return dataset;
}

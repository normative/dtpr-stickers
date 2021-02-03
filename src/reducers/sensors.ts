import { ReducerStateType, SensorData } from 'common/types';

export const FETCH_SENSORS_REQUESTED = 'FETCH_SENSORS_REQUESTED';
export function fetchSensorsRequested(): SensorsActionType {
  return ({ type: FETCH_SENSORS_REQUESTED });
}

export const FETCH_SENSORS_SUCCESSED = 'FETCH_SENSORS_SUCCESSED';
export function fetchSensorsSuccessed(sensors): SensorsActionType {
  return ({ type: FETCH_SENSORS_SUCCESSED, payload: { sensors } });
}

export const FETCH_SENSORS_FAILED = 'FETCH_SENSORS_FAILED';
export function fetchSensorsFailed(error): SensorsActionType {
  return ({ type: FETCH_SENSORS_FAILED, payload: { error } });
}

interface SensorsDataObjectType {
  [name: string]: SensorData;
}

export interface SensorsStateType extends ReducerStateType {
  data?: SensorsDataObjectType;
}

export const sensorsInitialState: SensorsStateType = {
  isFetching: false,
  didInvalidate: false,
  data: null,
  error: null,
};

interface SensorsPayloadType {
  sensors?: Array<SensorData> | [];
  error?: Error;
}

interface SensorsActionType {
  type: string;
  payload?: SensorsPayloadType;
}

function sensorsReducer(state, { type, payload }: SensorsActionType) {
  switch (type) {
    case FETCH_SENSORS_REQUESTED:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
        error: false,
      };
    case FETCH_SENSORS_SUCCESSED:
      return {
        ...state,
        isFetching: false,
        data: payload.sensors,
      };
    case FETCH_SENSORS_FAILED:
      return {
        ...state,
        isFetching: false,
        data: [],
        error: payload.error,
        didInvalidate: true,
      };
    default:
      throw new Error();
  }
}

export default sensorsReducer;

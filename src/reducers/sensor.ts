import { ReducerStateType, SensorData } from 'common/types';

export const FETCH_SENSOR_REQUESTED = 'FETCH_SENSOR_REQUESTED';
export function fetchSensorRequested(): SensorActionType {
  return ({ type: FETCH_SENSOR_REQUESTED });
}

export const FETCH_SENSOR_SUCCESSED = 'FETCH_SENSOR_SUCCESSED';
export function fetchSensorSuccessed(sensor): SensorActionType {
  return ({ type: FETCH_SENSOR_SUCCESSED, payload: { sensor } });
}

export const FETCH_SENSOR_FAILED = 'FETCH_SENSOR_FAILED';
export function fetchSensorFailed(error): SensorActionType {
  return ({ type: FETCH_SENSOR_FAILED, payload: { error } });
}

export interface SensorStateType extends ReducerStateType {
  data?: SensorData
}

export const sensorInitialState = {
  isFetching: false,
  didInvalidate: false,
  data: null,
  error: null,
};

interface SensorPayloadType {
  sensor?: SensorData;
  error?: Error;
}

interface SensorActionType {
  type: string;
  payload?: SensorPayloadType;
}

function sensorReducer(state, { type, payload }: SensorActionType) {
  switch (type) {
    case FETCH_SENSOR_REQUESTED:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
        error: false,
      };
    case FETCH_SENSOR_SUCCESSED:
      return {
        ...state,
        isFetching: false,
        data: payload.sensor,
      };
    case FETCH_SENSOR_FAILED:
      return {
        ...state,
        isFetching: false,
        data: null,
        error: payload.error,
        didInvalidate: true,
      };
    default:
      throw new Error();
  }
}

export default sensorReducer;

import { sessionKeys } from '../constants';
import { AirtableData, ReducerStateType } from '../types';

export const FETCH_AIRTABLE_REQUESTED = 'FETCH_AIRTABLE_REQUESTED';
export function fetchAirtableRequested(): AirtableActionType {
  return ({ type: FETCH_AIRTABLE_REQUESTED });
}

export const FETCH_AIRTABLE_SUCCESSED = 'FETCH_AIRTABLE_SUCCESSED';
export function fetchAirtableSuccessed(airtable): AirtableActionType {
  return ({ type: FETCH_AIRTABLE_SUCCESSED, payload: { airtable } });
}

export const FETCH_AIRTABLE_FAILED = 'FETCH_AIRTABLE_FAILED';
export function fetchAirtableFailed(error): AirtableActionType {
  return ({ type: FETCH_AIRTABLE_FAILED, payload: { error } });
}

export interface AirtableStateType extends ReducerStateType {
  loadedFromSession: Boolean;
  data?: AirtableData;
}

export const airtableInitialState: AirtableStateType = {
  loadedFromSession: false,
  isFetching: false,
  didInvalidate: false,
  data: null,
  error: null,
};

export function getAirtableDataInitialState() {
  const airtableData = sessionStorage.getItem(sessionKeys.AIRTABLE);
  const initialState = { ...airtableInitialState };
  if (airtableData) {
    initialState.data = JSON.parse(airtableData) as AirtableData;
    initialState.loadedFromSession = true;
  }
  return initialState;
}

interface AirtablePayloadType {
  airtable?: AirtableData;
  error?: Error;
}

interface AirtableActionType {
  type: string;
  payload?: AirtablePayloadType;
}

function airtableReducer(state, { type, payload }: AirtableActionType) {
  switch (type) {
    case FETCH_AIRTABLE_REQUESTED:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
        error: false,
      };
    case FETCH_AIRTABLE_SUCCESSED:
      return {
        ...state,
        isFetching: false,
        data: payload.airtable,
      };
    case FETCH_AIRTABLE_FAILED:
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

export default airtableReducer;
